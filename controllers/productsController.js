const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
	index: (req, res) => {
		res.send('product', {products});
	},
	detail: (req, res) => {
		res.render('detail');
	},
	cart: (req, res) => {
		res.render('cart');
	},
	addProduct: (req, res) => {
		res.render('addProduct');
	},
	editProduct: (req, res) => {
		res.render('editProduct');
	}
}

module.exports = productController;