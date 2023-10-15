const userRepository = require('../repositories/userRepository');

const createUser = async (user) => {
    try{
        const userId = await userRepository.createUser(user);
        return userId;
    }catch(error){
        throw error;
    }
}

const getUserByEmail = async (email) => {
    try{
        const user = await userRepository.getUserByEmail(email);
        return user;
    }catch(error){
        throw error;
    }
}

module.exports = {
    createUser,
    getUserByEmail
}