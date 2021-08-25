const fs = require("fs");
const inputData = require("../db/db.json");

module.exports = app => {

    function updateDB(info){
        info = JSON.stringify(info);
        console.log (info);
        fs.writeFile("../db/db.json", info, function(err){
            if (err) throw err;
        });
    }

    app.get("/api/notes", function(req, res){
        res.json(inputData);
    });

    app.post("/api/notes", function(req, res){

        if (inputData.length !== 0){
            req.body.id = JSON.stringify(JSON.parse(inputData[inputData.length - 1].id) + 1);
        } else{
            req.body.id = "0";
        }
        
        console.log("req.body.id: " + req.body.id);

        inputData.push(req.body);
        updateDB(inputData);
        console.log(inputData);

        res.json(req.body);
    });


        updateDB(inputData);
};
