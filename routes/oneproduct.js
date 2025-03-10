var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool');
 
/* GET home page. */
router.post('/oneproduct_submit',upload.single('picture'), function(req, res, next) {
    try{
      console.log('sssssssssssssssssssss',req.body, req.file)
         pool.query("insert into stamps.oneproduct ( categoryid, subcategoryid, productname, picture) values(?,?,?,?)",[req.body.categoryid, req.body.subcategoryid, req.body.productname, req.file.filename],function(error,result){
                if(error)
                 {console.log(error)
                   res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                 }
                 else
                 {
                   res.status(200).json({message:'One Product submitted successfully..', status:true})
                 }
         })
    }
    catch(e)
    {
                 res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
    }
  });
  
  
  
  router.get('/display_all_oneproduct', function(req, res, next) {
    try{
         pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from oneproduct P ",function(error,result){
                if(error)
                 {//console.log(error)
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
  
  
  
  
  router.post('/display_oneproduct_id', function(req, res, next) {
    try{
         pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from oneproduct P where productid=?", [req.body.productid],function(error,result){
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
  
  
  
  
  
  
  
  router.post('/edit_oneproduct_data', upload.single('picture'), function(req, res, next) {
    try {
        console.log(req.body);
  
        let updateFields = [];
        let values = [];

        if (req.body.categoryid) {
          updateFields.push("categoryid = ?");
          values.push(req.body.categoryid);
         }

       if (req.body.subcategoryid) {
          updateFields.push("subcategoryid = ?");
          values.push(req.body.subcategoryid);
         }  
  
        if (req.body.productname) {
            updateFields.push("productname = ?");
            values.push(req.body.productname);
        }
  
        if (req.file) {
            updateFields.push("picture = ?");
            values.push(req.file.filename);
        }
  
        if (updateFields.length === 0) {
            return res.status(400).json({ message: 'No fields to update', status: false });
        }
  
        values.push(req.body.productid);
        let query = `UPDATE oneproduct SET ${updateFields.join(', ')} WHERE productid = ?`;
  
        pool.query(query, values, function(error, result) {
            if (error) {
                res.status(400).json({ message: 'Database error, please contact the backend team...', status: false });
            } else {
                res.status(200).json({ message: 'One Product updated successfully.', status: true });
            }
        });
  
    } catch (e) {
        res.status(500).json({ message: 'Severe server error, please contact the backend team.', status: false });
    }
  });
  
  

  
  router.post('/delete_oneproduct', function(req, res, next) {
    try{
         pool.query("delete from oneproduct where productid=? ",[req.body.productid],function(error,result){
                if(error)
                 {console.log(error)
                   res.status(400).json({message:'Database error please contact with backendteam...',status:false})
                 }
                 else
                 {
                   res.status(200).json({message:'One Product deleted successfully..',status:true})
                 }
         })
    }
    catch(e)
    {
                 res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
    }
  });
  
  
  module.exports = router;
  