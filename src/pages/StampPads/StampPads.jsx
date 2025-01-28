import React from "react";
import "./stamp.css";
import pic1 from '../images/a1.jpg';
import pic2 from '../images/a1.jpg';
import pic3 from '../images/a1.jpg';


const StampPads = () => {

  return (
    <>
    <div className="topBar" >
      <h1 style={{textAlign:"center" }}>Our Stemp products</h1>
    </div>
      <div className="container  ">
        <div className="row">
          <div className="col-md-2">
            <img src="/images/products/sp1.jpg" height={270} width={210} alt="" />
          </div>
          <div className="col-md-6">
            <div className="midStamp">
             <img src="/images/stamp.jpg"  alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <div className="card">
                <div className="card-header bg-danger text-white">
                  Printer C 10
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Size of Imprint" />
                        </div>
                        <div className="p-1">
                          size of imprint
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Packaging" />
                        </div>
                        <div>
                          packaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic2} height={40} alt="Colour of Handle" />
                        </div>
                        <div>
                          
                          <span className="badge bg-dark me-1">Black</span>
                          <span className="badge bg-danger me-1">Red</span>
                          <span className="badge bg-primary">Blue</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Spare Pad" />
                        </div>
                        <div>
                          spare pad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Recommended Number of Lines" />
                        </div>
                        <div>
                         
                          recommended number of lines
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Optional Cover" />
                        </div>
                        <div>
                          optional: cover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-2">
            <img src="/images/products/sp2.jpg" height={270} width={210} alt="" />
          </div>
          <div className="col-md-6">
            <div className="midStamp">
             <img src="/images/stamp.jpg"  alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <div className="card">
                <div className="card-header bg-danger text-white">
                  Printer C 10
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Size of Imprint" />
                        </div>
                        <div className="p-1">
                          size of imprint
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Packaging" />
                        </div>
                        <div>
                          packaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic2} height={40} alt="Colour of Handle" />
                        </div>
                        <div>
                          
                          <span className="badge bg-dark me-1">Black</span>
                          <span className="badge bg-danger me-1">Red</span>
                          <span className="badge bg-primary">Blue</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Spare Pad" />
                        </div>
                        <div>
                         
                          spare pad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Recommended Number of Lines" />
                        </div>
                        <div>
                         
                          recommended number of lines
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Optional Cover" />
                        </div>
                        <div>
                          optional: cover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  );
};

export default StampPads;





































// import React from "react";
// import "./stamp.css";
// import pic1 from '../images/a1.jpg';
// import pic2 from '../images/a1.jpg';
// import pic3 from '../images/a1.jpg';


// const StampPads = () => {

//   return (
//     <>
//       <div className="container section-stemp ">
//         <div className="row">
//           <div className="col-md-2">
//             <img src="/images/products/n1.jpg" height={270} width={210} alt="" />
//           </div>
//           <div className="col-md-6">
//             <div className="midStamp">
//              <img src="/images/stamp.jpg"  alt="" />
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="container">
//               <div className="card">
//                 <div className="card-header bg-danger text-white">
//                   Printer C 10
//                 </div>
//                 <div className="card-body">
//                   <div className="row mb-3">
//                     <div className="col-6">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic1} height={40} alt="Size of Imprint" />
//                         </div>
//                         <div className="p-1">
//                           size of imprint
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-6">
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
//                     <div className="col-6">
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
//                     <div className="col-6">
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
//                     <div className="col-6">
//                       <div className="d-flex align-items-center">
//                         <div className="me-2">
//                           <img src={pic3} height={40} alt="Recommended Number of Lines" />
//                         </div>
//                         <div>
                         
//                           recommended number of lines
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-6">
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
//   );
// };

// export default StampPads;
