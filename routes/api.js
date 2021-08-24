const path = require("path");

module.exports = app => {
    app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '/public/index.html'));
    });
}
