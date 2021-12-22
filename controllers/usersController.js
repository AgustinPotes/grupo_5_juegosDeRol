const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const { validationResult } = require('express-validator'); 
const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');

const usersController = {
    login: (req, res) => {
        res.render('login');
    },
    processLogin: (req, res) => {
    //     const errors = validationResult(req);
    //     if (errors.isEmpty()) {
    //         let usersDataBase = fs.readFileSync('usersDataBase.json', { errors });
    //         let users;
    //         if (usersDataBase == "") {
    //             users = [];
    //         } else {
    //             users = JSON.parse(usersDataBase);
    //         }

    //         for (let i = 0; i < users.length; i++) {
    //             if (users[i].email == req.body.email) {
    //                 if (bcrypt.compareSync(req.body.password, users[i].password)){
    //                 let usuarioLogin = users[i];
    //                 break;
    //                 }
    //             }
    //         }
    //         if (usuarioLogin == undefined) {
    //             return res.render('login', {errors: [ {nsg:"Inicio de sesion invalido"} ]});
    //         }
    //         req.session.usuarioLogeado = usuarioLogin;
    //        } else {
    //        return res.render('register', { errors: errors.errors } );
    //    }
    },
    register: (req, res) => {
        res.render('register', {users});
    },
    newUser: (req, res) => {
        const errors = validationResult(req);

        // Codigo para no repetir datos ya registrados, no funciona por el findbyfield 

        // let userInDB = users.findByField('eMail', req.body.eMail);
        // if (userInDB) { 
        //     return res.render('register', {
        //         errors: {
        //             email: {
        //                 msg: 'El Email ya esta registrado'
        //             }
        //         },
        //         oldData: req.body
        //     });
        // }

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