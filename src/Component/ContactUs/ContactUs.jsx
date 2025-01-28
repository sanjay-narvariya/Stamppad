import React from "react";
import "./contactus.css";

const ContactUs = () => {
  return (
    <>
      <section className="container1">
        <div className="row">
          {/* Image Column */}
          <div className="col-md-6 p-0 b-0">
            <div className="column image-column">
              <img
                src="/images/slider1.png"
                alt="Wires"
                className="background-image"
              />
              <div className="contact-box">
                <p>Contact Now</p>
                <h2>9810644805</h2>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="col-md-6">
            <div className="column info-column">
              <h5>WHY CHOOSE DD PLASTIC</h5>
              <h1>Great reason for the people choose our Enterprises</h1>
              <div className="features">
                <div className="feature-box">
                  <h3>
                    <i className="bi bi-headphones text-danger"></i>
                    <p>Custom Support</p>
                  </h3>
                </div>
                <div className="feature-box">
                  <h3>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <p>Best Quality</p>
                  </h3>
                </div>
                <div className="feature-box">
                  <h3>
                    <i className="bi bi-tags text-light"></i>
                    <p>Flat Rate</p>
                  </h3>
                </div>
                <div className="feature-box">
                  <h3>
                    <span className="icon">📞</span>
                    <p>24/7 Available</p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
























// import React from "react";
// import "./contactus.css";


// const ContactUs = () => {
//   return (
//     <>
//       <section>

//         <div className="row">
//           <div className="col-md-6 p-0 b-0">
//             <div className="column image-column">
//               <img src="/images/slider1.png" alt="Wires" className="background-image" />
//               <div className="contact-box">
//                 <p>Contact Now</p>
//                 <h2>9810644805</h2>
//               </div>

//             </div>


//           </div>
//           <div className="col-md-6">
//             <div className="column info-column">
//               <h5>WHY CHOOSE DD PLASTIC </h5>
//               <h1 >Great reason for the people choose our Enterprises</h1>
//               <div className="features">
//                 <div className="feature-box ">
//                   <h3><i class="bi bi-headphones text-danger "></i><p>Custom Support</p></h3>
                  
//                 </div>
//                 <div className="feature-box ">
//                   <h3><i class="bi bi-hand-thumbs-up "></i><p>Best Quality</p></h3>
                  
//                 </div>
//                 <div className="feature-box ">
//                   <h3><i class="bi bi-tags text-light"></i> <p>Flat Rate</p></h3>
                  
//                 </div>
//                 <div className="feature-box ">
//                  <h3> <span className="icon">📞</span>  <p>24/7 Available</p></h3>
                 
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>

//       </section>



//     </>

//   );
// };

// export default ContactUs;

