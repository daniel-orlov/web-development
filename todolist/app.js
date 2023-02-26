const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;