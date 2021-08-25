const path = require("path");

module.exports = app => {
    // sets route for notes.html file when /notes displayed
    app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    );

    // sets route for index.html when any other route is given due to wildcard feature
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}
