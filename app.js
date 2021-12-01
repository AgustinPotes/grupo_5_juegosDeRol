const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));


const mainRouter = require('./routes/index');
app.use('/', mainRouter);
const loginRouter = require('./routes/login')
app.use('/login', loginRouter);
const cartRouter = require('./routes/cart')
app.use('/cart', cartRouter);
const productRouter = require('./routes/product')
app.use ('/product', productRouter);
const registerRouter = require('./routes/register')
app.use ('/register', registerRouter);
const addproductRouter = require('./routes/addproduct')
app.use ('/addproduct', addproductRouter);
const editproductRouter = require('./routes/editproduct')
app.use ('/editproduct', editproductRouter);
app.listen(3000, () => { console.log('Servidor corriendo en el puerto 3000');
});