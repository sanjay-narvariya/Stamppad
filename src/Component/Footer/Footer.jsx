import "./footer.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { serverURL, getData, postData } from '../../services/FetchNodeAdminServices';

const Footer = () => {

               const [phoneNo, setPhoneNo] = useState("");
               const [mailId, setMailId] = useState("");
             

  
  const getPhone = async () => {
    try {
        const result = await getData('adminlogin/phoneno');
        if (result.status) {
            setPhoneNo(result.data.phoneno || {});
            setMailId(result.data.mailid || {});
            console.log('phone no hgyugeuiufe', result.data)

        } else {
            console.error("Failed to fetch phone number:", result.message);
        }
    } catch (error) {
        console.error("Error fetching phone number:", error);
    }

}



useEffect(() => {
    getPhone();

}, [])


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
            <li><Link to="" style={{ cursor: "default" }}>Home</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>About</Link></li>
              <li><Link to="" style={{ cursor: "default" }} >Rubber Stamp Handles</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Machineries</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Machineries</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Rubber stamp raw materials</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Accessories</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Products</h4>
            <ul className="footer-products">
              <li><Link to="" style={{ cursor: "default" }}>Self Ink Stamps</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Pre Ink Stamps</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Pen Stamps</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Self Ink Dater Stamps</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Automatic numbering machine</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Embossing seal</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Flash stamp machine</Link></li>
              <li><Link to="" style={{ cursor: "default" }}>Polymer stamp raw materials</Link></li>
              <li ><Link to="" style={{ cursor: "default" }}>Flash stamp raw materials</Link></li>
            </ul>
          </div>


       </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Us</h4>
            <div className="footer-social">

              <p className="footer-contact " style={{ cursor: "default" }}>
                <i className="bi bi-envelope-at-fill fs-3"> </i> <a href="mailto:ddplasticsindia@gmail.com">{mailId}</a>
              </p>
              <p className="footer-contact">
                <i className="bi bi-geo-alt-fill fs-4"></i>  I-245, Sector - 5, DSIIDC, Bawana Industrial Area, Delhi, India.
                Pin Code - 110039
              </p>
                <p className="footer-contact "><i className="bi bi-telephone-fill fs-4"></i> Contact No :  {phoneNo}</p>
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
