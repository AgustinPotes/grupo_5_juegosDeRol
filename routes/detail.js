const express = require('express');


const router = express.Router();
const productController = require('../controllers/productController')


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productController.detail); 


module.exports = router;