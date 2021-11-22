
// // About  routing

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//     // set header Content-Type
//     res.setHeader("Content-Type", "text/html");

//     let path = "./public/";
//     switch (req.url) {
//         case "/": 
//             path += "index.html";
//             break;
//         case "/about": 
//             path += "about.html";
//             break;
//         default: 
//             path += "404.html";
//             break;
//     }

//     // send an html file
//     fs.readFile(path, (err, data) => {
//         if(err)  {
//             console.log(err.message);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }    
//     })
// })

// server.listen(8080, () => {
//     console.log("Sever running on port 8080")
// });


// StatusCode

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    let path = "./public/";
    switch (req.url) {
        case "/": 
            path += "index.html";
            res.statusCode = 200;
            break;
        case "/about": 
            path += "about.html";
            res.statusCode = 200;
            break;
        case "/about-me": 
            res.statusCode = 301;
            res.setHeader("Location", "about");
            res.end();
            break;
        default: 
            path += "404.html";
            res.statusCode = 404;
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if(err)  {
            console.log(err.message);
            res.end();
        } else {
            res.write(data);
            res.end();
        }    
    })
})

server.listen(8080, () => {
    console.log("Sever running on port 8080")
});