const router = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');
const {createNewNotes, updateDb} = require('../db/notes');


router.get('/notes', (req, res) => {
    const data = fs.readFileSync('./db/db.json', 'utf-8');
    const savedNotes = JSON.parse(data);
    res.json(savedNotes);
});

router.post('/notes', (req, res) => {
  const newNoteId = uuid.v4();

  // Set the id property of the request body to the generated id
  req.body.id = newNoteId;

  // Read the contents of the db.json file
  fs.readFile('./db/db.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data into an array of saved notes
    const savedNotes = JSON.parse(data);

    // Add the new note to the array of saved notes
    savedNotes.push(req.body);

    // Write the updated array of saved notes back to the db.json file
    fs.writeFile('./db/db.json', JSON.stringify(savedNotes), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Return the updated array of saved notes as a JSON response
      res.json(savedNotes);
    });
  });
});

router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
  
    // Read the contents of the db.json file
    fs.readFile('./db/db.json', 'utf-8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      // Parse the JSON data into an array of saved notes
      let savedNotes = JSON.parse(data);
  
      // Find the index of the note with the matching id
      const noteIndex = savedNotes.findIndex(note => note.id === noteId);
  
      // If the note is found, remove it from the array
      if (noteIndex !== -1) {
        savedNotes.splice(noteIndex, 1);
  
        // Write the updated array of saved notes back to the db.json file
        fs.writeFile('./db/db.json', JSON.stringify(savedNotes), (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
  
          // Return a success message as a JSON response
          res.json({ message: 'Note deleted successfully' });
        });
      } else {
        // If the note is not found, return a 404 Not Found response
        res.status(404).json({ error: 'Note not found' });
      }
    });
  });

module.exports = router;