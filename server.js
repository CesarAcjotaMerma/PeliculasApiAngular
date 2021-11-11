const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/peliculasApp'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/peliculasApp/'}),
);

app.listen(process.env.PORT || 8080);