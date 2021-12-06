const express = require('express');


const router = express.Router();
const productController = require('../controllers/productController')


router.get('/', productController.index);

/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productController.detail); 


module.exports = router;