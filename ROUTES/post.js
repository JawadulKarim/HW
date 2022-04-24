const express = require('express');
const router = express.Router();
const datap = require('../models/data');

router.get('/', (req, res) => {
    res.send("Welcome");
});

router.post('/', async(req, res) => {
    const post = new datap({
        Restaurent_Name: req.body.Restaurent_Name,
        Location: req.body.Location,
        Rating: req.body.Rating
    });
    try {
        const savedpost = await post.save()
        res.json(savedpost);
    } catch (err) {
        res.json({ err });
    }
});


module.exports = router;