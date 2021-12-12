const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const productController = {
	index: (req, res) => {
		res.render('product', {products});
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
		res.render('addproduct');
	},
	newProduct: (req, res) => {
			let newProduct = {
				id: products.length + 1,
				title: req.body.title,
				publisher: req.body.publisher,
				shortDescription: req.body.shortDescription,
				category: req.body.category,
				price: req.body.price
				//img: req.body.img
			};

			products.push(newProduct);
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
			res.redirect('/');
	},
	editProduct: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('editproduct', {productToEdit})
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
			id: products.length + 1,
			title: req.body.title,
			publisher: req.body.publisher,
			shortDescription: req.body.shortDescription,
			category: req.body.category,
			price: req.body.price,
			//img: req.body.img
			image: image
		};
		
		let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
	},
	delete: (req, res) => {
		let id = req.params.id;
		let productToDelete = products.filter(product => {
			product.id !== id
		})
	}
	}

module.exports = productController;

	