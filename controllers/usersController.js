const fs = require('fs');
const path = require('path');
const User = require('../models/User');
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
           avatar: req.files[0].filename
           
       }
       let userCreated = User.create(userToCreate);

       return res.redirect('/users/login')


    },
    login: (req, res) => {
        return res.render('login')
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('eMail', req.body.eMail);
       console.log(req.body);
        return res.render('login', {
            errors: {
                eMail: { 
                     msg: 'No estas registrado'
                }
            }
        })
    },

    profile: (req, res) => {
        return res.render('userProfile')
    },
    
}

module.exports = usersController;