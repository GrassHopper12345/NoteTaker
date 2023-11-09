const router = require('express').Router();
const fs = require('fs');
// const {notes} = require('../db/db.json');
const {v4: uuid} = require('uuid');
const {createNewNotes, updateDb} = require('../db/notes');


router.get('/notes', (req, res) => {
    // fs.readFile('db.json', 'utf8', (err, data) =>{
    //     if(err) {
    //         console.error(err);
    //         return res.status(500).json({message: err.message});
    //     } else {
    //         const savedNotes = JSON.parse(data);
    //         console.log(savedNotes);
    //     }
    // })
    const data = fs.readFileSync('db.json', 'utf8');
    const savedNotes = JSON.parse(data);
    res.json(savedNotes);
});

// router.post('/notes', (req, res) => {
//     req.body.id = uuid.v4();
//     const newNotes = createNewNotes(req.body, notes);
//     // createNewNotes(req.body, notes);
//     res.redirect(newNotes);
// });

// router.delete('api/notes/:id', (req, res) => {
//     const params = req.params
//     updateDb(params, notes);
//     res.redirect('');
// });

module.exports = router;