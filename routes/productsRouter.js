const express = require('express');

const router = express.Router();
const productController = require('../controllers/productsController')


router.get('/', productController.index);
router.get('/cart', productController.cart);
router.get('/addProduct', productController.addProduct);
router.get('/editProduct', productController.editProduct);
router.get('/detail/:id', productController.detail);


module.exports = router;