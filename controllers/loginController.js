const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/usersDataBase.json');
const users = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const loginController = {
    login: (req, res) => {
        res.render('login', {users})
    },
};

module.exports = loginController;