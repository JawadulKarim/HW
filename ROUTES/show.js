const express = require('express');
const router = express.Router();
const data_show = require('../models/data');



router.get('/', async(req, res) => {
    try {
        const post = await data_show.find();
        res.json(post);
    } catch (err) {
        res.json(err)
    }
});



module.exports = router;