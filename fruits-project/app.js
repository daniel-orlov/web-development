const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);

async function run() {
    try {
        const database = client.db('shopDB');
        const movies = database.collection('products');

        // Query for a movie that has the title 'Back to the Future'
        const query = { name: 'Pen' };
        const product = await movies.findOne(query);

        console.log(product);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);