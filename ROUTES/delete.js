const express = require('express');
const router = express.Router();
const delete_val = require('../models/data');

router.delete('/', async(req, res) => {
    res.send("Welcgrgrgome");
});

router.delete('/:postId', async(req, res) => {
    try {
        const val = await delete_val.remove({ _id: req.params.postId });
        res.json(removedPost);

    } catch (err) {
        res.json({ err });
    }
});

module.exports = router;