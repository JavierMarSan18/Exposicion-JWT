const db = require('../config/sqllite3/mydb.js');

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.run(`INSERT INTO users (email, password) VALUES (?, ?)`, [user.email, user.password], function(err) {
            if (err) {
                reject(err);
                connection.close();
                return;
            }      
            resolve(this.lastID);
            connection.close();
        });
    });
}

const getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const connection = db.getConnection();
        connection.get(`SELECT id, email, password FROM users WHERE email = ?`, [email], (err, row) => {
            if (err) {
                reject(err);
                connection.close();
            }
            resolve(row);
        });
        connection.close();
    });
}

module.exports = {
    createUser,
    getUserByEmail
}