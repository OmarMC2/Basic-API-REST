const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { validateCamps } = require('../middlewares/validate-camps');




const router = Router();

router.post('/login', [
    check('email', 'Email is necesary').isEmail(),
    check('password', 'Password is necesary').not().isEmpty(),
    validateCamps
], login);



module.exports = router
