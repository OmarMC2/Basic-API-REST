const { query } = require('express');
const response = require('express');

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

const userPost = (req, res = response)=> {
    
    const body = req.body;

    res.json({
        msg: 'post API-Controller',
        body
    })
    console.log( 'post API-Controller', body )
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
