const Role = require('../models/role')
const User = require('../models/user')


const roleValidation = async (role ='') =>{
    const roleExist = await Role.findOne( {role} );
    
    if ( !roleExist ) {
        throw new Error( `The ${ role } role is not registered on DB` );
    }

}

const emailValidation = async (email = '') => {

    const emailExist = await User.findOne({ email });
    if( emailExist ){
       throw new Error (`The email: ${email} is already registered `);
    }

}

const userIdValidation = async (id = '') => {

    const idExist = await User.findById(id );
    if( !idExist ){
       throw new Error (`The email: ${id} not exist `);
    }

}




module.exports = {

    roleValidation,
    emailValidation,
    userIdValidation
}

