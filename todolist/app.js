const express = require('express');
const bodyParser = require('body-parser');

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();

    let day = '';
    switch (currentDay) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            console.log('Error: current day is equal to: ' + currentDay);
    }

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