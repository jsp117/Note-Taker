var express = require("express");
var path = require("path");
const app = express();
const store = require("./db/store.js");
const unique = require("uniqid");
const fs = require("fs");
var PORT = process.env.PORT || 3000;

// process message as json
app.use(express.json());
// have specific url 
app.use(express.urlencoded({ extended: true }));
// will look in this folder for any static files
app.use(express.static("public"));

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

// save notes
app.post("/api/notes", function(req, res) {
    var body = req.body;
    body.id = unique();
    store.createNote(body);
    // console.log("store.db: ", store.db);
    fs.writeFileSync("./db/db.json", JSON.stringify(store.db));
    res.send(true);
});

// delete notes by id
app.delete("/notes", function(req, res){
    var id = req.body.id;
    store.deleteNote(id);
    res.send(true);
});

app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
});

