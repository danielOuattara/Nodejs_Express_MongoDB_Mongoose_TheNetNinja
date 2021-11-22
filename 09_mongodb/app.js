
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const Blog = require("./models/blogs")
app = express();

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db){
//     if(err) throw err.message;
//     console.log("Database connected !")

//     const database = db.db("node_express_mongodb_net_ninja_blog");
    
//     // database.createCollection("blogs", (err, res) => {
//     //     if(err) throw err.message;
//     //     console.log("Collection created !")
//     // })

//     // const myObj = { name: "Company Inc", address: "34 Highway, LA" };
//     // database.collection("blogs").insertOne(myObj, (err, res) => {
//     //     if (err) throw err;
//     //     console.log(" 1 document inserted !")
//     // });
// });

const url = "mongodb://localhost:27017/node_express_mongodb_net_ninja_blog";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>  {
    console.log('Connection to MongoDB:  Success !');
    app.listen(3030);
})
.catch((err) => console.log(err.message));


app.get("/add-blog", (req,res)=> {
    const blog = new Blog({
        title: "title",
        snippet:"snippet",
        body: "body"
    });
    blog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err.message))

})

app.get("/all-blogs", (req, res)=> {
    Blog.find()
    .then( result => res.send(result))
    .catch(err => console.log(err.message))
});


app.get("/blog", (req,res)=> {
    Blog.findById("613ad5218b8bc92be51b3fd3")
    .then(result => res.send(result))
    .catch(err => console.log(err.message))
});

app.set("view engine", "ejs");

// listen 


// middleware static files: images, css, etc..
app.use(express.static("public"));

app.use(morgan("dev"));

app.use((req,res, next) => {
    console.log("new request made : ");
    console.log("host : ", req.hostname);
    console.log("path : ", req.path);
    console.log("method : ", req.method );
    console.log("-------------------------------------");
    next();
});

app.use((req,res, next) => {
    console.log("In the next middleware: ");

    console.log("-------------------------------------");
    next();
}); 

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

