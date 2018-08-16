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

// Permisos
var PermissionCtrl = require('./controllers/permission');

var permission = express.Router();

permission.route('/permissions')
	.get(PermissionCtrl.findAllPermissions)
	.post(PermissionCtrl.addPermission);

permission.route('/permission/:id')
	.get(PermissionCtrl.findById)
	.put(PermissionCtrl.updatePermission)
	.delete(PermissionCtrl.deletePermission);

app.use('/api', permission);

// Usertype
var UsertypeCtrl = require('./controllers/usertype');

var usertype = express.Router();

usertype.route('/usertypes')
	.get(UsertypeCtrl.findAllUserTypes)
	.post(UsertypeCtrl.addUserType);

usertype.route('/usertype/:id')
	.get(UsertypeCtrl.findById)
	.put(UsertypeCtrl.updateUserType)
	.delete(UsertypeCtrl.deleteUserType);

app.use('/api', usertype);

// MusicStyle
var MusicStyleCtrl = require('./controllers/musicstyle');

var musicstyle = express.Router();

musicstyle.route('/musicstyles')
	.get(MusicStyleCtrl.findAllMusicStyles)
	.post(MusicStyleCtrl.addMusicStyle);

musicstyle.route('/musicstyle/:id')
	.get(MusicStyleCtrl.findById)
	.put(MusicStyleCtrl.updateMusicStyle)
	.delete(MusicStyleCtrl.deleteMusicStyle);

app.use('/api', musicstyle);

// Instrument
var InstrumentCtrl = require('./controllers/instrument');

var instrument = express.Router();

instrument.route('/musicstyles')
	.get(InstrumentCtrl.findAllInstruments)
	.post(InstrumentCtrl.addInstrument);

instrument.route('/musicstyle/:id')
	.get(InstrumentCtrl.findById)
	.put(InstrumentCtrl.updateInstrument)
	.delete(InstrumentCtrl.deleteInstrument);

app.use('/api', instrument);

// Band
var BandCtrl = require('./controllers/band');

var band = express.Router();

band.route('/bands')
	.get(BandCtrl.findAllBands)
	.post(BandCtrl.addBand);

band.route('/band/:id')
	.get(BandCtrl.findById)
	.put(BandCtrl.updateBand)
	.delete(BandCtrl.deleteBand);

band.route('/band/:slug')
	.get(BandCtrl.findBySlug);

band.route('/searchband/:name')
	.get(BandCtrl.findByName);

app.use('/api', band);

// JamRoom
var JamRoomCtrl = require('./controllers/jamroom');

var jamroom = express.Router();

jamroom.route('/jamrooms')
	.get(JamRoomCtrl.findAllJamRooms)
	.post(JamRoomCtrl.addJamRoom);

jamroom.route('/jamroom/:id')
	.put(JamRoomCtrl.updateJamRoom)
	.delete(JamRoomCtrl.deleteJamroom);

jamroom.route('/jamroom/:slug')
	.get(JamRoomCtrl.findBySlug);

jamroom.route('/searchjamroom/:name')
	.get(JamRoomCtrl.findByName);

app.use('/api', jamroom);

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