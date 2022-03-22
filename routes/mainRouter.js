// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path')


// ************ Controller Require ************
const mainController = require('../controllers/mainController')


router.get('/', mainController.index);
router.get('/its-showtime', mainController.showtime)


module.exports = router;