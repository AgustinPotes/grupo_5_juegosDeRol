const express = require('express');
const multer = require('multer')
const path = require('path')
// ************ Multer ************ 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})

const router = express.Router();
const usersController = require('../controllers/usersController')


router.get('/login', usersController.login);
router.get('/register', usersController.register);
router.post('/register', upload.any(), usersController.newUser);

module.exports = router;