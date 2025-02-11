import React, { useEffect, useState } from 'react'
// import './selfinkstamp.css'
import Product1 from '../images/penstemp/PEN 6.jpg'
import Product2 from  '../images/penstemp/PEN STAMP 2.avif'
import Product3 from  '../images/penstemp/PEN STAMP 3.avif'
import Product5 from  '../images/penstemp/PEN STAMP 4.avif'
import Product6 from  '../images/penstemp/PEN STAMP 5.jpg'
import Product7 from  '../images/penstemp/PEN STAMP 7.jpg'
import Product8 from  '../images/penstemp/PEN STAMP 8.jpeg'
import Product9 from  '../images/penstemp/PEN STAMP 9.avif'
import Product10 from  '../images/penstemp/PEN STAMP.jpg'


import Pic1 from '../images/a1.jpg'
import midpic1 from '../images/midstamp/square-stamp3.jpg'
import midpic2 from '../images/midstamp/circular-stamp.webp'
import midpic3 from '../images/midstamp/circular-stamp1.jpg'
import midpic4 from '../images/midstamp/circular-stamp.webp'
import midpic5 from '../images/midstamp/square-stamp1.webp'
import midpic6 from '../images/midstamp/stamp1.jpg'



import PageHeader from '../../Component/PageHeader/PageHeader'
import { useNavigate } from 'react-router-dom'

export default function SelfInkStamp() {

  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
   
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleShow = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    handleClose();
  };

  
  const data = [
    { id: 1, title: "Product 1", description: "This is the first card.", productimage: Product1 , midstamp: midpic1, card1img: Pic1   },
    { id: 2, title: "Product 2", description: "This is the second card.", productimage:  Product2 , midstamp: midpic2, card1img: Pic1  },
    { id: 3, title: "Product 3", description: "This is the third card.", productimage:  Product3 , midstamp: midpic3, card1img: Pic1   },
    { id: 4, title: "Product 4", description: "This is the fourth card.", productimage:  Product7 , midstamp: midpic4, card1img: Pic1   },
    { id: 5, title: "Product 5", description: "This is the fourth card.", productimage:  Product5 , midstamp: midpic5, card1img: Pic1   },
    { id: 6, title: "Product 6", description: "This is the fourth card.", productimage:  Product6 , midstamp: midpic6, card1img: Pic1   },
    { id: 7, title: "Product 7", description: "This is the fourth card.", productimage:  Product7 , midstamp: midpic1, card1img: Pic1   },
    { id: 8, title: "Product 8", description: "This is the fourth card.", productimage:  Product8 , midstamp: midpic1, card1img: Pic1   },
    { id: 9, title: "Product 9", description: "This is the fourth card.", productimage:  Product9 , midstamp: midpic1, card1img: Pic1   },
    { id: 10, title: "Product 10", description: "This is the fourth card.", productimage:  Product10 , midstamp: midpic1, card1img: Pic1  },
  ];

  const navigate = useNavigate();

    const handleContact = () => {
        navigate("/contactus"); // Navigate using a route, NOT a file path
    };


  return (
    <>

<PageHeader topheading="Pen Stamp " title="penstamp"/> 
    <div className="container">
      <div className="cards-container">
      <div className="container">
      {
          data.map((item)=>(
            <div key={item.id} >
        <div className="row row-shadow">
         <div className="col-md-2 col-12">
            <h3 className="pt-3 text-center">{item.title}</h3>
            <div  className='inkpic'>
              <img src={item.productimage} className='ink-productimage' alt={item.title} />
            </div>
          </div>
          <div className="col-md-6 col-12">
              <h3 className="pt-3 text-center">Stamps</h3>
            <div className="midStamp">
              <img src={item.midstamp} alt="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="container">
              <h3 className="pt-3 text-center">Details</h3>
              <div className="card">
                <div className="card-header bg-danger text-white">
                {item.title}
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={item.card1img} height={40} alt="Size of Imprint" />
                        </div>
                        <div className="p-1">
                          size of imprint
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={item.card1img} height={40} alt="Packaging" />
                        </div>
                        <div>
                          packaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={item.card1img} height={40} alt="Colour of Handle" />
                        </div>
                        <div>   
                          <span className="badge bg-dark me-1">Black</span>
                          <span className="badge bg-danger me-1">Red</span>
                          <span className="badge bg-primary">Blue</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={item.card1img} height={40} alt="Spare Pad" />
                        </div>
                        <div>
                          spare pad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={item.card1img} height={40} alt="Recommended Number of Lines" />
                        </div>
                        <div>

                          recommended number of lines
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={item.card1img} height={40} alt="Optional Cover" />
                        </div>
                        <div>
                          optional: cover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary"   data-bs-toggle="modal" data-bs-target="#productModal"  onClick={() => handleShow(item)}  >Know More</button>
              </div>
            </div>

          </div>
  
         </div>



        </div>
         ))
        }
  
      </div>
      </div>
    </div>



    {/* Modal      */}
    <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content stylishform text-center">
            <div className="modal-header">
            <h5 className="modal-title " id="productModalLabel">Enquiry Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  {/* <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" /> */}
                  <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-2">
                      <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" />
                      <label for="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-2">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input type="phone" className="form-control" id="floatingPassword" placeholder="Phone" />
                      <label for="floatingPassword">Phone Number</label>
                     </div>
                    <div className="form-floating mb-2">
                        <textarea className="form-control" placeholder="Leave a Message here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>

                  </form>





                  {/* <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" required className="form-input form-control " />
                    <input type="Phone" placeholder="Phone Number" required className="form-input form-control  " />
                    <input type="email" placeholder="Your Email" required className="form-input form-control" />
                   <textarea rows="5" cols="10">   Whats your Quary..........</textarea>
                    <button type="submit" className="btn btn-success">Submit</button> 
                  </form> */}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary  " data-bs-dismiss="modal" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}










// import React from 'react'
// import "./penstamp.css"
// import pic1 from '../images/a1.jpg';
// import pic2 from '../images/a1.jpg';
// import pic3 from '../images/a1.jpg';
// import pic4 from '../images/penstemp/PEN 6.jpg'
// import pic5 from '../images/penstemp/PEN STAMP 2.avif'
// import pic6 from '../images/penstemp/PEN STAMP 3.avif'
// import pic7 from '../images/penstemp/PEN STAMP 4.avif'
// import PageHeader from '../../Component/PageHeader/PageHeader'


// export default function PenStamp() {
//   return (
//     <>
//  <PageHeader topheading="Pen Stamps" title="penstamp" />
    
// <div className="container">
//         <div className="row">
//           <div className="col-md-2 col-12">
//             <h3 className="pt-4 text-center">Products</h3>
//             <div className='inkpic'>
//               <img src={pic4} className='ink-image' alt="" />
//             </div>
//           </div>
//           <div className="col-md-6 col-12">
//             <div className="midStamp">
//               <h3 className="pt-3 text-center">Stamps</h3>
//               <img src="/images/redmohar.jpg" alt="" />
//             </div>
//           </div>
//           <div className="col-md-4 col-12">
//             <div className="container">
//               <h3 className="pt-3 text-center">Details</h3>
//               <div className="card">
//                 <div className="card-header bg-danger text-white">
//                   Printer C 10
//                 </div>
//                 <div className="card-body">
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Size of Imprint" />
//                         </div>
//                         <div className="p-1">
//                           size of imprint
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Packaging" />
//                         </div>
//                         <div>
//                           packaging
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic2} height={40} alt="Colour of Handle" />
//                         </div>
//                         <div>

//                           <span className="badge bg-dark me-1">Black</span>
//                           <span className="badge bg-danger me-1">Red</span>
//                           <span className="badge bg-primary">Blue</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Spare Pad" />
//                         </div>
//                         <div>
//                           spare pad
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Recommended Number of Lines" />
//                         </div>
//                         <div>

//                           recommended number of lines
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Optional Cover" />
//                         </div>
//                         <div>
//                           optional: cover
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className="container ">
//         <div className="row">
//           <div className="col-md-2 col-12">
//             <div className='inkpic'>
//               <img src={pic5} alt="" />
//             </div>
//           </div>
//           <div className="col-md-6 col-12 ">
//             <div className="midStamp ">
//               <img src="/images/stamp.jpg" alt="" />
//             </div>
//           </div>
//           <div className="col-md-4 col-12">
//             <div className="container">
//               <div className="card">
//                 <div className="card-header bg-danger text-white">
//                   Printer C 10
//                 </div>
//                 <div className="card-body">
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Size of Imprint" />
//                         </div>
//                         <div className="p-1">
//                           size of imprint
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Packaging" />
//                         </div>
//                         <div>
//                           packaging
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic2} height={40} alt="Colour of Handle" />
//                         </div>
//                         <div>

//                           <span className="badge bg-dark me-1">Black</span>
//                           <span className="badge bg-danger me-1">Red</span>
//                           <span className="badge bg-primary">Blue</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Spare Pad" />
//                         </div>
//                         <div>

//                           spare pad
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Recommended Number of Lines" />
//                         </div>
//                         <div>

//                           recommended number of lines
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Optional Cover" />
//                         </div>
//                         <div>
//                           optional: cover
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>


//       <div className="container ">
//         <div className="row">
//           <div className="col-md-2 col-12">
//             <div className='inkpic'>
//               <img src={pic6} height={270} width={210} alt="" />
//             </div>
//           </div>
//           <div className="col-md-6 col-12">
//             <div className="midStamp">
//               <img src="/images/bluemohar.jpg" alt="" />
//             </div>
//           </div>
//           <div className="col-md-4 col-12">
//             <div className="container">
//               <div className="card">
//                 <div className="card-header bg-danger text-white">
//                   Printer C 10
//                 </div>
//                 <div className="card-body">
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Size of Imprint" />
//                         </div>
//                         <div className="p-1">
//                           size of imprint
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Packaging" />
//                         </div>
//                         <div>
//                           packaging
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic2} height={40} alt="Colour of Handle" />
//                         </div>
//                         <div>

//                           <span className="badge bg-dark me-1">Black</span>
//                           <span className="badge bg-danger me-1">Red</span>
//                           <span className="badge bg-primary">Blue</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Spare Pad" />
//                         </div>
//                         <div>

//                           spare pad
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Recommended Number of Lines" />
//                         </div>
//                         <div>

//                           recommended number of lines
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Optional Cover" />
//                         </div>
//                         <div>
//                           optional: cover
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

      
//       <div className="container ">
//         <div className="row">
//           <div className="col-md-2 col-12">
//             <div className='inkpic'>
//               <img src={pic7} height={270} width={210} alt="" />
//             </div>
//           </div>
//           <div className="col-md-6 col-12">
//             <div className="midStamp">
//               <img src="/images/bluemohar.jpg" alt="" />
//             </div>
//           </div>
//           <div className="col-md-4 col-12">
//             <div className="container">
//               <div className="card">
//                 <div className="card-header bg-danger text-white">
//                   Printer C 10
//                 </div>
//                 <div className="card-body">
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Size of Imprint" />
//                         </div>
//                         <div className="p-1">
//                           size of imprint
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Packaging" />
//                         </div>
//                         <div>
//                           packaging
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic2} height={40} alt="Colour of Handle" />
//                         </div>
//                         <div>

//                           <span className="badge bg-dark me-1">Black</span>
//                           <span className="badge bg-danger me-1">Red</span>
//                           <span className="badge bg-primary">Blue</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Spare Pad" />
//                         </div>
//                         <div>

//                           spare pad
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Recommended Number of Lines" />
//                         </div>
//                         <div>

//                           recommended number of lines
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-md-6 col-12">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Optional Cover" />
//                         </div>
//                         <div>
//                           optional: cover
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
