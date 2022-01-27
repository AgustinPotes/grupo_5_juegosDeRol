const fs = require('fs');
const { devNull } = require('os');
const path = require('path');
const { title } = require('process');
const db = require('../database/models/index')

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
	/*newProduct: (req, res) => {
			let newProduct = {
				"id": products.length + 1,
				"title": req.body.title,
				"publisher": req.body.publisher,
				"shortDescription": req.body.shortDescription,
				"category": req.body.category,
				"price": parseFloat(req.body.price),
				"img": req.files[0].filename
			};

			products.push(newProduct);
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
			res.redirect('/');
	},*/

	newProduct: (req, res) => {
		db.Product.create({
			title: req.body.title,
			price: parseFloat(req.body.price),
			//imagen: req.files[0].filename
			descripcion: req.body.shortDescription
		})
		res.redirect('/products');
	},

	editProduct: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('editproduct', {productToEdit, toThousand})
	},
	update: (req, res) => {
		products.find(product => product.id == req.params.id)

		productToEdit = {
			"id": parseFloat(req.params.id),
			"title": req.body.title,
			"price": parseFloat(req.body.price),
			"discountPercentage": parseFloat(req.body.discountPercentage),
			"category": req.body.category,
			"shortDescription": req.body.shortDescription,
			//"img": req.files[0].filename,
			"avaible": req.body.avaible
		};

		let editedProduct = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = productToEdit
			}
			return product
		});

		let newProductList = JSON.stringify(editedProduct, null, ' ');
		fs.writeFileSync(productsFilePath, newProductList, 'utf-8');
		res.redirect('/');
	},
	delete: (req, res) => {
		let deletedProduct = products.filter(product => product.id != req.params.id );
		let newProductList = JSON.stringify(deletedProduct, null, ' ');
		fs.writeFileSync(productsFilePath, newProductList, 'utf-8');
		res.redirect('/');
	},
	}

module.exports = productController;

	