const express = require ('express');
const morgan  = require ('morgan');
const {engine} = require('express-handlebars');
const path = require ('path');

//inicializacion
const app = express();

//config
app.set('port',process.env.PORT||4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    exthname: '.hbs',
    helpers: require('./lib/hbs')
}));
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req, res, next) => {
    next();
});

//rutas
app.use(require('./routes/'));
app.use(require('./routes/auth'));
app.use('/links',require('./routes/links'));

//public
app.use(express.static(path.join(__dirname, 'public')));

//Inicio del servidor
app.listen(app.get('port'), ()=> {
    console.log('Servidor en el puerto ', app.get('port'))
});