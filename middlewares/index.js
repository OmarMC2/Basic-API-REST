const  validateCamps  = require('../middlewares/validate-camps');
const  validateJWT  = require('../middlewares/validate-jwt');
const  validateAdminRole  = require('../middlewares/validate-roles');




module.exports = {
    ... validateAdminRole,
    ... validateCamps,
    ... validateJWT
}
