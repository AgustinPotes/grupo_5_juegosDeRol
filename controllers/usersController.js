const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const db = require('../database/models')

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

       return res.redirect('/users/login?registerSuccessful=true')


    },
    login: (req, res) => {
        console.log(req.query)
        return res.render('login', {registerSuccessful: req.query.registerSuccessful})
    },
    loginProcess: (req, res) => {
        let userToLogin = User.findByField('eMail', req.body.eMail);
       if(userToLogin) {
           let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
           if (isOkThePassword){
               delete userToLogin.password;
               req.session.userLogged = userToLogin;
               
               if(req.body.remember_user){
                   res.cookie('userEmail', req.body.eMail, { maxAge: (1000 * 60) * 2 })
               }
               return res.redirect('/users/profile')
            }
            return res.render('login', {
                errors: {
                    password: { 
                         msg: 'Password invalida'
                    }
                }
            });
       }
        return res.render('login', {
            errors: {
                eMail: { 
                     msg: 'No estas registrado'
                }
            }
        });
    },

    profile: (req, res) => {
        return res.render('userProfile', {
            user: req.session.userLogged
        })
    },

    profileToEdit: (req, res) => {
        return res.render('userProfileToEdit', {
            user: req.session.userLogged
        })
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy()
        return res.redirect('/')
    }
    
}

module.exports = usersController;