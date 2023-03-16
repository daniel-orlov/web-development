const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const mongoose = require("mongoose");

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

const lists = {
    MAIN: 'Main',
    WORK: 'Work',
}

// Connect to MongoDB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create a new schema
const itemsSchema = {
    name: String,
    listID: String,
};

// Create a new model
const Item = mongoose.model("Item", itemsSchema);

// Create a new document
const item1 = new Item({
    name: "Welcome to your todo list!",
    listID: lists.MAIN,
});

const item2 = new Item({
    name: "Hit the + button to add a new item.",
    listID: lists.MAIN,
});

const item3 = new Item({
    name: "<-- Hit this to delete an item.",
    listID: lists.MAIN,
});

let defaultItems = [item1, item2, item3];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    const itemNames = getItemsNames(lists.MAIN).then(r => console.log(r));

    console.log(itemNames);

    res.render('list', {dayOfWeek: date.getDay(), listHeading: lists.MAIN, items: itemNames});
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        if (req.body.listName === lists.WORK) {
            Item.create({name: item, listID: lists.WORK}).then(r => console.log(r));
            res.redirect('/work');
        } else {
            Item.create({name: item, listID: mainList}).then(r => console.log(r));
            res.redirect('/');
        }
    }
});

app.get('/work', (req, res) => {
    workItems = getItemsNames(lists.WORK).then(r => console.log(r));

    if (workItems.length === 0) {
        workItems = defaultItems;
    }

    const workItemsNames = [];

    workItems.forEach(item => {
        workItemsNames.push(item.name);
    });

    res.render('list', {dayOfWeek: date.getDay(), listHeading: lists.WORK, items: workItemsNames});
});

const getItems = async (listId) => {
    await Item.find({listID: listId}).then(r => {
        return r.items;
    });
}

// Use getItems() to get the items from the database and then return the names of the items
const getItemsNames = async (listId) => {
    const items = await getItems(listId).then(r => {
        return r;
    })

    console.log(items);

    const itemNames = [];

    if (items.length === 0) {
        return [];
    }

    items.forEach(item => {
        itemNames.push(item.name);
    });

    return itemNames;
}


app.post('/work', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        Item.create({name: item, listID: lists.WORK}).then(r => console.log(r));
    }

    res.redirect('/work');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
