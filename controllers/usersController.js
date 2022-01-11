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
       let userToCreate = {
           ...req.body,
           password: bcryptjs.hashSync(req.body.password, 10),
           img: req.file.filename
       }
       User.create(userToCreate);
    },
    login: (req, res) => {
        return res.render('login')
    },
    profile: (req, res) => {
        return res.render('userProfile')
    }
}

module.exports = usersController;