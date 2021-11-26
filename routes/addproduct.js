const express = require('express');


const router = express.Router();
const addproductController = require('../controllers/addproductController')


router.get('/', addproductController.addproduct);



module.exports = router;