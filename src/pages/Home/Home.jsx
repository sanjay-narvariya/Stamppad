import React from 'react'
import HeroSection from '../../Component/HeroSection/HeroSection'
import Products from '../../Component/Product/Products'
import Testimonial from '../../Component/Testimonial/Testimonial'
import AboutUs from '../../Component/AboutUs/AboutUs'
// import ContactUs from '../../Component/ContactUs/ContactUs'

export default function Home() {
  return (
    <>
    <div>
     <HeroSection/>
      <AboutUs/> 
      <Products/>
      {/* <ContactUs/> */}
      <Testimonial/>
      </div>

    </>
  )
}
