import React, { useEffect, useState } from 'react'
import './selfinkstamp.css'
import Product1 from '../images/selfinkstamp/b1.png'
import Product2 from '../images/selfinkstamp/bg-remove3.png'
import Product3 from '../images/selfinkstamp/bg-remover.png'
import Product5 from '../images/selfinkstamp/bg-remover3.png'
import Product6 from '../images/selfinkstamp/n3.png'
import Product7 from '../images/selfinkstamp/n4.jpg'
import Product8 from '../images/selfinkstamp/n5.jpg'
import Product9 from '../images/selfinkstamp/n6.jpg'
import Product10 from '../images/selfinkstamp/o1.jpg'
import Product11 from '../images/selfinkstamp/o12.png'
import Product12 from '../images/selfinkstamp/o13.png'
import Product13 from '../images/selfinkstamp/o14.png'
import Product14 from '../images/selfinkstamp/o16.jpg'
import Product15 from '../images/selfinkstamp/o17.png'
import Product16 from '../images/selfinkstamp/o18.png'
import Product17 from '../images/selfinkstamp/o19.jpg'
import Product18 from '../images/selfinkstamp/o2.jpg'
import Product19 from '../images/selfinkstamp/o3.jpg'
import Product20 from '../images/selfinkstamp/o4.jpg'
import Product21 from '../images/selfinkstamp/s1.jpg'
import Product22 from '../images/selfinkstamp/s3.jpg'
import Product23 from '../images/selfinkstamp/s6.jpg'
import Product24 from '../images/selfinkstamp/s9.jpg'


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
    { id: 11, title: "Product 11", description: "This is the fourth card.", productimage:  Product11 , midstamp: midpic1, card1img: Pic1  },
    { id: 12, title: "Product 12", description: "This is the fourth card.", productimage:  Product12 , midstamp: midpic1, card1img: Pic1  },
    { id: 13, title: "Product 13", description: "This is the fourth card.", productimage:  Product13 , midstamp: midpic1, card1img: Pic1  },
    { id: 14, title: "Product 14", description: "This is the fourth card.", productimage:  Product14 , midstamp: midpic1, card1img: Pic1  },
    { id: 15, title: "Product 15", description: "This is the fourth card.", productimage:  Product15 , midstamp: midpic1, card1img: Pic1  },
    { id: 16, title: "Product 16", description: "This is the fourth card.", productimage:  Product16 , midstamp: midpic1, card1img: Pic1  },
    { id: 17, title: "Product 17", description: "This is the fourth card.", productimage:  Product17 , midstamp: midpic1, card1img: Pic1  },
    { id: 18, title: "Product 18", description: "This is the fourth card.", productimage:  Product18 , midstamp: midpic1, card1img: Pic1  },
    { id: 19, title: "Product 19", description: "This is the fourth card.", productimage:  Product19 , midstamp: midpic1, card1img: Pic1  },
    { id: 20, title: "Product 20", description: "This is the fourth card.", productimage:  Product20  , midstamp: midpic1, card1img: Pic1 },
    { id: 21, title: "Product 21", description: "This is the fourth card.", productimage:  Product21 , midstamp: midpic1, card1img: Pic1  },
    { id: 22, title: "Product 22", description: "This is the fourth card.", productimage:  Product22 , midstamp: midpic1, card1img: Pic1  },
    { id: 23, title: "Product 23", description: "This is the fourth card.", productimage:  Product23 , midstamp: midpic1, card1img: Pic1  },
    { id: 24, title: "Product 24", description: "This is the fourth card.", productimage:  Product24 , midstamp: midpic1, card1img: Pic1  },
  ];

  const navigate = useNavigate();

    const handleContact = () => {
        navigate("/contactus"); // Navigate using a route, NOT a file path
    };


  return (
    <>

<PageHeader topheading="Self Ink Stamps " title="selfinkstamp"/> 
       
       
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
                <button className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#productModal"  onClick={() => handleShow(item)} >Know More</button>
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
          <div className="modal-content modal-bg">
            <div className="modal-header modal-header1">
              <h5 className="modal-title" id="productModalLabel">Enquiry Form </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  {/* <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" /> */}
                  
                  <form onSubmit={handleSubmit} >
                  <div className="form-floating mb-2 ">
                      <input type="text" className="form-control  popupform" id="floatingInput" placeholder="Full Name" />
                      <label for="floatingInput">Name</label>
                    </div>


                    <div className="form-floating mb-2">
                      <input type="email" className="form-control  popupform" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input type="phone" className="form-control  popupform" id="floatingPassword" placeholder="Phone" />
                      <label for="floatingPassword">Phone Number</label>
                     </div>
                    <div className="form-floating mb-2">
                        <textarea className="form-control popupform " placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
                     <div className='d-flex justify-content-between'>
                     <button type="button" class="btn btn-primary">Submit</button>
                     <button type="button" className="btn btn-primary " data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                     </div>
                  {/* <div className="modal-footer">
                  </div> */}
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
          </div>
        </div>
      </div>



    </>
  )
}












// import React from 'react'
// import Pic1 from '../images/selfinkstamp/b1.png'
// import Pic2 from '../images/selfinkstamp/bg-remove3.png'
// import Pic3 from '../images/selfinkstamp/bg-remover.png'
// // import Pic4 from '../images/selfinkstamp/bg-remover1.png'
// import Pic5 from '../images/selfinkstamp/bg-remover3.png'
// import Pic6 from '../images/selfinkstamp/n3.png'
// import Pic7 from '../images/selfinkstamp/n4.jpg'
// import Pic8 from '../images/selfinkstamp/n5.jpg'
// import Pic9 from '../images/selfinkstamp/n6.jpg'
// import Pic10 from '../images/selfinkstamp/o1.jpg'
// import Pic11 from '../images/selfinkstamp/o12.png'
// import Pic12 from '../images/selfinkstamp/o13.png'
// import Pic13 from '../images/selfinkstamp/o14.png'
// import Pic14 from '../images/selfinkstamp/o16.jpg'
// import Pic15 from '../images/selfinkstamp/o17.png'
// import Pic16 from '../images/selfinkstamp/o18.png'
// import Pic17 from '../images/selfinkstamp/o19.jpg'
// import Pic18 from '../images/selfinkstamp/o2.jpg'
// import Pic19 from '../images/selfinkstamp/o3.jpg'
// import Pic20 from '../images/selfinkstamp/o4.jpg'
// import Pic21 from '../images/selfinkstamp/s1.jpg'
// import Pic22 from '../images/selfinkstamp/s3.jpg'
// import Pic23 from '../images/selfinkstamp/s6.jpg'
// import Pic24 from '../images/selfinkstamp/s9.jpg'

// import PageHeader from '../../Component/PageHeader/PageHeader'
// import { useNavigate } from 'react-router-dom'

// export default function SelfInkStamp() {

  
//   const data = [
//     { id: 1, title: "Machine 1", description: "This is the first card.", productimage: Pic1 },
//     { id: 2, title: "Machine 2", description: "This is the second card.", productimage:  Pic2 },
//     { id: 3, title: "Machine 3", description: "This is the third card.", productimage:  Pic3 },
//     { id: 4, title: "Machine 4", description: "This is the fourth card.", productimage:  Pic7 },
//     { id: 5, title: "Machine 5", description: "This is the fourth card.", productimage:  Pic5 },
//     { id: 6, title: "Machine 6", description: "This is the fourth card.", productimage:  Pic6 },
//     { id: 7, title: "Machine 7", description: "This is the fourth card.", productimage:  Pic7 },
//     { id: 8, title: "Machine 8", description: "This is the fourth card.", productimage:  Pic8 },
//     { id: 9, title: "Machine 9", description: "This is the fourth card.", productimage:  Pic9 },
//     { id: 10, title: "Machine 10", description: "This is the fourth card.", productimage:  Pic10 },
//     { id: 11, title: "Machine 11", description: "This is the fourth card.", productimage:  Pic11 },
//     { id: 12, title: "Machine 12", description: "This is the fourth card.", productimage:  Pic12 },
//     { id: 13, title: "Machine 13", description: "This is the fourth card.", productimage:  Pic13 },
//     { id: 14, title: "Machine 14", description: "This is the fourth card.", productimage:  Pic14 },
//     { id: 15, title: "Machine 15", description: "This is the fourth card.", productimage:  Pic15 },
//     { id: 16, title: "Machine 16", description: "This is the fourth card.", productimage:  Pic16 },
//     { id: 17, title: "Machine 17", description: "This is the fourth card.", productimage:  Pic17 },
//     { id: 18, title: "Machine 18", description: "This is the fourth card.", productimage:  Pic18 },
//     { id: 19, title: "Machine 19", description: "This is the fourth card.", productimage:  Pic19 },
//     { id: 20, title: "Machine 20", description: "This is the fourth card.", productimage:  Pic20 },
//     { id: 21, title: "Machine 21", description: "This is the fourth card.", productimage:  Pic21 },
//     { id: 22, title: "Machine 22", description: "This is the fourth card.", productimage:  Pic22 },
//     { id: 23, title: "Machine 23", description: "This is the fourth card.", productimage:  Pic23 },
//     { id: 24, title: "Machine 24", description: "This is the fourth card.", productimage:  Pic24 },
//   ];

//   const navigate = useNavigate();

//     const handleContact = () => {
//         navigate("/contactus"); // Navigate using a route, NOT a file path
//     };


//   return (
//     <>

// <PageHeader topheading="Embossing Seals " title="embossingseal"/> 
       
       
//     <div className="container">
//       <div className="cards-container">
//          {data.map((item) => (
//         <div key={item.id} className="card">
//           <img src={item.productimage} alt={item.title} className="card-productimage" />
//           <div className="card-content">
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             {/* <button className="card-button" >Details</button> */}
//             <button 
//             onClick={handleContact} 
//             className='card-button'
//         >
//         Details
//         </button>
//           </div>
//          </div>
//           ))}
//       </div>
//     </div>
//     </>
//   )
// }
