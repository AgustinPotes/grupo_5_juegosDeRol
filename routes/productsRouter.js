const express = require('express');
const multer = require('multer')
const path = require('path')
// ************ Multer ************ 
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/img')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

const router = express.Router();
const productController = require('../controllers/productsController')


router.get('/', productController.index);
router.get('/cart', productController.cart);
router.get('/addProduct', productController.addProduct);
router.get('/editProduct/:id', productController.editProduct); 
router.patch('/editProduct/:id', upload.any(),productController.update); 
router.get('/detail/:id', productController.detail);


module.exports = router;