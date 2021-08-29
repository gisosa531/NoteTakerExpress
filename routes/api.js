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

    router.get("/notes", function(req, res){
        res.json(inputData);
    });

    router.post("/notes", function(req, res){

        // if (inputData.length !== 0){
            req.body.id = uuidv4(); 
        // } else{
        //     req.body.id = "0";
        // }
        
        console.log("req.body.id: " + req.body.id);

        inputData.push(req.body);
        updateDB(inputData);
        console.log(inputData);

        res.json(req.body);
    });

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