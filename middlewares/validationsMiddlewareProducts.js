const { check } = require('express-validator');


const validationsMiddlewareProducts = [
    check('title').notEmpty().isLength(5).withMessage('Título es obligatorio y de al menos 5 carácteres'),
    check('shortDescription').notEmpty().isAlphanumeric().isLength(20).withMessage('Descripción es obligatorio y de al menos 20 carácteres'),
    check('price').notEmpty().isNumeric().withMessage("Solo números permitidos").isLength(2).withMessage('Precio es obligatorio y de al menos 2 cifras'),
    check('image').notEmpty().isIn([ "PNG", "JPEG", "GIF", "JPG"]).withMessage('Los formatos soportados son solo JPG, JPEG, PNG y GIF'),
];

module.exports = validationsMiddlewareProducts;