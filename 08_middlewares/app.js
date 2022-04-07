
const express = require("express");
const morgan = require("morgan")
app = express();

app.set("view engine", "ejs");

// listen 
app.listen(3030);

// middleware static files: images, css, etc..
// all files the server made accessible from frontend
app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req,res, next) => {
    console.log("new request made : ");
    console.log("host : ", req.hostname);
    console.log("path : ", req.path);
    console.log("method : ", req.method );
    console.log("-------------------------------------");
    next();
}) 

app.use((req,res, next) => {
    console.log("In the next middleware: ");
    console.log("-------------------------------------");
    next();
}) 

app.get("/", (req, res) => {
    const blogs =  [
        { title: "Yoshu finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",},
        { title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",},
        { title: "How to garden efficientlyfinds", snippet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",},
    ];
    
    res.render("index", {title: "Home", blogs});
});

app.use((req, res, next) => {
    console.log("Never seenmiddleware: if enter '/' route ");
    console.log("-------------------------------------");
    next();
})

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

