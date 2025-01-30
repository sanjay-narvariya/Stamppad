import React, { useState } from "react";
import "./products.css";
import pic1 from "../../images/product1.webp"
import pic2 from "../../images/product2.webp"
import pic3 from "../../images/product3.webp"


const products = [
  {
    id: 1,
    name: "Old products",
    image: "/images/products/o1.jpg", 
  },
  {
    id: 2,
    name: "All New Printer Series",
    image: "/images/products/n1.jpg",
  },
  {
    id: 3,
    name: "Stamp Pad",
    image: "/images/products/sp1.jpg",
  },
  {
    id: 4,
    name: "INKS",
    image: "/images/products/i1.jpg",
  },
  // {
  //   id: 5,
  //   name: "Twin Twisted Silk Wires",
  //   image: "/images/products/n3.png",
  // },
  // {
  //   id: 6,
  //   name: "Telecommunication Cables",
  //   image: "/images/products/o6.jpg",
  // },
  // {
  //   id: 7,
  //   name: "CCTV Cables",
  //   image: "/images/products/o7.jpg",
  // },
  // {
  //   id: 8,
  //   name: "Single & Multi-core Flexible Cables",
  //   image: "/images/products/o8.png",
  // },
];

const carouselItems = [
  {
    id: 1,
    title: "Transparent Speaker Cables",
    image: pic1, 
  },
  {
    id: 2,
    title: "Jelly Filled Co-axial Cables",
    image: pic2, 
  },
  {
    id: 3,
    title: "CCTV Cables",
    image: pic3, 
  },
];

const Products = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel navigation handlers
  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <>
      <section className="product-section">
        <div className="container">
          <div className="row">
            <div className="products-section  col-md-12">
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
           

            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default Products;




