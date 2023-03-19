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
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Error connecting to MongoDB: ', err);
});

// Create a new schema
const itemsSchema = new mongoose.Schema({
    name: String,
    listID: String,
    createdAt: {
        type: Date,
    }
});

// Create a new model
const Item = mongoose.model("Item", itemsSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
    addDefaultItems(lists.MAIN).then(r => console.log(r)).catch(err => console.error(err));

    getItemsNames(lists.MAIN)
        .then(itemNames => {
            res.render('list', {dayOfWeek: date.getDay(), listHeading: lists.MAIN, items: itemNames});
        })
        .catch(err => console.error(err));
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        if (req.body.listName === lists.WORK) {
            createItem(item, lists.WORK).then(r => console.log(r)).catch(err => console.error(err));
            res.redirect('/work');
        } else {
            createItem(item, lists.MAIN).then(r => console.log(r)).catch(err => console.error(err));
            res.redirect('/');
        }
    }
});

app.get('/work', (req, res) => {
    addDefaultItems(lists.WORK).then(r => console.log(r)).catch(err => console.error(err));

    getItemsNames(lists.WORK)
        .then(workItemsNames => {
            res.render('list', {dayOfWeek: date.getDay(), listHeading: lists.WORK, items: workItemsNames});
        })
        .catch(err => console.error(err));
});

app.post('/work', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        createItem(item, lists.WORK).then(r => console.log(r)).catch(err => console.error(err));
    }

    res.redirect('/work');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// --- MongoDB Functions ---
async function createItem(name, listId) {
    const item = new Item({
        name: name,
        listID: listId,
        createdAt: new Date(),
    });

    return await item.save();
}

async function getItems(listId) {
    return Item.find({listID: listId});
}

async function deleteItem(id) {
    return Item.findByIdAndRemove(id);
}

// --- Helper Functions ---
async function getItemsNames(listId) {
    let itemsNames = [];

    const items = await getItems(listId)
        .then(r => {
            return r;
        })
        .catch(err => {
            console.error(err);
        });

    console.log("getItemsNames: got " + items.length + " items");
    console.log(items);

    items.forEach(item => {
        itemsNames.push(item.name);
    });

    console.log("getItemsNames: got " + itemsNames.length + " item names");
    console.log(itemsNames);

    return itemsNames;
}

// --- Initial Data ---
const addDefaultItems = async (listId) => {
    const items = await getItems(listId);

    if (items.length === 0) {
        let defaultItems = [
            new Item({
                name: "Welcome to your todo list!",
                listID: listId,
            }),
            new Item({
                name: "Hit the + button to add a new item.",
                listID: listId,
            }),
            new Item({
                name: "<-- Hit this to delete an item.",
                listID: listId,
            })
        ];


        defaultItems.forEach(item => {
            createItem(item.name, item.listID).then(r => console.log(r)).catch(err => console.error(err));
        });

        console.log("Default items added");

        return;
    }

    console.log("Default items already exist");
}

