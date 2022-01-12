// ************ Require's ************
const express = require('express');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// ************ express() ************
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));


// ************ Middlewares - (don't touch) ************
app.use(express.static('public'));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session( {secret: 'secreto', resave: false, saveUninitialized: true,} ));
app.use(userLoggedMiddleware);

// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');

const port = 3000;
app.listen(port, () => { console.log('Servidor corriendo en el puerto ' + port);
});


// ************ Route System require and use() ************
const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

const productsRouter = require('./routes/productsRouter');
app.use ('/products', productsRouter);

const usersRouter = require('./routes/usersRouter');
app.use ('/users', usersRouter);