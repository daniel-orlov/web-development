const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

const items = [];
const workItems = [];

const mainList = 'Main';
const workList = 'Work';

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('list', {dayOfWeek: date.getDay(), listHeading: mainList, items: items});
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        if (req.body.listName === workList) {
            workItems.push(item);
            res.redirect('/work');
        } else {
            items.push(item);
            res.redirect('/');
        }
    }
});

app.get('/work', (req, res) => {
    res.render('list', {dayOfWeek: date.getDay(), listHeading: workList, items: workItems});
});

app.post('/work', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        workItems.push(item);
    }

    res.redirect('/work');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
