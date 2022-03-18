const db = require('../../database/models/index');

const apiProductsController = {
    index: (req, res) => {
		db.Product.findAll()
		   .then(products => {
		       return res.status(200).json({
				count: products.length,
				status: 200,   
				products: products,
				//countByCategory:   
			   })
		   })
		   .catch(err => {
			res.send(err)
		})
	},

	detail: (req, res) => {
		db.Product.findByPk(req.params.id, {
			/*include: [{association: "status"}, {association: "categories"}]*/
		})
		.then(product => {
			return res.status(200).json({
			 url: product.image, 
			 status: 200,   
			 product: product,
			 
			})
		})
	   .catch(err => {
		res.send(err)
	})
	},
	category: (req, res) => {
		db.Category.findAll()
		.then(categories => {
			return res.status(200).json({
				count: categories.length,
				categories: categories,
			})
		})
	},
	status: (req, res) => {
		db.Status.findAll()
		.then(status => {
			return res.status(200).json({
				count: status.length,
				status: status,
			})
		})
	}
}


module.exports = apiProductsController;