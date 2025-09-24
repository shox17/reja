console.log("Starting the server...");
const e = require('express');
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
app.post("/create-item", function (req, res) {
    console.log("user entered /create-item route");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        if (err) {
            console.log(err);
            res.end("Error occurred while saving the plan.");
        } else {
            res.end("Successfully saved the plan.");
        }
    });
});

app.get("/author", function (req, res) {
    res.render("author", { user: user });
});
app.get("/", function (req, res) {
    console.log("user entered / route");
    db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.render("reja", { items: data });
            }
        });
});


module.exports = app;


