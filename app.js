var express = require('express'), 
	app = module.exports = express.createServer(),
	io = require('socket.io').listen(app);
var logfmt = require('logfmt');
var fs = require('fs');
var port = Number(process.env.PORT || 5000);
app.use(logfmt.requestLogger());
app.listen(port, function(){
	console.log('Listening on '+port);
});

io.sockets.on('connection', function(socket) {
    socket.on('echo', function(data) {
        socket.broadcast.emit('echo', data);
    });
});