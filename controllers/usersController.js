const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');

const usersController = {
    register: (req, res) => {
        return res.render('register')
    },
    processRegister : (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.lenght > 0){
            return res.render ('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = User.findByField('eMail', req.body.eMail);

       if (userInDB) {
        return res.render ('register', {
            errors: {
                eMail: {
                    msg: 'Este email está en uso'
                }
            },
            oldData: req.body
        });
       }
       let userToCreate = {
           ...req.body,
           password: bcryptjs.hashSync(req.body.password, 10),
           //avatar: req.file.filename
       }
       let userCreated = User.create(userToCreate);

       return res.redirect('/users/login')


    },
    login: (req, res) => {
        return res.render('login')
    },
    loginProcess: (req, res) => {
        return res.send(req.body)
    },

    profile: (req, res) => {
        return res.render('userProfile')
    },
    
}

module.exports = usersController;