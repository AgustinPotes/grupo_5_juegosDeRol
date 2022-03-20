const { check } = require('express-validator');

validationsMiddlewareProducts = [
    //check('title').notEmpty().withMessage('Nombre del Producto es un Campo obligatorio').isLength({ min:5}).withMessage('Su Nombre debera tener al menos 5 caracteres'),
    //check('shortDescription').notEmpty().withMessage('Descripcion del Producto es un Campo obligatorio').isLength({ min:20}).withMessage('Debera tener al menos 20 caracteres'),
    //check('price').notEmpty().withMessage('Precio es un Campo obligatorio').isNumeric().withMessage('Su Precio debera ser numerico'),
    //check('category').notEmpty().withMessage('Debes elegir una Categoria'),
     // check('image').notEmpty().isIn([ "PNG", "JPEG", "GIF", "JPG"]).withMessage('Los formatos soportados son solo JPG, JPEG, PNG y GIF'),
];

module.exports = validationsMiddlewareProducts;