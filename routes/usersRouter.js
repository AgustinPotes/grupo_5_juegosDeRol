const express = require('express');
const multer = require('multer')
const path = require('path')

// ************ Multer ************ 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const storageAvatar = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img/avatars')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})
const uploadAvatar = multer({storage: storageAvatar})

// ************ Express-Validator ************ 
const { body } = require('express-validator');
const validaciones = [
    body('name').notEmpty().withMessage('Nombre es un Campo obligatorio'),
    body('lastName').notEmpty().withMessage('Apellido es un Campo obligatorio'),
    body('userAlias').notEmpty().withMessage('Usuario es un Campo obligatorio'),
    body('eMail').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    body('password').notEmpty().withMessage('Contrasena es un Campo obligatorio'),
];

const router = express.Router();
const usersController = require('../controllers/usersController')

//************ Login ************ 
router.get('/login', usersController.login);
router.post('/login', usersController.loginProcess);
router.get('/profile', usersController.profile)
//************ Register ************ 
router.get('/register', usersController.register);
router.post('/register', uploadAvatar.any('avatar'), validaciones, usersController.processRegister);


module.exports = router;