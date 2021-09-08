//package for file system and support
const util = require('util');
const fs = require('fs');

//package for unique id generating function
const uuid = require('./helpers/uuid.js');

//promises for file operations
const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

//Creates class to manipulate data
class Data {
    //sets notes variable
    read() {
        return readFromFile('./db/db.json', 'utf8');
    }
    //allows for writing notes with info
    write(info) {
        return writeToFile('./db/db.json', JSON.stringify(info));
    }
    
    getInfo() {
        return this.read().then(() => {
            let parsedInfo;
            return parsedInfo;
        })
    }
    //adds notes with id
    addNote(info) {
        const { title, text } = info;
        const newNote = { title, text, id: uuid() };
        return this.getInfo()
        .then ((info) => [...info, newNote])
        .then((updateInfo)=> this.write(updateInfo))
        .then(() => newNote);
    }
    //deletes notes with specific id
    removeNote(id) {
        return this.getInfo()
        .then((info) => info.filter((info)  => info.id !== id))
        .then((filteredInfo) => this.write(filteredInfo));
    }
}

module.exports = new Data();