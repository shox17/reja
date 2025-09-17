console.log("Staring the server...");
const express = require('express');
const res = require('express/lib/response');
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
app.post("/create-item", function(req, res) {
    console.log(req.body);
    res.json({ message: "Item created successfully" });
});

app.get("/", function(req, res) {
    res.render("purchase");
});

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, function() {
    console.log("Server is running successfully on PORT", PORT);
});

