import React from 'react';
import Slider from 'react-slick';
// import { RingLoader } from "react-spinners";
import './hero.css';

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        pauseOnHover: false,
    };

    return (
        <>


 {/* <div className="loader-overlay" id="loader">
    <div className="loader-container">
         <RingLoader /> 
    </div>
  </div> 
         
            */}

        <section className="hero-slider-sec">
            <Slider {...settings} className="herocarousel">
                {/* Slide 1 */}
                <div className="hero-sli">
                    <div className="overlay">
                        <div className="carousel-content animate-text">
                            <h1>Welcome to Our Website</h1>
                            <p>Discover amazing features and opportunities.</p>
                        </div>
                    </div>
                    <img src="./images/slider2.png" className="d-block w-100 animate-image" alt="Slide 1" />
                </div>

                {/* Slide 2 */}
                <div className="hero-sli">
                    <div className="overlay">
                        <div className="carousel-content animate-text">
                            <h1>Explore New Horizons</h1>
                            <p>Join us in our journey of innovation and creativity.</p>
                        </div>
                    </div>
                    <img src="./images/slider1.png" className="d-block w-100 animate-image" alt="Slide 2" />
                </div>

                {/* Slide 3 */}
                <div className="hero-sli">
                    <div className="overlay">
                        <div className="carousel-content animate-text">
                            <h1>Build Your Dreams</h1>
                            <p>Take the first step toward achieving your goals today.</p>
                        </div>
                    </div>
                    <img src="./images/slider3.png" className="d-block w-100 animate-image" alt="Slide 3" />
                </div>
            </Slider>
        </section>
        </>
    );
};

export default HeroSection;




