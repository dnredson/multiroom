/* importar o framework express*/
var express = require('express');
/* importar o framework Consign*/
var consign = require('consign');
/* importar o framework body-parser*/
var bodyParser = require('body-parser');
/* importar o framework express-validator*/
var expressValidator = require ('express-validator');

/* iniciar o objeto express */
var app = express();

/* configurar o EJS, setar as variaveis view-engine e views*/

app.set('view engine','ejs');
app.set('views','./app/views');


/* Configura o middleware express.static */

app.use(express.static('./app/public'));

/* Configura o middleware body parse */
app.use(bodyParser.urlencoded({extended: true}));

/* Inicia  o app express validator */
app.use(expressValidator());

/* configura o autoload */
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);
/* exporta o objeto app */
module.exports = app;