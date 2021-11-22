/*
1: creating ejs file and use the render() to render ejs pages
2: passing data to ejs views
*/

const express = require("express");

const blogs = require('./Data/blogs')
// express app
app = express();

// register view engine
app.set("view engine", "ejs");
// app.set("views","myviews", "ejs"); // myviews = chosen place for views folder, default = views


// listen 
app.listen(3030);

app.get("/", (req, res) => {

    res.render("index", {title: "Home", blogs});
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create New Blog" });
});

// 404
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

