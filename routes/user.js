const { Router } = require('express');
const { check } = require('express-validator');
const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user');
const { roleValidation } = require('../helpers/dbValidators');
const { validateCamps } = require('../middlewares/validate-camps');

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', [
   check( 'name', 'Name is necesary').not().isEmpty(),
   check( 'password', 'Passowrd is necesary and must be have more than 6 characters').isLength({ min: 6 }),
   check( 'email', 'Email is not valid').isEmail(),
   //check( 'role', 'Is not a valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
   check( 'role' ).custom( roleValidation ),
   validateCamps
   
], userPost);

router.patch('/', userPatch);

router.delete('/', userDelete);











module.exports = router