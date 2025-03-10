import React, { useEffect , useState} from 'react';
import Slider from 'react-slick';
import { serverURL, getData, postData } from '../../services/FetchNodeAdminServices';
import './hero.css';

const HeroSection = () => {
 
    const [heroData, setHeroData]=useState([]);
    

    const fetchHeroSection = async () => {
    
        const result = await getData('mainbanner/display_all_mainbanner');
        if (result.status) {
        //setHeroData({ bytes: result.data, fileName: `${serverURL}/images/${result.data[0].picture}` })
        setHeroData(result.data)
         } else {
        setMessage({ type: 'error', text: 'Failed to fetch Banner details!' });
         }
    }
    
    useEffect(()=>{
        fetchHeroSection();
    },[])
    
    



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

<section className="hero-slider-sec">
    <Slider {...settings} className="herocarousel">
        {/* Dynamic Slides */}
        {heroData.map((item, i) => (
            <div className="hero-sli" key={i}>
                <div className="overlay">
                    <div className="carousel-content animate-text">
                        <h1>{item.bannername}</h1>
                        {console.log('Slide Data:', item)}
                        <p>{item.message}</p>
                    </div>
                </div>
                <img
                    src={`${serverURL}/images/${item.pictures}`}
                    className="d-block w-100 animate-image"
                    alt={`Slide ${i + 1}`}
                />
            </div>
        ))}
    </Slider>
</section>

        </>
    );
};

export default HeroSection;




