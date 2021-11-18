
// Response

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    // set header Content-Type
    res.setHeader("Content-Type", "text/html");

    // send an html file
    fs.readFile("./views/index.html", (err, data) => {
        if(err)  {
            log(err.message);
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