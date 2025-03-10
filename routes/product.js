express = require('express');
var router = express.Router();
// var upload = require('./multer');
const upload = require("./multer"); // Import the multer config file
var pool = require('./pool');


router.post(
  "/product_submit",
  upload.any(),
  /* upload.fields([
     { name: "picture", maxCount: 1 },
     { name: "picture1", maxCount: 1 },
     { name: "picture2", maxCount: 1 },
     { name: "picture3", maxCount: 1 },
     { name: "picture4", maxCount: 1 },
     { name: "picture5", maxCount: 1 },
     { name: "picture6", maxCount: 1 },
     { name: "picture7", maxCount: 1 },
   ]),
   function (req, res) {
     try {
       const imagePaths = [];
       for (let i = 0; i < 8; i++) {
         const fieldName = `picture${i === 0 ? "" : i}`;
         imagePaths.push(req.files[fieldName]?.[0]?.path || null);
       }*/
  function (req, res) {
    try {
      pool.query(
        "INSERT INTO products (categoryid, subcategoryid, productname, picture, picture1, picture2, picture3, picture4, picture5, picture6, picture7) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          req.body.categoryid,
          req.body.subcategoryid,
          req.body.productname,
          req.files[0].filename,
          req.files[1].filename,
          req.files[2].filename,
          req.files[3].filename,
          req.files[4].filename,
          req.files[5].filename,
          req.files[6].filename,
          req.files[7].filename,
          /*...imagePaths,*/

        ],
        function (error, result) {
          if (error) {
            res
              .status(400)
              .json({
                message: "Database error. Please contact the backend team.",
                status: false,
                error,
              });
          } else {
            res
              .status(200)
              .json({ message: "Products submitted successfully.", status: true });
          }
        }
      );
    } catch (e) {
      res
        .status(500)
        .json({ message: "Server error. Please contact the backend team.", status: false });
    }
  }
);




router.get('/display_all_product', function (req, res, next) {
  try {
   
    pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from products P", function (error, result) {
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




router.post('/display_product_id', function (req, res, next) {
  try {
    pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from products P where productid=?", [req.body.productid], function (error, result) {
      if (error) {
        console.log(error)
        res.status(400).json({ message: 'Database error please contact with backendteam...', status: false })
      }
      else {
        console.log('sanjayjkdbjhgdjhcdgbjhdcghdc',result)
        res.status(200).json({ message: 'Success', data: result, status: true })
      }
    })
  }
  catch (e) {
    res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }
});



router.post('/edit_product_data', upload.any(), function (req, res, next) { 
                 try {
                      console.log(req.files)

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
                        updateFields.push(" productname = ?");
                        values.push(req.body.productname);
                       }

                       req.files.forEach((file) => {
                        const fieldMapping = {
                            picture: "picture = ?",
                            picture1: "picture1 = ?",
                            picture2: "picture2 = ?",
                            picture3: "picture3 = ?",
                            picture4: "picture4 = ?",
                            picture5: "picture5 = ?",
                            picture6: "picture6 = ?",
                            picture7: "picture7 = ?",
                        };
                    
                        if (fieldMapping[file.fieldname]) {
                            updateFields.push(fieldMapping[file.fieldname]);
                            values.push(file.filename);
                        }
                    });
                    


    if (updateFields.length === 0) {
      return res.status(400).json({ message: 'No fields to update', status: false });
      }
      
      values.push(req.body.productid);
      let query = `UPDATE products SET ${updateFields.join(', ')} WHERE productid = ?`;

    pool.query(query, values, function (error, result) {
      if (error) {
        console.log(error);
        return res.status(400).json({ message: 'Database error, please contact backend team...', status: false });
      }
      console.log(result)
      res.status(200).json({ message: 'Product updated successfully.', status: true, data:result });
    });
  }
  catch (e) {
    console.error(e);

    res.status(500).json({ message: 'Severe error on server, please contact backend team.' + e, status: false });
  }
});





router.post('/delete_product', function (req, res, next) {
  try {
    pool.query("delete from products where productid=? ", [req.body.productid], function (error, result) {
      if (error) {
        console.log(error)
        res.status(400).json({ message: 'Database error please contact with backendteam...', status: false })
      }
      else {
        res.status(200).json({ message: 'ProductlistRow deleted successfully..', status: true })
      }
    })
  }
  catch (e) {
    res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }
});




router.post('/get_all_product_by_subcategoryid', function (req, res, next) {
  try {
    pool.query("select P.*,(select C.categoryname from category C where C.categoryid=P.categoryid ) as categoryname,(select SC.subcategoryname from subcategory SC where SC.subcategoryid=P.subcategoryid ) as subcategoryname from products P where P.subcategoryid=?", [req.body.subcategoryid], function (error, result) {
      if (error) {//console.log(error)
        res.status(400).json({ message: 'Database error please contact with backendteam...', status: false })
      }
      else {//console.log(result)
        res.status(200).json({ message: 'Success', data: result, status: true })
      }
    })
  }
  catch (e) {
    res.status(500).json({ message: 'Severe error on server please contact with backendteam..', status: false })
  }
});



module.exports = router;



 //let { categoryid, subcategoryid, productname, productid } = req.body;
    // let images = req.files.map(file => file.filename); // Extract filenames from uploaded files
    // let query = `UPDATE products SET categoryid=?, subcategoryid=?, productname=?, picture=?, picture1=?, picture2=?, picture3=?, picture4=?, picture5=?, picture6=?, picture7=? WHERE productid=?`;
    // let values = [
    //   categoryid, 
    //   subcategoryid, 
    //   productname, 
    //   req.files[0]?.filename || req.body.picture, 
    //   req.files[1]?.filename || req.body.picture1, 
    //   req.files[2]?.filename || req.body.picture2, 
    //   req.files[3]?.filename || req.body.picture3, 
    //   req.files[4]?.filename || req.body.picture4, 
    //   req.files[5]?.filename || req.body.picture5, 
    //   req.files[6]?.filename || req.body.picture6, 
    //   req.files[7]?.filename || req.body.picture7, 
    //   productid
    // ];
    
                //  if (req.files[0].fieldname=='picture') {
                //         updateFields.push("picture = ?");
                //         values.push(req.files[0]?.filename);
                //        }

                // if (req.files[1].fieldname=='picture1') {
                //         updateFields.push("picture1 = ?");
                //         values.push(req.files[1]?.filename);
                //        }

                //  if (req.files[2].fieldname=='picture2') {
                //         updateFields.push("picture2 = ?");
                //         values.push(req.files[2]?.filename);
                //        }

                //   if (req.files[3].fieldname=='picture3') {
                //         updateFields.push("picture3 = ?");
                //         values.push(req.files[3]?.filename);
                //        }

                //    if (req.files[4].fieldname=='picture4') {
                //         updateFields.push("picture4 = ?");
                //         values.push(req.files[4]?.filename);
                //        }

                //    if (req.files[5].fieldname=='picture5') {
                //         updateFields.push("picture5 = ?");
                //         values.push(req.files[5]?.filename);
                //        }

                //        if (req.files[6].fieldname=='picture6') {
                //         updateFields.push("picture6 = ?");
                //         values.push(req.files[6]?.filename);
                //        }

                //        if (req.files[7].fieldname=='picture7') {
                //         updateFields.push("picture7 = ?");
                //         values.push(req.files[7]?.filename);
                //        }