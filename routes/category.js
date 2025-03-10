var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool');


/* GET home page. */
router.post('/category_submit',upload.single('categoryicon'), function(req, res, next) {
  try{
       pool.query("insert into category( categoryname, categoryicon) values(?, ?)",[req.body.categoryname,req.file.filename],function(error,result){
              if(error)
               {//console.log(error)
                 res.status(400).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Category submitted successfully..', status:true})
               }
       })
  }
  catch(e)
  {
               res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});



router.get('/display_all_category', function(req, res, next) {
  try{
       pool.query("select * from category",function(error,result){
              if(error)
               {//console.log(error)
                 res.status(200).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Success',data:result,status:true})
               }
       })
  }
  catch(e)
  {
               res.status(200).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});




router.post('/display_category_id', function(req, res, next) {
  try{
       pool.query("select * from category where categoryid=?",[req.body.categoryid],function(error,result){
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







router.post('/edit_category_data', upload.single('categoryicon'), function(req, res, next) {
  try {
      console.log(req.body);

      let updateFields = [];
      let values = [];

      if (req.body.categoryname) {
          updateFields.push("categoryname = ?");
          values.push(req.body.categoryname);
      }

      if (req.file) {
          updateFields.push("categoryicon = ?");
          values.push(req.file.filename);
      }

      if (updateFields.length === 0) {
          return res.status(400).json({ message: 'No fields to update', status: false });
      }

      values.push(req.body.categoryid);
      let query = `UPDATE category SET ${updateFields.join(', ')} WHERE categoryid = ?`;

      pool.query(query, values, function(error, result) {
          if (error) {
              res.status(400).json({ message: 'Database error, please contact the backend team...', status: false });
          } else {
              res.status(200).json({ message: 'Category updated successfully.', status: true });
          }
      });

  } catch (e) {
      res.status(500).json({ message: 'Severe server error, please contact the backend team.', status: false });
  }
});



/*
router.post('/edit_category_icon',upload.single('categoryicon'), function(req, res, next) {
  try{
       pool.query("update category set categoryicon=?, user_admin=? where categoryid=? ",[req.file.filename, req.body.user_admin, req.body.categoryid],function(error,result){
              if(error)
               {console.log(error)
                 res.status(200).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Categoryicon updated successfully..',status:true})
               }
       })
  }
  catch(e)
  {
               res.status(200).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});

*/

router.post('/delete_category', function(req, res, next) {
  try{
       pool.query("delete from category where categoryid=? ",[req.body.categoryid],function(error,result){
              if(error)
               {console.log(error)
                 res.status(200).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Category deleted successfully..',status:true})
               }
       })
  }
  catch(e)
  {
               res.status(200).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});


module.exports = router;
