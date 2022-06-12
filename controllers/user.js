const { query } = require('express');
const response = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const userGet = async (req, res = response )=> {
    const {limit = 5, minimum= 0 }= req.query;
    const query = {state:true};
    const [total, users] = await Promise.all([
        User.find(query)
            .limit(Number(limit))
            .skip(Number(minimum)),
        User.countDocuments(query)
    ])

    res.json( {
        total,
        users
    } )
    console.log( 'get API-Controller' )
}

const userPut = async (req, res = response)=> {
    
    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;
    console.log(req.body)
    //Validate with DB

    if (password){
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password, salt );    
    }
     const user = await User.findByIdAndUpdate( id, rest, { new: true } )
    
    res.json({
        msg: 'put API-Controller',
        user 
    })
    console.log( 'put API-Controller', id )
}

const userPost = async (req, res = response)=> {

    const {name, email, password, role} = req.body;

    const user = new User( {name, email, password, role} );

    

    //Encript password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    //Save on DB

    await user.save();

    res.json(user)
    console.log( 'post API-Controller', user)
}

const userDelete = async (req, res)=> {
    const {id} = req.params;
    //Delete from Database
    //const user = await User.findByIdAndDelete(id);
    const user = await User.findByIdAndUpdate(id, {state:false})
    
    
    
    console.log(id)
    res.json({
        msg: 'Delete API-Controller',
        user,
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
