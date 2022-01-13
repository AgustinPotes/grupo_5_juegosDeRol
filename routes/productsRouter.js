const express = require('express');
const path = require('path')
const upload = require('../middlewares/multerMiddleware')
const router = express.Router();
const productController = require('../controllers/productsController')


router.get('/', productController.index);
router.get('/cart', productController.cart);
router.get('/addProduct', productController.addProduct);
router.post('/addProduct', upload.any(), productController.newProduct);
router.get('/editProduct/:id', productController.editProduct); 
router.put('/editProduct/:id', upload.any(), productController.update); 
router.get('/detail/:id', productController.detail);
router.delete('/editProduct/:id', productController.delete);


module.exports = router;