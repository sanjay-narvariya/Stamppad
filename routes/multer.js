// const multer = require("multer");
// const { v4: uuidv4 } = require('uuid');

// // Set storage engine
// const storage = multer.diskStorage({

//   destination:(req,file,path)=>{
//     path(null, "public/images"); // Change to your desired folder
//   },

//   filename:(req,file,path)=>{

//      var ext=file.originalname.substring(file.originalname.lastIndexOf("."))
//                var fn=`${uuidv4()}${ext}`
//     path(null, fn); // Rename file with timestamp
//   },
// });

// // File filter to allow only images
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/webp"];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only JPEG, PNG, JPG, and WEBP images are allowed"), false);
//   }
// };

// // Multer middleware
// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit per file
// });

// // Export configured multer middleware
// module.exports = upload;



var multer=require('multer')
const { v4: uuidv4 } = require('uuid');

const storage=multer.diskStorage({

   destination:(req,file,path)=>{

                 path(null,'public/images') 
               },

    filename:(req,file,path)=>{

               var ext=file.originalname.substring(file.originalname.lastIndexOf("."))
               var fn=`${uuidv4()}${ext}`
               path(null,fn) 
             }
   
})

var upload=multer({storage:storage})
module.exports=upload














/*var multer=require('multer')
const { v4: uuidv4 } = require('uuid');

const storage=multer.diskStorage({

   destination:(req,file,path)=>{

                 path(null,'public/images') 
               },

    filename:(req,file,path)=>{

              // var ext=file.originalname.substring(file.originalname.lastIndexOf("."))
             //  var fn=`${uuidv4()}${ext}`
               path(null, Date.now() + path.extname(file.originalname))
             }
   
})

var upload=multer({storage:storage})
module.exports=upload   
*/
/**
 * 
 *  <img
                                       
                                    // src={"http://localhost:9000/images/"+ productImage}
                                    src={`${serverURL}/images/${productImage}`}
                                    alt="Product Preview"
                                    style={imgStyle}
                                />
 */