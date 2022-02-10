const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require('../database/models/index');
const Product = require("../database/models/Product");

const mainController = {
        index: async (req, res) => {
            db.Product.findAll({
                order: [["title", "ASC"]],
            })
               .then(products => {
                    res.render('index', {products});
               })
               .catch(err => {
                res.send(err)
    
            })
        },
}

module.exports = mainController;