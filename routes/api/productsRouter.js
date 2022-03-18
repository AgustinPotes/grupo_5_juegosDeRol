const express = require('express');
const router = express.Router();

const apiProductsController = require('../../controllers/api/productsController');

router.get('/products', apiProductsController.index)
router.get('/products/:id', apiProductsController.detail)
router.get('/categories', apiProductsController.category)
router.get('/status', apiProductsController.status)
module.exports = router;