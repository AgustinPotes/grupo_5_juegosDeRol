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
    //processLogin: (req, res) => {
        //let userToLogin = usersController.findByField('email', req.body.eMail);
        //return res.send(userToLogin);
        // const errors = validationResult(req);
        // if (errors.isEmpty()) {
        //      let usersDataBase = fs.readFileSync('usersDataBase.json', { errors });
        //      let users;
        //      if (usersDataBase == "") {
        //          users = [];
        //      } else {
        //          users = JSON.parse(usersDataBase);
        //      }

        //      for (let i = 0; i < users.length; i++) {
        //          if (users[i].email == req.body.email) {
        //              if (bcrypt.compareSync(req.body.password, users[i].password)){
        //              let usuarioLogin = users[i];
        //              break;
        //              }
        //          }
        //      }
        //      if (usuarioLogin == undefined) {
        //          return res.render('login', {errors: [ {msg:"Inicio de sesion invalido"} ]});
        //      }
        //      req.session.usuarioLogeado = usuarioLogin;
        //     } else {
        //     return res.render('register', { errors: errors.errors } );
        // }
    //},
    register: (req, res) => {
        res.render('register', {users});
    },
    //funciones reutilizables
    fileName: './data/usersDataBase.json',
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    findAll: function () {
        return this.getData();
    },
    findByField: function (field,text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    newUser: (req, res) => {
        const errors = validationResult(req);

            let userInDBEmail = usersController.findByField("eMail", req.body.eMail);

            if (userInDBEmail){ 
                return res.render('register', {
                    errors: {
                        eMail: {
                            msg: 'El Email ya esta registrado'
                        }
                    },
                    oldData: req.body
                });
            }

           let userInDBUser = usersController.findByField("userAlias", req.body.userAlias);

           if (userInDBUser){ 
               return res.render('register', {
                   errors: {
                    userAlias: {
                           msg: 'El User Name ya esta registrado'
                       }
                   },
                   oldData: req.body
               });
           }


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
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(usersFilePath, JSON.stringify(finalUsers, null, ' '));
         res.redirect('/');
    },

   // processLogin: (req, res) => {
   //     
   // }
}

module.exports = usersController;