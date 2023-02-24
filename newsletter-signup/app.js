const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");

// Create a new express app
const app = express();
const port = 3000;
const listID = process.env.MAILCHIMP_LIST_ID;
const apiKey = process.env.MAILCHIMP_API_KEY;
const mailchimpDC = apiKey?.split('-')[1];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Handlers
app.get('/', (req, res) => res.sendFile(__dirname + '/signup.html'));
app.post('/', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    console.log(firstName, lastName, email);

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName

                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);

    const url = `https://${mailchimpDC}.api.mailchimp.com/3.0/lists/${listID}`;
    const options = {
        method: "POST",
        auth: `app:${apiKey}`
    }

    const request = https.request(url, options, (response) => {
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        })
    });

    request.write(jsonData);
    request.end();
});

app.listen(port, () => console.log(`Server is listening on port ${port}!`));
