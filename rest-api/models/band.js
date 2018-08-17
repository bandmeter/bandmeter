var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var bandSchema = new Schema({
    name: {type:String, required:true, index: {unique:true}},
    musicStyle: {type:String},
    logo:{type:String, required: true},
    imageBand: {type:String},
    administrators: [{madministratorember:{type: Schema.Types.ObjectId, ref:"User"}}],
    members: [{member:{type: Schema.Types.ObjectId, ref:"User"}}],
    albums: [{album:{type:Schema.Types.ObjectId, ref:"Album"}}],
    collaborators: [{member:{type: Schema.Types.ObjectId, ref:"User"}}],
    slug: {type:String, required:true, index:{unique:true}},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Band', bandSchema);
