import React, { useState } from 'react'
import "./aboutus.css"
import { useNavigate } from 'react-router-dom'


const AboutUs = () => {


    const navigate = useNavigate();

    const handleContact = () => {
        navigate("/isocertification");
    }

    // const [showModal, setShowModal] = useState(false);

    return (
        <>
        
            <section className='about-sec'>
                <div className="container sec2">
                    <div className="row">
                        <div className="col-md-3 col-6 ">
                            <div className="item1">
                                <img src="./images/affordable price.webp" height={50} alt="" />
                                <h4>Affordable Price </h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="item1">
                                <img src="./images/Availabilty.webp" height={50} alt="" />
                                <h4>100 % Guarantee </h4>

                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="item1">
                                <img src="./images/Award Wining.webp" height={50} alt="" />
                                <h4>24/7 Availabilty </h4>
                            </div>

                        </div>
                        <div className="col-md-3 col-6">
                            <div className="item1">
                                <img src="./images/guarantee.webp" height={50} alt="" />
                                <h4>Award Winning </h4>
                            </div>

                        </div>
                    </div>
                </div>

            </section>


            {/* 
            <div className="container">
                <div className="row">
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
                                <button className='btn btn-primary'>Read More</button>
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
 */}

            <section >
                <div className="container sec3">
                    <div className="row">
                        <div className="col-md-6 ">
                            <div className='aboutimg'>
                                <div className='banner2'>
                                    <img src="./images/products/bg-remover2.png" alt="" />
                                </div>
                                <div className="banner1">
                                    <img src="./images/products/bg-remover1.png" alt="" />
                                </div>
                                <div className="banner3">
                                    <img src="./images/products/bg-remove3.png" alt="" />
                                </div>
                                <div className="contact-box1">
                                    <h2>26 + Years</h2>
                                    <h2>Experience </h2>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6 ">
                            <div className='about-content-sec'>
                                <h3 className='text-start section2'><b>ABOUT US</b> </h3>
                                <h2 >Produce Your own clean save the environment</h2>
                                <p className='font'>   We specialize in customizable stamps for branding, signatures, and personalized messages, available in a variety of styles, sizes, and colors. Durable and user-friendly, our stamps are perfect for both professional and personal use. Our dedicated team is here to provide exceptional customer service, ensuring your experience with us is seamless and productive.    </p>

                                <div className="about-flex">

                                    <div className=" best-quality">
                                        <img src="./images/best_quality.webp" alt="" />
                                        <h4> Best Quality</h4>
                                    </div>
                                    <div className=" best-quality ">
                                        <img src="./images/best_quality.webp " alt="" />
                                        <h4>Warranty</h4>
                                    </div>


                                </div>
                                <div>
                                    <button
                                        onClick={handleContact}
                                        className='btn btn-primary w-100'
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AboutUs;
