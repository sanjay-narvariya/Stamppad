var express = require('express');
var router = express.Router();
var upload = require('./multer')
var pool = require('./pool');


 

router.get('/user_display_all_category', function(req, res, next) {
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





router.post('/user_get_all_subcategory_by_categoryid', function (req, res, next) {
  try {
    pool.query("select SC.*,(select C.categoryname from category C where C.categoryid=SC.categoryid ) as categoryname from subcategory SC where SC.categoryid=?", [req.body.categoryid], function (error, result) {
      if (error) {
        console.log(error)
        res.status(400).json({ message: 'Database error please contact with backendteam...', status: false })
      }
      else {
        console.log(result)
        res.status(200).json({ message: 'Success', data: result, status: true })
      }
    })
  }
  catch (e) {
    res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }
});




router.get('/user_display_all_subcategory', function (req, res, next) {
  try {
    q = "select * from subcategory"
    pool.query(q, function (error, result) {
      if (error) {
        console.log(error)
        res.status(200).json({ message: 'Database error please contact with backendteam...', status: false })
      }
      else {
        res.status(200).json({ message: 'Success', data: result, status: true })
      }
    })
  }
  catch (e) {
    res.status(200).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }
});




router.post('/user_get_all_product_by_subcategoryid', function(req, res, next) {
  try{
       pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from products P where P.subcategoryid=?",[req.body.subcategoryid],function(error,result){
              if(error)
               {//console.log(error)
                 res.status(400).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {//console.log(result)
                 res.status(200).json({message:'Success', data:result, status:true})
               }
       })
  }
  catch(e)
  {
               res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});




router.post('/user_get_all_oneproduct_by_subcategoryid', function(req, res, next) {
  try{
       pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from oneproduct P where P.subcategoryid=?",[req.body.subcategoryid],function(error,result){
              if(error)
               {//console.log(error)
                 res.status(400).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {//console.log(result)
                 res.status(200).json({message:'Success', data:result, status:true})
               }
       })
  }
  catch(e)
  {
               res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});


            
router.post('/user_display_all_product', function(req, res, next) {
  try{
       pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from products P where P.productid=?",[req.body.productid], function(error,result){
              if(error)
               {console.log(error)
                 res.status(400).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Success',data:result, status:true})
               }
       })
  }
  catch(e)
  {
               res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});




            
router.post('/user_display_all_oneproduct', function(req, res, next) {
  try{
       pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from oneproduct P where P.productid=?",[req.body.productid], function(error,result){
              if(error)
               {console.log(error)
                 res.status(400).json({message:'Database error please contact with backendteam...',status:false})
               }
               else
               {
                 res.status(200).json({message:'Success',data:result, status:true})
               }
       })
  }
  catch(e)
  {
               res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
  }
});




// router.get('/user_display_stamp', function(req, res, next) {
//   try{
//        pool.query("select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=S.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=S.productid ) as productname from stamp S", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_stamp_by_productid', function(req, res, next) {
//   try{
//        pool.query("select S.*,(select C.categoryname from category C where C.categoryid=S.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=S.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=S.productid ) as productname from stamp S where S.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });



// router.get('/user_display_imprint', function(req, res, next) {
//   try{
//        pool.query("select I.*,(select C.categoryname from category C where C.categoryid=I.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=I.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=I.productid ) as productname from imprint I", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_imprint_by_productid', function(req, res, next) {
//   try{
//        pool.query("select I.*,(select C.categoryname from category C where C.categoryid=I.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=I.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=I.productid ) as productname from imprint I where I.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });


 

// router.get('/user_display_packaging', function(req, res, next) {
//   try{
//        pool.query("select K.*,(select C.categoryname from category C where C.categoryid=K.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=K.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=K.productid ) as productname from packaging K", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_packaging_by_productid', function(req, res, next) {
//   try{
//        pool.query("select K.*,(select C.categoryname from category C where C.categoryid=K.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=K.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=K.productid ) as productname from packaging K where K.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.get('/user_display_colours', function(req, res, next) {
//   try{
//        pool.query("select L.*,(select C.categoryname from category C where C.categoryid=L.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=L.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=L.productid ) as productname from colours L", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_colours_by_productid', function(req, res, next) {
//   try{
//        pool.query("select L.*,(select C.categoryname from category C where C.categoryid=L.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=L.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=L.productid ) as productname from colours L where L.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.get('/user_display_sparepad', function(req, res, next) {
//   try{
//        pool.query("select D.*,(select C.categoryname from category C where C.categoryid=D.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=D.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=D.productid ) as productname from sparepad D", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_sparepad_by_productid', function(req, res, next) {
//   try{
//        pool.query("select D.*,(select C.categoryname from category C where C.categoryid=D.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=D.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=D.productid ) as productname from sparepad D where D.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });





// router.get('/user_display_nooflines', function(req, res, next) {
//   try{
//        pool.query("select N.*,(select C.categoryname from category C where C.categoryid=N.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=N.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=N.productid ) as productname from nooflines N", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_nooflines_by_productid', function(req, res, next) {
//   try{
//        pool.query("select N.*,(select C.categoryname from category C where C.categoryid=N.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=N.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=N.productid ) as productname from nooflines N where N.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.get('/user_display_optionalcover', function(req, res, next) {
//   try{
//        pool.query("select O.*,(select C.categoryname from category C where C.categoryid=O.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=O.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=O.productid ) as productname from optionalcover O", function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {
//                  res.status(200).json({message:'Success',data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });




// router.post('/user_get_all_optionalcover_by_productid', function(req, res, next) {
//   try{
//        pool.query("select O.*,(select C.categoryname from category C where C.categoryid=O.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=O.subcategoryid ) as subcategoryname, (select P.productname from products P where P.productid=O.productid ) as productname from optionalcover O where O.productid=?",[req.body.productid],function(error,result){
//               if(error)
//                {//console.log(error)
//                  res.status(400).json({message:'Database error please contact with backendteam...',status:false})
//                }
//                else
//                {//console.log(result)
//                  res.status(200).json({message:'Success', data:result, status:true})
//                }
//        })
//   }
//   catch(e)
//   {
//                res.status(500).json({message:'Severe error on server please contact with backendteam..',status:false})
//   }
// });







module.exports = router;
