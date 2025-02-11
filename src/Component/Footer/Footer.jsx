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
      <div className="container">

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
            Welcome to *D D Plastics (India)*, an ISO certified company where precision meets innovation! Established in 1984, we have over four decades of expertise in crafting high-quality self-inking stamps, catering to businesses and individuals worldwide.
            </p>

          </div>

       <div className="Links">
   {/* Useful Links */}
   <div className="footer-section">
            <h4 className="footer-subtitle">Useful Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/flashstampmachineaccessories">Accessories</Link></li>
              <li><Link to="/contactus">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Products</h4>
            <ul className="footer-products">
              <li><Link to="/selfinkstamp">Self Ink Stamps</Link></li>
              <li><Link to="/preinkstamp">Pre Ink Stamps</Link></li>
              <li><Link to="/penstamp">Pen Stamps</Link></li>
              <li><Link to="/selfinkdaterstamp">Self Ink Dater Stamps</Link></li>
            </ul>
          </div>


       </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-subtitle text-center">Contact Us</h4>
            <div className="footer-social">

              <p className="footer-contact">
                <i className="bi bi-envelope-at-fill fs-3"> </i> <a href="mailto:ddplasticsindia@gmail.com">ddplasticsindia@gmail.com</a>
              </p>
              <p className="footer-contact">
                <i className="bi bi-geo-alt-fill fs-4"></i>  I-245, Sector - 5, DSIIDC, Bawana Industrial Area, Delhi, India.
                Pin Code - 110039
              </p>
                <p className="footer-contact "><i className="bi bi-telephone-fill fs-4"></i> Contact No :  7982167578</p>
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
      </div>
    </footer>
  );
};

export default Footer;
