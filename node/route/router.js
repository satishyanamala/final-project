var express = require('express');
var router = express.Router();
var objectID = require('mongodb').ObjectID;

var Product = require('../schema/schema');
var User = require('../schema/user');

 
var multer = require('multer');
var upload = multer({dest:'uploads/'});
var fs = require('fs');

 router.post('/Img',upload.any(), function(req, res, next){
  console.log("Body",req.body);
  if(req.files){
		req.files.forEach(function(file){
			console.log(file);

			var filename =  (new Date).valueOf()+"-"+file.originalname
			fs.rename(file.path, 'uploads/' +filename, function(err){
				if(err)throw err;
				// console.log('file uploding......');
					//save to mangoose
				
        var product = new Product({
            name:req.body.Name,
            price:req.body.Price,
            image: filename,
            // image1: filename[1]
          });
      
      // console.log(product);
      product.save(function(err, result){
            if(err){
              console.log(err);
            }else{
              res.json(result);
              // console.log(result);
            }
          });
        });
      });
    }
  
  });

  router.get("/get", (req,res)=>{
    Product.find((err,data)=>{
      res.json(data);
      // console.log(data);
    })
  })

  router.post("/register" ,(req,res) =>{
    // console.log(req.body);
        var emp=new User({
         name:req.body.name, 
          role:req.body.role,
          email:req.body.email,
          password:req.body.password,
          confirmpassword:req.body.confirmpassword
        
        })
        
        
        if(req.body.password!=req.body.confirmpassword){
            res.status(423).send(['pass word was not matched.']);
        }
        else {
        emp.save((err,data) =>{
            if (!err){
                    res.send(data);
            }
                
            else {
                if (err.code == 11000)
                    res.status(422).send(['Duplicate email adrress found.']);
                else
                    return next(err);
            }
         });
        }
        });
    
    router.post('/login', function(req, res,next) {
        var email=req.body.email;
        // console.log(email);
        var password= req.body.password;
        User.findOne( {email:email}, function(err, user) {
        
        if(user){
            user.comparePassword(password,user.password, function(err,isMatch){
                if(isMatch){
                    req.session.user = user;
                    res.send(req.session.user);
                }
                else{
                    
                    res.status(420).send(['user name or password wrong.']);
                   
                }
            })   
        } 
        else {
            // console.log("email not")
            res.status(421).send(['user name or password wrong.']);
            // return next(err)
            
        }  
      })
    });
    
     // console.log(req.session.user)
    router.get('/loguot', function (req, res) {
        
        if (req.session){
        req.session.destroy();
        res.send(req.session);
        // console.log("logout success")
        }
        else{
            // console.log("err")
        }
        // console.log(req.session);
    
      });


module.exports=router;
  


