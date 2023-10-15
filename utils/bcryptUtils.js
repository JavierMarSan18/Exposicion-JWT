const bcrypt = require('bcrypt');
const e = require('express');
const saltRounds = 10;

const encrypt = (content) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(saltRounds, (_err, salt) => {
            bcrypt.hash(content, salt, (_err, hash) => {
                resolve(hash);
            })
        });
    });
} 

const compare = (content, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(content, hash, (err, result) => {
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

module.exports = {
    encrypt,
    compare
}