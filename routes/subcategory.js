var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool')
/* GET home page. */
router.post('/subcategory_submit', upload.single('subcategoryicon'), function(req, res, next) {
               try{
                    pool.query("insert into subcategory (categoryid, subcategoryname, subcategoryicon) values(?,?,?)",[req.body.categoryid, req.body.subcategoryname, req.file.filename],function(error,result){
                           if(error)
                            {//console.log(error)
                              res.status(400).json({message:'Database error please contact with backendteam...'+error,status:false})
                            }
                            else
                            {
                              res.status(200).json({message:'Subcategory submitted successfully..', status:true})
                            }
                    })
               }
               catch(e)
               {
                            res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
               }
             });







 router.get('/display_all_subcategory', function(req, res, next) {
              try{
                   pool.query("select SC.*,(select C.categoryname from category C where C.categoryid=SC.categoryid ) as categoryname from subcategory SC",function(error,result){
                          if(error)
                           {console.log(error)
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



router.post('/display_subcategory_id', function(req, res, next) {
              try{
                   pool.query("select SC.*,(select C.categoryname from category C where C.categoryid=SC.categoryid ) as categoryname from subcategory SC where subcategoryid=?",[req.body.subcategoryid],function(error,result){
                          if(error)
                           {console.log(error)
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




            
  router.post('/edit_subcategory_data', upload.single('subcategoryicon'), function(req, res, next) {
              try{ 
                   console.log(req.body);

                   let updateFields = [];
                       let values = [];

             if (req.body.categoryid) {
                      updateFields.push("categoryid = ?");
                      values.push(req.body.categoryid);
                     }

                if (req.body.subcategoryname) {
                        updateFields.push("subcategoryname = ?");
                        values.push(req.body.subcategoryname);
                       }
              
              if (req.file) {
                        updateFields.push("subcategoryicon = ?");
                        values.push(req.file.filename);
                       }

        if (updateFields.length === 0) {
                        return res.status(400).json({ message: 'No fields to update', status: false });
                    }

                    values.push(req.body.subcategoryid);
                    let query = `UPDATE subcategory SET ${updateFields.join(', ')} WHERE subcategoryid = ?`;

                   pool.query(query, values,function(error,result){
                          if(error)
                           {console.log(error)
                             res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                           }
                           else
                           {
                             res.status(200).json({message:'Subcategory updated successfully..',status:true})
                           }
                   })
              }
              catch(e)
              {
                           res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
              }
            });
            


/*
  router.post('/edit_subcategory_icon',upload.single('subcategoryicon'), function(req, res, next) {
              try{
                   pool.query("update subcategory set categoryid=?,subcategoryicon=?, user_admin=? where subcategoryid=? ",[req.body.categoryid, req.file.filename, req.body.user_admin, req.body.subcategoryid],function(error,result){
                          if(error)
                           {console.log(error)
                             res.status(200).json({message:'Database error please contact with backendteam...',status:false})
                           }
                           else
                           {
                             res.status(200).json({message:'Subcategoryicon updated successfully..',status:true})
                           }
                   })
              }
              catch(e)
              {
                           res.status(200).json({message:'Severe error on server please contact with backendteam..',status:false})
              }
            });



*/
            
   router.post('/delete_subcategory', function(req, res, next) {
              try{
                   pool.query("delete from subcategory where subcategoryid=? ",[req.body.subcategoryid],function(error,result){
                          if(error)
                           {console.log(error)
                             res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                           }
                           else
                           {
                             res.status(200).json({message:'SubcategorylistRow deleted successfully..',status:true})
                           }
                   })
              }
              catch(e)
              {
                           res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
              }
            });
            


  router.post('/get_all_subcategory_by_categoryid', function(req, res, next) {
              try{
                   pool.query("select SC.*,(select C.categoryname from category C where C.categoryid=SC.categoryid ) as categoryname from subcategory SC where SC.categoryid=?",[req.body.categoryid],function(error,result){
                          if(error)
                           {console.log(error)
                             res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                           }
                           else
                           {console.log(result)
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