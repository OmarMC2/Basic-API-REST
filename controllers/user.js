const { query } = require('express');
const response = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const userGet = (req, res = response )=> {
    
    const queryParams = req.query;

    res.json({
        msg: 'get API-Controller',
        queryParams
    })
    console.log( 'get API-Controller', queryParams )
}

const userPut = (req, res = response)=> {
    
    const {id} = req.params;
    
    res.json({
        msg: 'put API-Controller',
        id
    })
    console.log( 'put API-Controller', id )
}

const userPost = async (req, res = response)=> {

    const {name, email, password, role} = req.body;

    const user = new User( {name, email, password, role} );

    //Verify if email exist in DB
    const emailExist = await User.findOne({ email });
    if( emailExist ){
        return res.status(400).json({
            msg: 'The email is already registered'
        }) 
    }

    //Encript password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    //Save on DB


    

    await user.save();

    res.json({
        msg: 'post API-Controller',
        user
    })
    console.log( 'post API-Controller', user)
}

const userDelete = (req, res)=> {
    res.json({
        msg: 'Delete API-Controller'
    })
}
const userPatch = (req, res = response)=> {
    res.json({
        msg: 'patch API-Controller'
    })
}


module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}
