import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function IsoCertification(){

    
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


    const [showModal, setShowModal] = useState(false);
    return(
        <>
        <div className="container">
                <div className="row p-4">
                    <div className="col-md-9 ">
                        <div className='aboutcompany'>

                            <h2>D D Plastics (India) – Quality Stamps, Trusted Worldwide</h2>
                            <p>Welcome to *D D Plastics (India)*, an ISO certified company where precision meets innovation! Established in 1984, we have over four decades of expertise in crafting high-quality self-inking stamps, catering to businesses and individuals worldwide.
                            </p>
                            <p>
                                From our humble beginnings, our vision has been to deliver reliable, user-friendly stamping solutions that enhance efficiency. Today, we operate from two state-of-the-art facilities, reflecting our growth and commitment to meeting the increasing demand for our products. Steady sales growth year after year highlights the quality and trustworthiness of our offerings.
                            </p>
                            <p>
                                We specialize in customizable stamps for branding, signatures, and personalized messages, available in a variety of styles, sizes, and colors. Durable and user-friendly, our stamps are perfect for both professional and personal use. Our dedicated team is here to provide exceptional customer service, ensuring your experience with us is seamless and productive.
                            </p>

                            <b>
                                Sustainability is a core value at D D Plastics. We prioritize eco-friendly practices, from sourcing materials to minimizing waste, contributing to a better future while delivering premium products.

                                Thank you for being part of our journey. Whether you’re a small business, large corporation, or individual, we’re here to provide the best stamping solutions. Let’s stamp out the ordinary together!
                            </b>

                       <div>
                             <Link to={"/about-us"}>   <button className='btn btn-primary'>Read More</button></Link>    
                           </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="iso">
                            <img
                                src="./images/products/iso.png"
                                alt="ISO Product"
                                onClick={() => setShowModal(true)}
                                style={{ cursor: 'pointer' }}
                            />
                            <p>Click On certificate</p>
                        </div>
                    </div>

                    {showModal && (
                        <div className="modal show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Modal Heading</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            onClick={() => setShowModal(false)}
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <img
                                            src="./images/products/iso.png"
                                            alt="ISO Product Enlarged"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-secondary"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

        
        
        </>
    )
}