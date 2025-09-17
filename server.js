console.log("Staring the server...");
const express = require('express');
const app = express();
const http = require("http");

// 1: Entering code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session code
// 3: Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.get("/hello", (req, res) => {
    res.end("<h1>Hello from the server</h1>");
});

app.get("/gift", (req, res) => {
    res.end("<h1>You are in Gift section</h1>");
});

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, function() {
    console.log("Server is running successfully on PORT", PORT);
});

