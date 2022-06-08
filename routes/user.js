const { Router } = require('express');
const { check } = require('express-validator');
const { userGet, userPut, userPost, userDelete, userPatch } = require('../controllers/user');
const { roleValidation, emailValidation, userIdValidation } = require('../helpers/dbValidators');
const { validateCamps } = require('../middlewares/validate-camps');

const router = Router();

router.get('/', userGet);

router.put('/:id', [
   check('id', 'The id is not valid').isMongoId(),
   check('id').custom( userIdValidation ),
   check( 'role' ).custom( roleValidation ),
   validateCamps
], userPut);

router.post('/', [
   check( 'name', 'Name is necesary').not().isEmpty(),
   check( 'password', 'Passowrd is necesary and must be have more than 6 characters').isLength({ min: 6 }),
   check( 'email', 'Email is not valid').isEmail(),
   check( 'email' ).custom( emailValidation ),
   //check( 'role', 'Is not a valid role').isIn(['ADMIN_ROLE', 'USER_ROLE']),
   check( 'role' ).custom( roleValidation ),
   validateCamps
   
], userPost);

router.patch('/', userPatch);

router.delete('/:id', [
   check('id', 'The id is not valid').isMongoId(),
   check('id').custom( userIdValidation ),
   validateCamps   
], userDelete);











module.exports = router