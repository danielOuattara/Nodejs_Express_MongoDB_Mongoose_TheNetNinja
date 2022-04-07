// request

const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Hello Nodejs Ninjas</h1>");
    res.end()
})

server.listen(8080, () => {
    console.log("Sever running on port 8080")
});