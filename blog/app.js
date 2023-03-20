const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

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

const postsSchema = new mongoose.Schema({
    title: String,
    slug: {type: String, unique: true},
    content: String,
    createdAt: {
        type: Date,
    },
});

const Post = mongoose.model("Post", postsSchema);

const navBarSlugs = [
    "home",
    "about",
    "contacts",
];

const defaultPosts = {
    HOME: {
        title: "Home",
        slug: "home",
        content: "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.",
    },
    ABOUT: {
        title: "About",
        slug: "about",
        content: "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
    CONTACTS: {
        title: "Contacts",
        slug: "contacts",
        content: "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.",
    },
};

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Handlers
// Home
app.get("/", async function (req, res) {
    const homePost = await addInitialPage(defaultPosts.HOME);
    const homeStartingContent = homePost.content;

    const posts = await getPosts();
    res.render("home", {homeStartingContent: homeStartingContent, posts: posts});

});

app.get("/home", function (req, res) {
    res.redirect("/");
});

// About
app.get("/about", function (req, res) {
    addInitialPage(defaultPosts.ABOUT).then(function (post) {
        res.render("about", {aboutContent: post.content});
    }).catch(function (err) {
        console.log("Error adding about: " + err);
    });
});

// Contacts
app.get("/contacts", function (req, res) {
    addInitialPage(defaultPosts.CONTACTS).then(function (post) {
        res.render("contacts", {contactsContent: post.content});
    }).catch(function (err) {
        console.log("Error adding contacts: " + err);
    });
});

// Compose
app.get("/compose", function (req, res) {
    res.render("compose");
});

app.post("/compose", function (req, res) {
    // create post slug from title
    const slug = _.kebabCase(req.body.title);

    // Verify if post already exists
    getPostBySlug(slug).then(function (post) {
        if (post.title) {
            console.log("Post already exists, creating new slug");
            // Create new slug
            const newSlug = slug + "-" + Math.floor(Math.random() * 10000000);
            // Create post
            createPost(req.body.title, newSlug, req.body.content).then(function (post) {
                console.log("Post created: " + post);
                res.redirect("/");
            }).catch(function (err) {
                console.log("Error creating post: " + err);
            });
        } else {
            // Create post
            createPost(req.body.title, slug, req.body.content).then(function (post) {
                console.log("Post created: " + post);
                res.redirect("/");
            }).catch(function (err) {
                console.log("Error creating post: " + err);
            });
        }
    }).catch(function (err) {
        console.log("Error getting post: " + err);
    });
});

// Posts
app.get("/posts/:postName", function (req, res) {
    const requestedTitle = req.params.postName;

    console.log("Requested post: " + requestedTitle);

    // Check if requested post is in navbar
    if (navBarSlugs.includes(requestedTitle)) {
        console.log("Requested post is in navbar");
        res.redirect("/" + requestedTitle);
    }

    getPostBySlug(requestedTitle).then(function (post) {
        // wait for post to be returned
        if (post) {
            console.log("Post found: " + post.title);
            res.render("post", {title: post.title, content: post.content});
        } else {
            console.log("Post not found");
            res.render("404");
        }
    }).catch(function (err) {
        console.log("Error getting post: " + err);
    });
});

app.listen(port, function () {
    console.log(`Server listening on http://localhost:${port}`)
});

// --- MongoDB Functions ---
async function createPost(title, slug, content) {
    const newPost = new Post({
        title: title,
        slug: slug,
        content: content,
        createdAt: new Date(),
    });

    return await newPost.save();
}

async function getPosts() {
    // Get all posts, sorted by date created descending
    return Post.find({}).sort({createdAt: -1})
}

async function getPostBySlug(slug) {
    // Check if post already exists, by querying the slug
    return Post.find({slug: slug}).then(function (posts) {
        if (posts.length > 0) {
            return posts[0];
        } else {
            return {};
        }
    }).catch(function (err) {
        console.log("Error getting post by slug: " + err);
    });
}

// --- Initial Data ---

const addInitialPage = async (post) => {
    const existingPost = await getPostBySlug(post.slug);
    if (existingPost.title) {
        console.log("Page already exists, slug: " + existingPost.slug);
        return existingPost;
    }

    const newPost = await createPost(post.title, post.slug, post.content)
    console.log("Page created, slug: " + newPost.slug);
    return newPost;
}

