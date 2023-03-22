const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified!'],
        unique: true,
    },
    rating: {
        type: Number,
        min: 1,
        max: 10,
    },
    review: String,
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: 'Peach',
    rating: 9,
    review: 'Looks great, tastes great, feels great, might make you all sticky though'
});

// fruit.save().then(r => console.log("Saved a new fruit: " + r));

const personSchema = new mongoose.Schema({
    name: String,
    surname: String,
    age: Number,
    favouriteFruit: fruitSchema,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    name: 'John',
    surname: 'Doe',
    age: 37,
    favouriteFruit: fruit,
});

person.save().then(r => console.log("Saved a new person: " + r));

const kiwi = new Fruit({
    name: 'Kiwi',
    rating: 8,
    review: 'Cool fruit',
});

const orange = new Fruit({
    name: 'Orange',
    rating: 6,
    review: 'Gets the job done',
});

const banana = new Fruit({
    name: 'Banana',
    rating: 9,
    review: 'Great for smoothies',
});

Fruit.insertMany([kiwi, orange, banana]).then(r => console.log(r));

Fruit.find().then(r => console.log("Found all the fruits:" + r));

Fruit.updateOne({ name: 'Peach' }, {review: 'Amazing shape and taste.'} ).then(r => console.log(r));

Fruit.deleteOne({ name: 'Peach' }).then(r => console.log(r));