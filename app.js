const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname,'static','index.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname,'static','leaderboard.html')));


app.listen(port, () => console.log(`Example app listening on port localhost:${port}`));