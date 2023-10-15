const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcryptUtils = require('../utils/bcryptUtils');

const signup = async (user) => {
    try{
        if(user.email !== undefined && user.password !== undefined){
            const userExists = await userService.getUserByEmail(user.email);
            if(userExists){
                return;
            }
            const encryptedPassword = await bcryptUtils.encrypt(user.password);
            user.password = encryptedPassword;
            await userService.createUser(user);
        }
    }catch(error){
        throw error;
    }
}

const login = async (user) => {
    try{
        const userExists = await userService.getUserByEmail(user.email);
        if(userExists){
            let token = null;
            const passwordMatches = await bcryptUtils.compare(user.password, userExists.password);
            if(!passwordMatches){
                console.error("Password does not match");
                return null;
            }
            token = jwt.sign({ email: userExists.email }, process.env.SECRET_KEY, {
                expiresIn: 86400 //seconds // expires in 24 hours
            });
            console.log("Token: " + token);
            return token;
        }
        return null;
    }catch(error){
        throw error;
    }
}

module.exports = {
    signup,
    login
}