var express = require("express");
var path = require("path");
const app = express();
const store = require("./db/store.js");
const fs = require("fs");
var PORT = process.env.PORT || 3000;
// process message as json
app.use(express.json());
// have specific url 
app.use(express.urlencoded({ extended: true }));
// will look in this folder for any static files
app.use(express.static("public"));

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.post("/notes", function(req, res) {
    var body = req.body;
    store.createNote(body);
    res.send(true);
});

app.listen(PORT, function () {
    console.log("Listening at port: ", PORT);
});

