const sqlite3 = require('sqlite3').verbose();

const getConnection = () => {
    return new sqlite3.Database('./mydb.db', (err) => {
        if (err) {
            console.error("Error opening database " + err.message);
        }else{
            console.log("Connected to the SQLite database");
        }
    });
}

module.exports = {
    getConnection
};