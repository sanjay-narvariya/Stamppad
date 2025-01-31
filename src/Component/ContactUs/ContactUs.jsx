import React from "react";
import "./contactus.css";



const ContactUs = () => {
  return (
    <>    
      <section>
        <div className="contact-container">
          <div className="contact-info">
            <div className="detailsec">
              <h2>Contact us</h2>
              <strong>Address:</strong>
              <p> <i className="bi bi-geo-alt-fill"></i>  I-245, Sector - 5, DSIIDC, Bawana Industrial Area, Delhi, India.
                Pin Code - 110039</p>
              <strong>Phone:</strong>
              <p> <i className="bi bi-telephone-fill"></i>+91 7982167578</p>
              <strong>Email:</strong>
              <p> <i className="bi bi-envelope-at-fill"></i> ddplastic@.com</p>
            </div>
          </div>
          <div className="contact-form">
            <h2>Get in touch</h2>
            <p>We will catch you as early as we receive the message</p>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Enter name" />
                <input type="email" placeholder="Enter email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Enter mobile" />
                <select>
                  <option>Select Requirement</option>
                </select>
              </div>
              <textarea placeholder="Enter your message"></textarea>
              <div className="terms">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms"> I agree to the <span>Terms & Conditions</span> of Business Name.</label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <section>

          <div className="map-container" style={{ textAlign: "center", margin: "20px 0" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748.1453241387967!2d77.07301955670123!3d28.800411299136293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da9dc40e3a7fd%3A0x7a81686c5b25cea8!2sI%2F245%2F5%2C%20DSIIDC%20Industrial%20Area%2C%20Sector%205%2C%20Bawana%2C%20New%20Delhi%2C%20Delhi%2C%20110039!5e0!3m2!1sen!2sin!4v1738312769442!5m2!1sen!2sin" title="location" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section> 


      </section>
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






















