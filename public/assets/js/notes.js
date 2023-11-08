const fs = require('fs');
const path = require('path');

function updateDbNotes(notesArray) {
    const deleteNotes = title;
    for (let i = 0; i < notesArray.length; i++) {
        if (deleteNotes === notesArray[i]) {
            notesArray = notesArray[i];
            fs.writeFileSync(path.join(__dirname, ".../db/db.json"),
                JSON.stringify({ notes: notesArray }, null, 2), err => {
                    if (err) {
                        throw err;
                    }

                });
        }
    }
}

// function createNewNotes(body, notesArray) {
//     const newNotes = body
//     notesArray.push(newNotes);
//     fs.writeFileSync(path.join(__dirname, ".../db/db.json"),
//         JSON.stringify({ notes: notesArray }, null, 2)
//     );
//     return newNotes;
// };

module.exports = updateDbNotes;