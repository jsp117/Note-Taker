class Store{
    constructor(){
        this.db = [];
    }
    createNote(note){
        this.db.push(note);
        console.log(this.db);
    }
    deleteNote(id){
       this.db = this.db.filter(function(note){
            return note.id !== id;
        });
        console.log(this.db);
    }
}

var store = new Store();
module.exports = store;