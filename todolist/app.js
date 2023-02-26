const express = require('express');
const bodyParser = require('body-parser');

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('list', {dayOfWeek: getDay(), items: items});
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        items.push(item);
    }

    res.redirect('/');
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