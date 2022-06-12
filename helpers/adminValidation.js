const { response } = require("express")




const adminValidate = ( role, res = response ) =>{
if ( role !== 'ADMIN_ROLE'  ) {
    return res.status(401).json({
        msg: "Problems of credentials: The user that want delete registers isnt Admin "
    });
};

};




module.exports = {
    adminValidate
}

