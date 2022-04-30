const fs = require("fs");

class Reader{
    static readJsonFile(students){
        const visual = fs.readFileSync(students);
        return JSON.parse(visual);
    }
}

module.exports = Reader;
