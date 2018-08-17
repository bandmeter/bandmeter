var express = require('express'),
	app = express(),
  	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var	session = require('express-session');

var multipart = require('connect-multiparty');

app.use(multipart({
    uploadDir: '../uploads'
}));

app.use(cookieParser());
app.use(session({
	secret: 'b4ndm3t3r',
    resave:true,
    saveUninitialized:true,
    cookie:{httpOnly: false, secure: false}
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var models = require('./models/bandmeter')(app,mongoose);

var router = express.Router();

router.get('/',function(req, res) {
   res.send("Hello World!");
});

app.use(router);

var FileCtrl = require('./controllers/file');

var file = express.Router();

file.route('/uploadimg')
	.post(FileCtrl.uploadimg);

app.use('/api', file);

var port = 3600;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/bandmeter', {useNewUrlParser: true})
        .then(() => {
            console.log("La conexión a la BBDD se ha realizado");
            app.listen(port, ()=>{
                console.log("El servidor está corriendo en http://localhost:"+port);
            })
        })
        .catch(err=>{console.log(err)});