const { response } = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const validateJWT = async (req, res=response, next) =>{

    const token = req.header('x-token');
    //Verify that petition have a token
    if (!token){
        return res.status(401).json({
            msg: 'The petition dont have Token '
        })
    };
    try {
        //Verify if token is valid and extract the uid
        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        //Search the data of user from the DB with de uid
        const user = await User.findById(uid);
        //Instance or save the data on the request
        req.uid = uid;
        req.user = user;
        
        //Verify that user data exist
        if(!user){
            return res.status(401).json({
                msg:'Cant be found the user that send the petition'
            });
        };
        
        
        //Verify that Users state is true
        if(!user.state){
            return res.status(401).json({
                msg:'Unactive user cant delete another user'
            });
        };



        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            msg: 'Token is not valid'
        });
    };



};



module.exports = {
    validateJWT
};
