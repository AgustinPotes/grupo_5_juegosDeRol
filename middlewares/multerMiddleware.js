const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const storageAvatar = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/img/avatars')
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({storage: storage})
const uploadAvatar = multer({storage: storageAvatar})

module.exports = uploadAvatar;
module.exports = upload;