const bcryptjs = require("bcryptjs");
const { response } = require("express");
const generateJWT = require("../helpers/generateJWT");
const User = require("../models/user");


const login = async (req, res=response) =>{

    const {email, password} = req.body;

    try {

        //Verify if email exist

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                msg:'User or Password are incorrect'
            })
        }



        //Verify if User is active
        if(!user.state){
            return res.status(400).json({
                msg:'User are not valid'
            })
        }

        //Verify the password
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg:'Password incorrect'
            })
        }

        //Generate JWT

        const token = await generateJWT(user.id);


        res.json({
            msg:'login ok',
            user,
            token
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:'Something is wrong, please talk with admin'
        })
    }

};









module.exports = {
    login
};
