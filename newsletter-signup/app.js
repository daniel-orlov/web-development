const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


// Create a new express app
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

// Handlers
app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'));

app.listen(port, () => console.log(`Server is listening on port ${port}!`));