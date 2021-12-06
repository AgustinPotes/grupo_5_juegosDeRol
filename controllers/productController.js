const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/product.json');
let product = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productController = {
	// Root - Show all products
	index: (req, res) => {
		res.render('product',{product});
	},
    // Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail',);
	}
}


module.exports = productController;