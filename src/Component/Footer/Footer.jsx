import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <img
            src="/images/products/Brand-icon.png"
            alt="DD Plastic Logo"
            className="footer-logo"
          />
          <h3 className="footer-title">DD Plastic</h3>
          <p className="footer-description">
            Providing premier wire and cable solutions for over 25 years.
            Committed to quality, efficiency, and customer satisfaction. Your
            trusted choice for excellence.
          </p>
          <p className="footer-contact">
            📧 <a href="mailto:ddPalastic98@gmail.com">ddPalastic98@gmail.com</a>
          </p>
          <p className="footer-contact">
            📍 I-245, Sector - 5, DSIIDC, Bawana Industrial Area, Delhi, India.
            Pin Code - 110039
          </p>
        </div>

        {/* Useful Links */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Useful Links</h4>
          <ul className="footer-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Products</h4>
          <ul className="footer-products">
            <li><Link to="/products/old-stamp">Old Stamp</Link></li>
            <li><Link to="/products/new-stamp">New Stamp</Link></li>
            <li><Link to="/products/ink-stamp">Ink Stamp</Link></li>
            <li><Link to="/products/stamp-pads">Stamp Pads</Link></li>
            <li><Link to="/products/all-stamps">All Stamps</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Social Media</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
          <div className="footer-back-to-top">
            <button
              onClick={scrollToTop}
              className="back-to-top-button"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



















// import React from "react";
// import "./footer.css";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Company Info */}
//         <div className="footer-section">
//           <img
//             src="/images/products/Brand-icon.png"
//             alt="DD Plastic"
//             className="footer-logo"
//           />
//           <h3 className="footer-title">DD Plastic</h3>
//           <p className="footer-description">
//             Providing premier wire and cable solutions for over 25 years.
//             Committed to quality, efficiency, and customer satisfaction. Your
//             trusted choice for excellence.
//           </p>
//           <p className="footer-contact">
//             📧 <span>ddPalastic98@gmail.com</span>
//           </p>
//           <p className="footer-contact">
//             📍 <span>I-245, sector -5 DSIIDC BAWANA INDUSTRIAL AREA DELHI india
//             Pin code -110039</span>
//           </p>
//         </div>

//         {/* Useful Links */}
//         <div className="footer-section">
//           <h4 className="footer-subtitle">Useful Links</h4>
//           <ul className="footer-links">
//             <li><Link to="#">Home</Link></li>
//             <li><Link to="#">About</Link></li>
//             <li><Link to="#">Products</Link></li>
//             <li><Link to="#">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Products */}
//         <div className="footer-section">
//           <h4 className="footer-subtitle">Products</h4>
//           <ul className="footer-products text-light">
//             <li><b> Old stamp</b></li>
//             <li> New stamp</li>
//             <li>Ink  stamp</li>
//             <li> Stamp Pads</li>
//             <li>All Stamps</li>
//           </ul>
//         </div>

//         {/* Instagram */}
//         <div className="footer-section">
//           <h4 className="footer-subtitle">Social Media</h4>
//           <div className="footer-social">
//          <h4> <i class="bi bi-facebook"></i> </h4>
//           <h4><i class="bi bi-instagram"></i></h4>
//          <h4> <i class="bi bi-whatsapp"></i></h4>
//           <h4><i class="bi bi-twitter"></i></h4>
//             {/* <img src="image1.jpg" alt="Cable 1" />
//             <img src="image2.jpg" alt="Cable 2" />
//             <img src="image3.jpg" alt="Cable 3" />
//             <img src="image4.jpg" alt="Cable 4" /> */}
//           </div>
//       <div className="footer-back-to-top">
//         <Link to="#top" className="back-to-top-button">↑</Link>
//       </div>
//         </div>
//       </div>

//       {/* Back to Top */}
//     </footer>
//   );
// };

// export default Footer;
