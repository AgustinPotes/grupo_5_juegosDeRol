/*const { body } = require('express-validator');*/
const { check } = require('express-validator');


const validationsMiddlewareUser = [
    check('name').notEmpty().isAlpha().withMessage("Solo letras permitidas").isLength(2).withMessage('Nombre es obligatorio y de al menos 2 carácteres'),
    check('lastName').notEmpty().isAlpha().withMessage("Solo letras permitidas").isLength(2).withMessage('Apellido es obligatorio y de al menos 2 carácteres'),
    check('userAlias').notEmpty().isAlpha().withMessage("Solo letras permitidas").isLength(2).withMessage('Usuario es obligatorio y de al menos 2 carácteres'),
    check('eMail').notEmpty().isEmail().withMessage('Email es un campo obligatorio').isEmail().withMessage("Formato de correo electronico inválido").normalizeEmail(),
    check('password').notEmpty().withMessage("Contraseña es un campo obligatorio").isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1
    }).withMessage('Debe contener al menos 1 letra minúscula, 1 mayúscula, 1 número y 1 carácter especial')
];

module.exports = validationsMiddlewareUser;
