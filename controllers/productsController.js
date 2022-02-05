const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require('../database/models/index');

/*const { devNull } = require('os');
const { title } = require('process');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");*/


const productController = {
	index: (req, res) => {
		db.Product.findAll({
			order: [["title", "ASC"]]
		})
		   .then(products => {
		        res.render('product', {products});
		   })
		   .catch(err => {
			res.send(err)
		})
	},
	
	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			include: [{association: "status"}, {association: "categories"}]
		})
		.then(product => {
			res.render('detail', {product});
	   })
	   .catch(err => {
		res.send(err)
	})
	},

	/*detail: (req, res) => {
		let id = req.params.id
		let productDetail = products.find(product => product.id == id)
		res.render('detail', {
			productDetail,
			toThousand
		})
	},

	detail: (req, res) => {

        let id = req.params.id;

        let promesaProductos = db.Product.findAll()

        let promesaStatus = db.Status.findByPk(id, {
                                include: [{association: "products"}]
                            })
        
        Promise.all([promesaProductos, promesaStatus ])
            .then(([products, status]) => {
                res.render('detail', { products, status })
            })
            .catch(err => {
                res.send(err)
            })
    },

	cart: (req, res) => {
		res.render('cart');
	},*/
	addProduct: (req, res) => {
		res.render('addproduct');
	},
	
	newProduct: (req, res) => {
		db.Product.create({
			title: req.body.title,
			price: parseFloat(req.body.price),
			image: req.files[0].filename,
			descrip: req.body.shortDescription
		})
		res.redirect('/products');
	}
/*
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
	},*/
	}

module.exports = productController;

	