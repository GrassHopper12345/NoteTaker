const fs = require('fs');
const path = require('path');


function updateDb(title, notesArray) {
    for (let i = 0; i < notesArray.length; i++) {
        if (title === notesArray[i].title) {
            notesArray.splice(i, 1);
            fs.writeFileSync(path.join(__dirname, "./db/db.json"),
            JSON.stringify({notes: notesArray}, null, 2), err => {
                if (err) {
                 throw err;
            }
        }
        )};
        break;
    }
}


function createNewNotes(newNote, notesArray) {
    notesArray.push(newNote);
    fs.writeFileSync(path.join(__dirname, "./db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2));
}

module.exports = { createNewNotes, updateDb };