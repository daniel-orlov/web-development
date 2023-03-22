const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const mongoose = require("mongoose");

// Create a new express app
const app = express();
const port = process.env.PORT || 3000;

const lists = {
    MAIN: 'Main',
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
    addDefaultItems(lists.MAIN).then(
        setTimeout(() => {
                getItems(lists.MAIN)
                    .then(items => {
                        res.render('list', {dayOfWeek: date.getDay(), listHeading: lists.MAIN, items: items});
                    })
                    .catch(err => console.error(err));
            },
            1000)
    ).catch(err => console.error(err));

    console.log("Getting items for list: " + req.body.listName);
});

app.post('/', (req, res) => {
    const item = req.body.newItem;

    if (item !== '') {
        const listID = req.body.listName
        createItem(item, listID).then(r => console.log("created item: " + r)).catch(err => console.error(err));
        res.redirect('/' + listID);
    } else {
        res.redirect('/');
    }
});

app.post('/delete', (req, res) => {
    const itemID = req.body.checkbox;
    deleteItem(itemID).then(r => console.log("deleted item: " + r)).catch(err => console.error(err));

    const listID = req.body.listName

    res.redirect('/' + listID);
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// Dynamic route for custom lists
app.get('/:customListName', (req, res) => {
    const customListName = req.params.customListName;

    addDefaultItems(customListName)
        .then(
            // Wait for the default items to be added before rendering the page
            setTimeout(() => {
                    getItems(customListName)
                        .then(items => {
                            res.render('list', {dayOfWeek: date.getDay(), listHeading: customListName, items: items});
                        })
                        .catch(err => console.error(err));
                },
                1000)
        ).catch(err => console.error(err));
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

        console.log("Default items (count: " + defaultItems.length + ") added to list: " + listId);
    }
}

