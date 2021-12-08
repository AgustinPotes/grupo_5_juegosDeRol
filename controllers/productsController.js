const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productController = {
	index: (req, res) => {
		res.send('product', {products});
	},
	
	detail: (req, res) => {
        let productDetail = req.params.id;
		let product = products.find(product => product.id == productDetail)
        res.render('detail', {product,toThousand});
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

	