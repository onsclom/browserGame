const express = require('express');
const path = require('path');
const app = express();

const Pool = require('pg').Pool
require('dotenv').config() //this is to read DATABASE_URL from .env

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'static','index.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname,'static','leaderboard.html')));

app.listen(port, () => console.log(`Example app listening on port localhost:${port}`));

//now for dealing with fetches
app.use(express.json({limit:'1mb'}));

app.post('/testing', (req, res) =>
    {
        pool.query('SELECT * FROM main ORDER BY score DESC', (err,dbstuff)=>res.json(dbstuff.rows));
    }
)

app.post('/score', (req, res) =>
    {
        console.log(req.body);
        const dbQuery= 'INSERT INTO main VALUES (\''+req.body.name+'\','+req.body.score+');'
        console.log(dbQuery);
        pool.query(dbQuery);
    }
)