const router = require('express').Router();
const notes = require('../db/db.json');
const {v4: uuid} = require('uuid');
const {createNewNotes, updateDb} = require('../db/db.json');

router.get('/notes', (req, res) => {
    res.json(notes)
});

router.post('/notes', (req, res) => {
    req.body = uuid.v4();
    const newNotes = createNewNotes(req.body, notes);
    res.json(newNotes);
});

router.delete('/notes', (req, res) => {
    const params = req.params
    updateDb(params, notes);
});

module.exports = router;