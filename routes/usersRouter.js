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
const upload = multer({storage: storage})

// ************ Express-Validator ************ 
const { body } = require('express-validator');
const validaciones = [
    body('name').notEmpty().withMessage('Nombre es un Campo obligatorio'),
    body('lastName').notEmpty().withMessage('Apellido es un Campo obligatorio'),
    body('eMail').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    body('password').notEmpty().withMessage('Contrasena es un Campo obligatorio'),
];

const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', upload.any(), validaciones, usersController.newUser);

module.exports = router;