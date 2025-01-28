import React from 'react';
import "./hero.css";

const HeroSection = () => {
    return (
        <section className='hero-slider-sec'>
            <div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide herocarousel" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active" data-bs-interval="5000">
                            <div className="overlay">
                                <div className="carousel-content animate-text">
                                    <h1>Welcome to Our Website</h1>
                                    <p>Discover amazing features and opportunities.</p>
                                </div>
                            </div>
                            <img src="./images/slider2.png" className="d-block w-100 animate-image" alt="Slide 1" />
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="overlay">
                                <div className="carousel-content animate-text">
                                    <h1>Explore New Horizons</h1>
                                    <p>Join us in our journey of innovation and creativity.</p>
                                </div>
                            </div>
                            <img src="./images/slider1.png" className="d-block w-100 animate-image" alt="Slide 2" />
                        </div>

                        {/* Slide 3 */}
                        <div className="carousel-item" data-bs-interval="5000">
                            <div className="overlay">
                                <div className="carousel-content animate-text">
                                    <h1>Build Your Dreams</h1>
                                    <p>Take the first step toward achieving your goals today.</p>
                                </div>
                            </div>
                            <img src="./images/slider3.png" className="d-block w-100 animate-image" alt="Slide 3" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
