/* Route Parameters + Delete  + MVC
-----------------------------*/

const express = require("express");
// const { render } = require("ejs");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes")
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
app.use(express.urlencoded({extended: true}));


// routes
app.get("/", (req, res) => {
    res.redirect("/blogs")
    
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.use("/blogs",blogRoutes);


// 404
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

