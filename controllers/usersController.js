const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs');

const usersController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register', {users});
    },
    newUser: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {

         let newUser = {
             "id": users.length + 1,
             "name": req.body.name,
             "lastName": req.body.lastName,
             "userAlias": req.body.userAlias,
             "eMail": req.body.eMail,
             "password": bcryptjs.hashSync(req.body.password, 10),
             "type": "regular",
             //"img": req.files[0].filename
         };

         users.push(newUser);
         fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
         res.redirect('/');
        } else {
        return res.render('register', { errors: errors.mapped(), oldData: req.body } );
    }
    },
}

module.exports = usersController;