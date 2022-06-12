const { response } = require("express");





const validateAdminRole = (req, res = response, next)=>{

    if(!req.user){
        res.status(500).json({
            msg: "user must be validated before than validate his role"
        });
    }
    
    const {role, name} = req.user;

    if(role !== "ADMIN_ROLE"){
        return res.status(401).json({
            msg: "Problems of credentials: The user that want delete registers isnt Admin "
        })
    }



    next();
};

const hasRole = ( ...roles ) =>{

    return (req, res= response, next) =>{
        const {role}= req.user

        if(role !== "ADMIN_ROLE"){
            return res.status(401).json({
                msg: "Problems of credentials: The user that want delete registers isnt Admin "
            });

        };

        if(!roles.incluedes(role)){

            return res.status(401).json({
                msg: `Th user must be have one of this roles: ${roles}`
            })
        }

        next();
    }
    
}

module.exports = {
    validateAdminRole,
    hasRole
};