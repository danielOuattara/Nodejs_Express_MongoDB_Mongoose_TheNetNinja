
// // Response

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {

//     // set header Content-Type
//     res.setHeader("Content-Type", "text/html");

//     // send an html file
//     fs.readFile("./public/index.html", (err, data) => {
//         if(err)  {
//             log(err.message);
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



// Response

// const http = require("http");
// const fs = require("fs");

// fs.readFile(__dirname+'/public/index.html', function(err, data) {
//     if (err) throw err;
//     htmlFile = data;
// });

// fs.readFile(__dirname+ '/public/style.css', function(err, data) {
//     if (err) throw err;
//     cssFile = data;
// });

// const server = http.createServer((req, res) => {
//     switch( req.url) {
//         case '/style.css':
//             res.writeHeader(200, {'Content-Type':'text/css'});
//             res.write(cssFile)
//             break;
//         default:
//             res.writeHeader(200, {'Content-Type':'text/html'});
//             res.write(htmlFile)
//     }
//     res.end();
// });

// server.listen(8080, () => {
//     console.log("Sever running on port 8080")
// });

// Response

const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res ) => {
    fs.readFile( __dirname + '/public' + req.url, (err, data) => {
        if(!err) {
            const dotOffset = req.url.lastIndexOf('.');
            const typeList = {
               '.html' : 'text/html',
               '.ico' : 'image/x-icon',
               '.jpg' : 'image/jpeg',
               '.png' : 'image/png',
               '.gif' : 'image/gif',
               '.css' : 'text/css',
               '.js' : 'text/javascript'
            };
             const mimeType = dotOffset === -1 ? 
                'text/plain' : typeList[req.url.substring(dotOffset)];
            res.setHeader('Content-Type', mimeType);
            res.end(data);
        } else {
            console.log ('file not found: ' + req.url);
            res.writeHead(404, "Not Found");
            res.end();
        }
    });
});


server.listen(8080, () => {
    console.log("Sever running on port 8080")
});