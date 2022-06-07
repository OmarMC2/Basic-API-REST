const Role = require('../models/role')



const roleValidation = async (role ='') =>{
    const roleExist = await Role.findOne( {role} );
    
    if ( !roleExist ) {
        throw new Error( `The ${ role } role is not registered on DB` );
    }

}



module.exports = {

    roleValidation

}

