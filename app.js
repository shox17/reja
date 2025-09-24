console.log("Starting the server...");
const express = require('express');
const res = require('express/lib/response');
const app = express();
const fs = require("fs");

// MongoDB call
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
    if (err) {
        console.log("ERROR: ", err);
    } else {
        user = JSON.parse(data);
    }
});    

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

app.get("/author", function(req, res) {
    res.render("author", { user: user });
});
app.get("/", function(req, res) {
    res.render("reja");
});


module.exports = app;


