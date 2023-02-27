const express = require('express');
const bodyParser = require('body-parser');

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

let items = [];
let workItems = [];

const mainList = 'Main List';
const workList = 'Work List';

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('list', {dayOfWeek: getDay(),  listHeading: mainList, items: items});
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        if (req.body.list === workList) {
            workItems.push(item);
            res.redirect('/work');
        } else {
            items.push(item);
            res.redirect('/');
        }
    }
});

app.get('/work', (req, res) => {
    res.render('list', {dayOfWeek: getDay(), listHeading: workList, items: workItems});
});

app.post('/work', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        workItems.push(item);
    }

    res.redirect('/work');
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