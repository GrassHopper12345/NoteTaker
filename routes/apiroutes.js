const router = require('express').Router();
const notes = require('../db/db.json');
// const {v4: uuid} = require('uuid');
const {createNewNotes, updateDb} = require('../db/notes');

router.get('/notes', (req, res) => {
    console.log(notes);
    res.json(notes)
});

router.post('/notes', (req, res) => {
    // req.body = uuid.v4();
    // const newNotes = createNewNotes(req.body, notes);
    createNewNotes(req.body, notes);
    res.redirect('/notes');
});

router.delete('/notes', (req, res) => {
    const params = req.params
    updateDb(params, notes);
    res.redirect('');
});

module.exports = router;