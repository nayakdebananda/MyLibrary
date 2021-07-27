const express = require('express');
const router = express.Router(); // from express get the router function

router.get('/', (req, res) => {
    res.render('index.ejs');
});

module.exports = router;

//by exporting the rout we can use it in our Server.js file