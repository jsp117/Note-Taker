const fs = require("fs");


class Store {
    constructor() {
        this.db = [];
    }

    createNote(note) {
        this.db.push(note);
        // console.log("Create note: ", this.db);
        fs.writeFileSync("./db/db.json", JSON.stringify(this.db));
    }
    deleteNote(id) {
        // creates array without note matching the id
        this.db = this.db.filter(function (note) {
            // console.log("new test: ", this.db);
            return note.id !== id;
        });

        // console.log("after deletion: ", this.db);
    }
}

var store = new Store();
module.exports = store;