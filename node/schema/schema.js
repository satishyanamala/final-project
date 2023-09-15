var mongoose=require('mongoose');

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
    name:{type:String},
    price:{type:String},
    image:{type:String},
    
});



var collectionName= "product";
var Pro= mongoose.model('Pro',ProductSchema,collectionName);
module.exports=Pro;