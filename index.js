var express = require("express");
var path = require("path");
const app = express();
const store = require("./db/store.js");
const fs = require("fs");

// process message as json
app.use(express.json());
// have specific url 
app.use(express.urlencoded({ extended: true }));
// will look in this folder for any static files
app.use(express.static("public"));



app.listen(3000, function () {
    console.log("success");
});

