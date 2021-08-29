const path = require("path");
const router = require("express").Router();

// sets route for notes.html file when /notes displayed
router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// sets route for index.html when any other route is given due to wildcard feature
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router