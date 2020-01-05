const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

const db = require('./database')

app.use('/test', (req, res) => res.send(db.getUsers));

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'static','index.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname,'static','leaderboard.html')));

app.listen(port, () => console.log(`Example app listening on port localhost:${port}`));

//now for dealing with fetches
app.use(express.json({limit:'1mb'}));

app.post('/testing', (req, res) => {
    console.log('I got a request!');
    console.log(req.body);
    //res.end();
    res.json({
        blah: "wow"
    });
})