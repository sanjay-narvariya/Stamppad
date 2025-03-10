var express = require('express');
var router = express.Router();
var pool = require('./pool');
const bcrypt = require('bcrypt');


router.post('/submit_form',function(req,res,next){
    try{
  
      bcrypt.hash(req.body.newpassword, 10, function(err, hash) {
       // console.log("Hashed Password:", hash);
  
      pool.query("insert into adminlogin (fullname, mailid, phoneno, password, confirmpassword) values(?,?,?,?,?)", [req.body.fullname, req.body.mailid, req.body.phoneno, hash, hash],function (error, result) {
        if (error) 
          {
          res.status(403).json({ message: 'Database error please contact with backend team...at submit form', status: false })
        }
        else {
          //  console.log(result[0]);
            res.status(200).json({ message: 'Admin Sign-up successfully ....', status: true, data: result[0] })
        }
      })
    })
    }
    catch(e)
    {
        res.status(500).json({message:'Server error on server....at submit time'+e});
    }
    
  })
  
  
  module.exports = router;  