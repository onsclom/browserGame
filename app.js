const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;


//CODE FOR PSQL
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
//end


app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'static','index.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname,'static','leaderboard.html')));


app.listen(port, () => console.log(`Example app listening on port localhost:${port}`));