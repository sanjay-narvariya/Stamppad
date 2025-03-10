express = require('express');
var router = express.Router();
const upload = require("./multer"); // Import the multer config file
var pool = require('./pool');

/* GET home page. */
router.post('/mainbanner_submit',upload.single('pictures'), function(req, res, next) {
    console.log(req.files)
             try{
                  pool.query("insert into mainbanner (pictures, bannername, message) values(?,?,?)",[ req.file.filename, req.body.bannername, req.body.message ],function(error,result){
                         if(error)
                          {console.log(error)
                            res.status(400).json({message:'Database error please contact with backendteam...'+error,status:false})
                          }
                          else
                          {
                            res.status(200).json({message:'MainBanner Picture submitted successfully..',status:true})
                          }
                  })
             }
             catch(e)
             {
                          res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
             }
           });

 


router.get('/display_all_mainbanner', function (req, res, next) {
            try {
             
              pool.query("select * from mainbanner", function (error, result) {
                if (error) {
                  console.log(error)
                  res.status(400).json({ message: 'Database error please contact with backendteam...', status: false })
                }
                else {
                 // console.log(result)
                  res.status(200).json({ message: 'Success', data: result, status: true })
                }
              })
            }
            catch (e) {
              res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
            }
          });
          
          



router.post('/display_mainbanner_id', function(req, res, next) {
            try{
                 pool.query("select * from mainbanner where bannerid=?",[req.body.bannerid],function(error,result){
                        if(error)
                         {//console.log(error)
                           res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                         }
                         else
                         {
                           res.status(200).json({message:'Success',data: result[0],status:true})
                         }
                 })
            }
            catch(e)
            {
                         res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
            }
          });
          
          
          
          
          
          
          
router.post('/edit_mainbanner_data', upload.single('pictures'), function(req, res, next) {
            try {
                console.log(req.body);
          
                let updateFields = [];
                let values = [];
          
          
                if (req.file) {
                    updateFields.push("pictures = ?");
                    values.push(req.file.filename);
                }

                if (req.body.bannername) {
                    updateFields.push("bannername = ?");
                    values.push(req.body.bannername);
                }

                if (req.body.message) {
                    updateFields.push("message = ?");
                    values.push(req.body.message);
                }
          
                if (updateFields.length === 0) {
                    return res.status(400).json({ message: 'No fields to update', status: false });
                }
          
                values.push(req.body.bannerid);
                let query = `UPDATE mainbanner SET ${updateFields.join(', ')} WHERE bannerid = ?`;
          
                pool.query(query, values, function(error, result) {
                    if (error) {
                        res.status(400).json({ message: 'Database error, please contact the backend team...', status: false });
                    } else {
                        res.status(200).json({ message: 'MainBanner updated successfully.', status: true });
                    }
                });
          
            } catch (e) {
                res.status(500).json({ message: 'Severe server error, please contact the backend team.', status: false });
            }
          });
          
/********************************* */          



router.post('/delete_mainbanner', function(req, res, next) {
            try{
                 pool.query("delete from mainbanner where bannerid=? ",[req.body.bannerid],function(error,result){
                        if(error)
                         {console.log(error)
                           res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                         }
                         else
                         {
                           res.status(200).json({message:'Categoryicon deleted successfully..',status:true})
                         }
                 })
            }
            catch(e)
            {
                         res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
            }
          });
          


  module.exports = router;