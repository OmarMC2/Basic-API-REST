const response = require('express');

const userGet = (req, res = response )=> {
    res.json({
        msg: 'get API-Controller'
    })
}

const userPut = (req, res = response)=> {
    res.json({
        msg: 'put API-Controller'
    })
}

const userPost = (req, res = response)=> {
    res.json({
        msg: 'post API-Controller'
    })
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
