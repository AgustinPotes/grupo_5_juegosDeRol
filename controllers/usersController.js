const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const usersController = {
    login: (req, res) => {
        res.render('login')
    },
    register: (req, res) => {
        res.render('register', {users})
    }
};

module.exports = usersController;