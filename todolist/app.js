const express = require('express');
const bodyParser = require('body-parser');

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const day = getDay();
    res.render('list', {dayOfWeek: day});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

function getDay() {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    return today.toLocaleDateString('en-US', options);
}