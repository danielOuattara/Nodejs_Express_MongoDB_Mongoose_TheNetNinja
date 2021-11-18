
const http = require("http");

const server = http.createServer((req, res) => {

    console.log("OK terminated")
})

server.listen(8080, "localhost", () => {
    console.log("Sever running on port 8080")
});