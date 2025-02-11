import React, { useState } from "react";
import Pic1 from '../../pages/images/selfinkstamp/b1.png'
import Pic2 from '../../pages/images/preInkstamp/o9.png'
import Pic3 from '../../pages/images/penstemp/PEN STAMP 8.jpeg'
import Pic4 from '../../pages/images/selfinkdaterstamp/n2.png'
import Pic5 from '../../pages/images/automaticNumberMachine/numberingMachine1.webp'
import Pic6 from '../../pages/images/embossingSeal/embossingpic1.jpg'
import Pic7 from '../../pages/images/Machine/FLASH-NEW.jpg'
import Pic8 from '../../pages/images/Machine1/12-4-600x400-1.jpg'
import Pic9 from '../../pages/images/FLASH STAMP MACHINE ACCESSORIES/062-600x400-1.jpg'
import Pic10 from '../../pages/images/FLASH STAMP RAW MATERIALS/HTB1FO5.iaSWBuNjSsrbq6y0mVXac.avif'


import "./products.css";


const products = [
  {
    id: 1,
    name: "Self Ink Stamps",
    image: Pic1,
    url : "/selfinkstamp"
  },
  {
    id: 2,
    name: "Pre Ink Stamps",
    image: Pic2,
     url : "/preinkstamp"
  },
  {
    id: 3,
    name: "Pen Stamps",
    image: Pic3 ,
     url : "/penstamp"
  },
  {
    id: 4,
    name: "Self Ink Dater Stamp",
    image: Pic4,
     url : "/selfinkdaterstamp"
  },
  {
    id: 5,
    name: "Numbering Machine",
    image: Pic5,
     url : "/automaticnumbermachine"
  },
  {
    id: 6,
    name: "Embossing Seals",
    image: Pic6,
     url : "/embossingseal"
  },
];


const products1 = [
  {
    id: 1,
    name: "Stamp Making Machine",
    image: Pic7,
    url : "/polymerstampmakingmachine"
  },
  {
    id: 2,
    name: "Flash Machineries",
    image: Pic8,
    url : "/flashmachineries"
  },
 
];



const products2 = [
  {
    id: 1,
    name: "Polymer Stamp Raw Materials",
    image: Pic9,
    url : "/polymerstamprawmaterial"
  },
  {
    id: 2,
    name: "Flash Stamp Raw Materials",
    image: Pic10,
    url : "/flashstamprawmaterial"
  },
 
];


const Products = () => {

  return (
    <>
    <section className="product-section">
      <div className="container">
      <h2><b> RUBBER STAMP HANDLES  </b></h2>
         <div className="StampHandle">
         <div className="row">
            
            {products.map((product) =>
              <div className="col-md-3 col-6">
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  {product.description && <p>{product.description}</p>}
                  <a href={product.url} className="view-more">
                   →
                  </a>
                </div>
              </div>
            )}
            
          </div>
         </div>
      </div>
        </section>


        <section className="product-section">
      <div className="container">
      <h2><b> MACHINERIES </b></h2>
         <div className="StampHandle">
         <div className="row">
            
            {products1.map((product) =>
              <div className="col-md-3 col-6">
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  {product.description && <p>{product.description}</p>}
                  <a href={product.url} className="view-more">
                    →
                  </a>
                </div>
              </div>
            )}
            {/* <div className="products-section  col-md-12">
              <h2>
                <b>OUR CATEGORIES</b>
              </h2>
              <div className="products-grid">
                {products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                      

                    />
                    <h3>{product.name}</h3>
                    {product.description && <p>{product.description}</p>}
                    <a href="#" className="view-more">
                      →
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
         </div>
      </div>
        </section>


        <section className="product-section">
      <div className="container">
      <h2><b>RUBBAR STAMP RAW MATERIALS</b></h2>
         <div className="StampHandle">
         <div className="row">
            
            {products2.map((product) =>
              <div className="col-md-3 col-6">
                <div key={product.id} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h3>{product.name}</h3>
                  {product.description && <p>{product.description}</p>}
                  <a href={product.url} className="view-more">
                    →
                  </a>
                </div>
              </div>
            )}
         
          </div>
         </div>
      </div>
        </section>


    </>
  );
};

export default Products;




















// import React, { useState, useEffect } from "react";
// import Pic1 from '../../pages/images/selfinkstamp/b1.png'
// import Pic2 from '../../pages/images/preInkstamp/o10.jpg'
// import Pic3 from '../../pages/images/penstemp/PEN 6.jpg'
// import Pic4 from '../../pages/images/selfinkdaterstamp/n2.png'
// import Pic5 from '../../pages/images/automaticNumberMachine/numberingMachine1.webp'
// import Pic6 from '../../pages/images/embossingSeal/embossingpic1.jpg'
// import "./products.css";

// const products = [
//   { id: 1, name: "Self Ink Stamps", image: Pic1 },
//   { id: 2, name: "Pre Ink Stamps", image: Pic2 },
//   { id: 3, name: "Pen Stamps", image: Pic3 },
//   { id: 4, name: "Self Ink Dater Stamp", image: Pic4 },
//   { id: 5, name: "Automatic Numbering Machine", image: Pic5 },
//   { id: 6, name: "Embossing Seals", image: Pic6 }
// ];

// const products1 = [
//   { id : 1 , name : "Polymer Stamp Making Machine" , image:Pic1 },
//   { id : 2 , name : "Flash Stamp Machine " , image:Pic2 },
// ]

// const Products = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000); // Slide one by one every 5 seconds (slower)
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleProducts = () => {
//     return products.slice(currentIndex, currentIndex + 4).concat(
//       products.slice(0, Math.max(0, 4 - (products.length - currentIndex)))
//     );
//   };



//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products1.length);
//     }, 3000); // Slide one by one every 5 seconds (slower)
//     return () => clearInterval(interval);
//   }, []);

  
  
 

//   return (
//     <>
//     <section className="product-section">
//       <h2><b> RUBBER STAMP HANDLES  </b></h2>
//       <div className="container">
//         <div className="Section">
//         <div className="row justify-content-center">
//           {getVisibleProducts().map((product) => (
//             <div key={product.id} className="col-md-3 col-12">
//               <div className="product-card text-center productimg">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image"
//                 />
              
//                      <h3>{product.name}</h3>
//                      {product.description && <p>{product.description}</p>}
//                      <a href="#" className="view-more">
//                        →
//                     </a>

//               </div>
//             </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </section>
// {/* 
//     <section className="product-section">
//       <h2><b> Machineries </b></h2>
//       <div className="container">
//         <div className="row justify-content-center">
//           {getVisibleProducts1().map((product) => (
//             <div key={product.id} className="col-md-3 col-12">
//               <div className="product-card text-center productimg">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image"
//                 />
//                 <h3>{product.name}</h3>
                
//                      <h3>{product.name}</h3>
//                      {product.description && <p>{product.description}</p>}
//                      <a href="#" className="view-more">
//                        →
//                     </a>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section> */}

//     </>
//   );
// };

// export default Products;






// import React, { useState, useEffect } from "react";
// import Pic1 from '../../pages/images/selfinkstamp/b1.png'
// import Pic2 from '../../pages/images/preInkstamp/o10.jpg'
// import Pic3 from '../../pages/images/penstemp/PEN 6.jpg'
// import Pic4 from '../../pages/images/selfinkdaterstamp/n2.png'
// import Pic5 from '../../pages/images/automaticNumberMachine/numberingMachine1.webp'
// import Pic6 from '../../pages/images/embossingSeal/embossingpic1.jpg'
// import "./products.css";

// const products = [
//   { id: 1, name: "Self Ink Stamps", image: Pic1 },
//   { id: 2, name: "Pre Ink Stamps", image: Pic2 },
//   { id: 3, name: "Pen Stamps", image: Pic3 },
//   { id: 4, name: "Self Ink Dater Stamp", image: Pic4 },
//   { id: 5, name: "Automatic Numbering Machine", image: Pic5 },
//   { id: 6, name: "Embossing Seals", image: Pic6 }
//   // { id: 7, name: "Laser Printers", image: "/images/products/lp1.jpg" },
//   // { id: 8, name: "Office Supplies", image: "/images/products/os1.jpg" }
// ];

// const Products = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//     }, 5000); // Slide one by one every 5 seconds (slower)
//     return () => clearInterval(interval);
//   }, []);

//   const getVisibleProducts = () => {
//     return products.slice(currentIndex, currentIndex + 4).concat(
//       products.slice(0, Math.max(0, 4 - (products.length - currentIndex)))
//     );
//   };

//   return (
//     <section className="product-section">
//       <h2><b> RUBBER STAMP HANDLES  </b></h2>
//       <div className="container">
//         <div className="row justify-content-center">
//           {getVisibleProducts().map((product) => (
//             <div key={product.id} className="col-md-3 col-12">
//               <div className="product-card text-center productimg">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="product-image"
//                 />
//                 <h3>{product.name}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;












// { id: 1, name: "Self Ink Stamps", image: Pic1 },
//   { id: 2, name: "Pre Ink Stamps", image: Pic2 },
//   { id: 3, name: "Pen Stamps", image: Pic3 },
//   { id: 4, name: "Self Ink Dater Stamp", image: Pic4 },
//   { id: 5, name: "Automatic Numbering Machine", image: Pic5 },
//   { id: 6, name: "Embossing Seals", image: Pic6 }
// ];






