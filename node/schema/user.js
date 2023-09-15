var mongoose=require('mongoose');
var bcrypt = require('bcryptjs');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:{type:String},
    email:{type:String,
        unique: true
       },
 password:{type:String},
 confirmpassword:{type:String}
});

// Custom validation for email
UserSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


// bcrypt ....
UserSchema.pre('save', function (next){
    // var user= this;
    bcrypt.hash(this.password,10,(err,hash) =>{
        if(!err){
			this.password=hash;
			// this.confirmpassword=hash;
            next();
        }
        else{
            return next(err);
        }
    });
});
// Coparing pwd
UserSchema.methods.comparePassword= function(candidatePassword,hashedPassword,cb){
	bcrypt.compare(candidatePassword,hashedPassword,function(err,isMatch){
 if(err){
	 return cd(err);
 }
 return cb(null,isMatch);
 // console.log("correct")
	});
}

var collectionName= "user";
var User= mongoose.model('User',UserSchema,collectionName);
module.exports=User;