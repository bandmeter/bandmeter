var mongoose = require('mongoose');
var User = mongoose.model('User');
var formidable = require('formidable');
var fs = require('fs');
var easyimg = require('easyimage');

/**
 * Create file upload
 */
exports.uploadimg = function(req,res){
    var file = req.files.file.path;
    var type = req.files.file.type;
    if(type !== 'image/jpeg' && type !== 'image/png' && type !== 'image/gif'){
        fs.unlink(file);
        res.status(200).send('ko');
    }else{
        var pieces = file.split("/");
        var filename = pieces[pieces.length-1];
        res.status(200).send(filename);
    }
}

exports.crop = function(req,res){
    easyimg.crop({
        src:srcimg, dst:'./output/crop.jpg',
        cropwidth:128, cropheight:128,
        gravity:'North',
        x:0, y:0
    }).then(function (file) {
        file.should.be.a('object');
        file.should.have.property('width');
        file.width.should.be.equal(128);
        file.name.should.be.equal('crop.jpg');
    });
}