express = require('express');
var router = express.Router();
var pool = require('./pool');
const bcrypt = require('bcrypt');



/* GET home page. */

router.get('/admin_login', function (req, res) {
  try {
    
      return res.status(200).json({ data: [], status: true, message: "Logout Successful..." });
  }
  catch {
    return res.status(500).json({ message: 'Server error...' });
  }
});




router.get('/admin_logout', function (req, res) {

  return res.status(200).redirect('/adminlogin/admin_login');

})




router.post('/chk_admin_login', function (req, res, next) {
  try {
      
    pool.query("select * from stamps.adminlogin where mailid=? and password=?", [req.body.mailid, req.body.password], function (error, result) {
      
      if (error) {
        res.status(400).json({ message: 'Database error ....' + error, status: false })
           }
        else {
          console.log(result[0])
          if(result.length==1)
          {
          res.status(200).json({ message: 'Login Successfull....... ', status: true })
          }
          else{
            res.status(200).json({ message: 'Please Correct mailid and password sanjay....... ', status: false })
          }
        }
      })
  }
  catch (e) {
    res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }
});


router.get('/phoneno',function (req, res, next) {
  try {
      
    pool.query("SELECT * FROM stamps.adminlogin", function (error, result) {
      
      if (error) {
        res.status(400).json({ message: 'Database error ....' + error, status: false })
           }
        else {
          console.log(result[0])
          if(result.length==1)
          {
          res.status(200).json({ message: 'Get Phone number....... ',data:result[0], status: true })
          }
          else{
            res.status(200).json({ message: 'Not get Phone number ....... ', status: false })
          }
        }
      })
  }
  catch (e) {
    res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }

})



module.exports = router;