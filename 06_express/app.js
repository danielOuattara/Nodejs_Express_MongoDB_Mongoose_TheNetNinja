

// Basic express server 
//----------------------

// const express = require("express");

// // express app
// const app = express();


// // listen 
// app.listen(3030);

// app.get("/", (req, res) => {
//     res.send("<h1> Home page</h1>")
// });



// routing & html
//-----------------------------------------------

// const express = require("express");

// // express app
// app= express();


// // listen 
// app.listen(3030);

// app.get("/", (req, res) => {
//     res.sendFile("./views/index.html", {root: __dirname});
// });
// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", { root: __dirname });
// });




// // redirect
// //-----------------------------------------------

// const express = require("express");

// // express app
// app= express();


// // listen 
// app.listen(3030);

// app.get("/", (req, res) => {
//     res.sendFile("./views/index.html", {root: __dirname});
// });

// app.get("/about", (req, res) => {
//     res.sendFile("./views/about.html", { root: __dirname });
// });

// app.get("/about-us", (req, res) => {
//     res.redirect("./about");
// });



// 404
//-----------------------------------------------

const express = require("express");

// express app
const app = express();

// listen 
app.listen(3030);

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname });
});

app.get("/about-us", (req, res) => {
    res.redirect("./about");
});

// 404
app.use((req, res) => {
    res.status(404).sendFile("./views/404.html", { root: __dirname });
});



