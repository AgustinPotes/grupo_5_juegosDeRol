const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productController = {
	index: (req, res) => {
		res.send('product', {products});
	},
	
	detail: (req, res) => {
		let id = req.params.id
		let productDetail = products.find(product => product.id == id)
		res.render('detail', {
			productDetail,
			toThousand
		})
	},

	cart: (req, res) => {
		res.render('cart');
	},
	addProduct: (req, res) => {
		res.render('addProduct');
	},
	editProduct: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('editProduct', {productToEdit})
	},
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id)
		let image

		if(req.files[0] != undefined){
			image = req.files[0].filename
		} else {
			image = productToEdit.image
		}

		productToEdit = {
			'id': productToEdit.id,
			...req.body,
			image: image,
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},
};

module.exports = productController;

	