const express = require('express');


const router = express.Router();
const editproductController = require('../controllers/editproductController')


router.get('/', editproductController.editproduct);



module.exports = router;