const express = require("express");
const http = require("http");

const app = express();

app.use((req,res,next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type","text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const server = http.createServer(app);

server.listen(2000,"localhost",() => {
    console.log("Server running at http://localhost:2000");
});