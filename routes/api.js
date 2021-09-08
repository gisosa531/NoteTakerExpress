const fs = require("fs");
let inputData = require("../db/db.json");
const router = require("express").Router();
const { v4: uuidv4 } = require('uuid');

function updateDB(info){
    info = JSON.stringify(info);
    console.log (info);
    fs.writeFile("./db/db.json", info, function(err){
        if (err) throw err;
    });
}

//gets /notes route 
router.get("/notes", function(req, res){
    res.json(inputData);
});

//posts notes to /notes route
router.post("/notes", function(req, res){

    req.body.id = uuidv4(); 
  
    console.log("req.body.id: " + req.body.id);

    inputData.push(req.body);
    updateDB(inputData);
    console.log(inputData);

    res.json(req.body);
});

// deletes /notes with an id that equals to req.params.id
router.delete("/notes/:id", function(req, res){
    var id = req.params.id 
    var newNotes = [];
    for (i = 0; i < inputData.length; i++){
        var note = inputData[i];
        if(note.id !== id){
        newNotes.push(note);
        }
    }
    updateDB(newNotes);
    inputData = newNotes;
    res.json(newNotes);
});

    module.exports = router;