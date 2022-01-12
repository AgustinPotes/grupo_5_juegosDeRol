const path = require('path')
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Nombre es un Campo obligatorio'),
    body('lastName').notEmpty().withMessage('Apellido es un Campo obligatorio'),
    body('userAlias').notEmpty().withMessage('Usuario es un Campo obligatorio'),
    body('eMail').notEmpty().withMessage('Email es un Campo obligatorio').bail()
    .isEmail().withMessage("Debes escribir un formato de correo electronico valido"),
    body('password').notEmpty().withMessage('Contrasena es un Campo obligatorio'),
    body('avatar').custom((value, { req }) => {
        let file = req.file
        let acceptExtensions = ['.jpg', '.png', '.gif']

        if (!file) {
            throw new Error('Tienes que subir una imagen')
        } else {
            let fileExtensions = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) { 
                throw new Error('Extensiones de archivo permitidas son ${acceptedExtensions.join{', ')}')
            }
        }

        return true
    })
];

