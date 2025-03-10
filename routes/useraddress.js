express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool');


/* GET home page. */
  router.post('/user_submit', function(req, res, next) {

               try{
                    pool.query("insert into useraddress ( name, mailid, mobileno, message) values(?,?,?,?)",[req.body.name, req.body.mailid, req.body.mobileno, req.body.message],function(error,result){
                           if(error)
                            {//console.log(error)
                              res.status(400).json({message:'Database error please contact with backendteam...'+error,status:false})
                            }
                            else
                            {
                              res.status(200).json({message:'Useraddress submitted successfully..',status:true})
                            }
                    })
               }
               catch(e)
               {
                            res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
               }
             });





router.get('/display_userdetail', function(req, res, next) {
  try{
       pool.query("select * from useraddress ",function(error,result){
              if(error)
               { //console.log(error)
                 res.status(400).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Success',data:result,status:true})
               }
       })
  }
  catch(e)
  {
               res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});






 module.exports = router;