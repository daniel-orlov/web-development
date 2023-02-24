const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');


// Create a new express app
const app = express();
const port = 3000;


app.listen(port, () => console.log(`Server is listening on port ${port}!`));