// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController')


router.get('/', mainController.index);
router.get('/:id', mainController.index);
//router.get('/:id', mainController.juegosDeMesa);


module.exports = router;