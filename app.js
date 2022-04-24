const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');

const postroute = require('./ROUTES/post');
const deleteroute = require('./ROUTES/delete');
const updateroute = require('./ROUTES/update');
const showroute = require('./ROUTES/show');

//different routes
app.use(bodyParser.json());
app.use('/post', postroute);
app.use('/delete', deleteroute);
app.use('/update', updateroute);
app.use('/show', showroute);

//middle wares

//routes
app.get('/', (req, res) => {
    res.send("Welcome");
});




//database
mongoose.connect(process.env.DB_URL, () =>
    console.log('Connected to DB')
);


app.listen(3000);