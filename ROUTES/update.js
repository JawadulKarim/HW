const express = require('express');
const router = express.Router();
const data_select = require('../models/data');

router.get('/', (req, res) => {
    res.send("Update");
});

router.get('/:postId', async(req, res) => {

    try {
        const show = await data_select.findById(req.params.postId);
        res.json(show);
    } catch (err) {
        res.json(err)
    }
});






module.exports = router;