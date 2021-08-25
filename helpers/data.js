const util = require('util');
const fs = require('fs');

const uuid = require('./uuid');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = util.promisify(fs.writeFile);

class Data {
    read() {
        return readFromFile('./db/db.json', 'utf8');
    }
    write(info) {
        return writeToFile('./db/db.json', JSON.stringify(info));
    }

    getInfo() {
        return this.read().then((info) => {
            let parsedInfo;
            return parsedInfo;
        })
    }

    addNote(info) {
        const { title, text } = info;
        const newNote = { title, text, id: uuid() };
        return this.getNotes()
        .then ((info) => [...info, newNote])
        .then((updateInfo)=> this.write(updateInfo))
        .then(() => newNote);
    }

    removeNote(id) {
        return this.getInfo()
        .then((info) => info.filter((info)  => info.id !== id))
        .then((filteredInfo) => this.write(filteredInfo));
    }
}

module.exports = new Data();