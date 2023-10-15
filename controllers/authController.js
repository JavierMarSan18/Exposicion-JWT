const { json } = require('body-parser');
const userService = require('../services/userService');
const authService = require('../services/authService');

const login = async (req, res) => {
    try{
        const user = req.body;
        const token = await authService.login(user);
        if (token) {
            res.status(201).json({
                statusCode: 201,
                token: token
            });
        }else{
            res.status(404).json({
                message: 'User not found'
            });
        }
    }catch(error){
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}

const signup = async (req, res) => {
    try{
        const user = req.body;
        await authService.signup(user);
        res.status(201).json({
            statusCode: 201,
            message: 'User created'
        });
    }catch(error){
        console.error(error);
        res.status(500).json({
            statusCode: 500,
            message: error.message
        });
    }
}

module.exports = {
    login,
    signup
}