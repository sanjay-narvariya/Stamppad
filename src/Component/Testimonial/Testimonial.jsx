import React from "react";
import Slider from "react-slick"; // Ensure this is imported
import "./testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow Component
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: "block", left: "-25px", zIndex: "1" }}
            onClick={onClick}
        />
    );
};

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: "block", right: "-25px", zIndex: "1" }}
            onClick={onClick}
        />
    );
};

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 2000, // Scroll every 3 seconds
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />, // Use custom arrow components
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
 
    const testimonials = [
        {
            id: 1,
            title: "Mukesh Singh",
            text: "This is an amazing service! Highly recommended for anyone.",
            image: "/images/products/testimonial.JPG",
            link: "#",
        },
        {
            id: 2,
            title: "Vishnu",
            text: "The quality of work exceeded my expectations. Fantastic!",
            image: "/images/products/testimonial1.jpg",
            link: "#",
        },
        {
            id: 3,
            title: "Gaurav Panchal",
            text: "The team was very supportive and responsive. 5 stars!",
            image: "/images/products/testimonial2.jpg",
            link: "#",
        },
        {
            id: 4,
            title: "Sagar",
            text: "I had an outstanding experience",
            image: "/images/products/testimonial4.jpg",
            link: "#",
        },
    ];

    return (
        <>

            <section className="testimonial-section">
                  <h1 className="text-center">What Our Clients Say </h1>
                <div className="container">
                    <div className="slider-container">
                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="testimonial-card">
                                    <div className="testimonial-card-main" >
                                        <img
                                            src={testimonial.image}
                                            className="card-img-top"
                                            alt={testimonial.title}
                                        />
                                        <h5 className="card-title">{testimonial.title}</h5>
                                        <p className="card-text">{testimonial.text}</p>
                                        <i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-fill text-warning"></i><i className="bi bi-star-half text-warning"></i>

                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonial;
