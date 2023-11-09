const fs = require('fs');
const path = require('path');

function updateDb(id, notesArray) {
    const notesDeleted = id;
    for (let i = 0; i < notesArray.length; i++) {
        if (notesDeleted === notesArray[i].id) {
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

function createNewNotes(body, notesArray) {
    const newNotesCreated = body;
    notesArray.push(newNotesCreated);
    fs.writeFileSync(path.join(__dirname, "./db/db.json"),
        JSON.stringify({notes: notesArray}, null, 2));
return newNotesCreated;
};

module.exports = { createNewNotes, updateDb };