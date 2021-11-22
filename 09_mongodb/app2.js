
const express = require("express");
const mongoose = require("mongoose");

const Blog = require("./models/blogs")
app = express();


const url = "mongodb://localhost:27017/node_express_mongodb_net_ninja_blog";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>  {
    console.log('Connection to MongoDB:  Success !');
    app.listen(3030);
})
.catch((err) => console.log(err.message));

app.set("view engine", "ejs");


// middleware static files: images, css, etc..
app.use(express.static("public"));

// routes

app.get("/", (req, res) => {
    res.redirect("/"); 
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
    Blog.find().sort({createdAt: -1})
        .then(result => res.render("index", {title:"All Blogs", blogs: result}))
        .catch(err => console.log(err.message))  
})

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create New Blog" });
});

// 404
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

