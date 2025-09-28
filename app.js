console.log("Starting the server...");
const express = require('express');
const app = express();
const fs = require("fs");

// MongoDB call
const client = require("./server");
const db = client.db(); // DB object
const mongodb = require("mongodb");

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
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne({ _id: new mongodb.ObjectId(id) }, (err, result) => {
        res.json({ state: "plan deleted" });
    });
});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id) },
        { $set: { reja: data.new_Input } },
        function(err, data) {
            res.json({ state: "plan edited" });
        }
    );
});

app.post("/delete-all", (req, res) => {
    if(req.body.delete_all) {
        db.collection("plans").deleteMany({}, (err, result) => {
            res.json({ state: "all plans deleted" });
        });
    }
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


