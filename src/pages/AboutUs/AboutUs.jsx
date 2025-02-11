import React, { useEffect } from 'react'
import PageHeader from '../../Component/PageHeader/PageHeader'
// import AboutComp from "../../Component/AboutUs/AboutUs"
const AboutUs = () => {

  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <PageHeader topheading="About-us" title="about-us" />
      {/* <AboutComp /> */}


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


      <div className="container sec1 ">
                <div>
                    <h1 className="text-center bg-secondary p-2 text-light">About Us </h1> <hr />
                    <p className='fs-4 ps-4 '>The Sprit of Innovation</p>
                </div>
                <div className='row '>
                    <div className="col-md-2 p-3 logic ">
                        <img src="./images/global icon.jpg" height={150} alt="" />
                    </div>
                    <div className="col-md-10 p-3">
                        <p> <b> Global Player  :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure saepe pariatur molestiae quisquam non quo sit dignissimos nisi. Dolore modi facere architecto. Voluptatibus reiciendis iste asperiores laborum obcaecati fugit maiores delectus repudiandae impedit rem saepe tempora nesciunt facilis nobis nisi ad cupiditate laboriosam distinctio blanditiis, neque, dolore architecto. Facere eum, laboriosam in, quia exercitationem tempora eius esse neque quaerat magnam commodi placeat suscipit, dignissimos aliquid temporibus! Vel, ratione qui. Soluta, harum incidunt eligendi saepe explicabo delectus vel cum dolorem totam corrupti excepturi cumque blanditiis! Qui blanditiis impedit reiciendis nulla cum asperiores velit quos natus, doloribus, in optio. Ipsam, consequatur!</p>
                    </div>

                    <hr />
                   
                    <div className="col-md-10 p-3">
                        <p> <b>Innovation & Design  :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure saepe pariatur molestiae quisquam non quo sit dignissimos nisi. Dolore modi facere architecto. Voluptatibus reiciendis iste asperiores laborum obcaecati fugit maiores delectus repudiandae impedit rem saepe tempora nesciunt facilis nobis nisi ad cupiditate laboriosam distinctio blanditiis, neque, dolore architecto. Facere eum, laboriosam in, quia exercitationem tempora eius esse neque quaerat magnam commodi placeat suscipit, dignissimos aliquid temporibus! Vel, ratione qui. Soluta, harum incidunt eligendi saepe explicabo delectus vel cum dolorem totam corrupti excepturi cumque blanditiis! Qui blanditiis impedit reiciendis nulla cum asperiores velit quos natus, doloribus, in optio. Ipsam, consequatur!</p>

                    </div>
                    <div className="col-md-2 p-3 logic">
                        <img src="./images/innovation-img.jpg" height={150} alt="" />
                    </div>
                    <hr />

                    <div className="col-md-2 p-3 logic">
                        <img src="./images/certified.jpg" height={150} alt="" />
                    </div>
                    <div className="col-md-10 p-3">
                        <p> <b>Quality & environmental management :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure saepe pariatur molestiae quisquam non quo sit dignissimos nisi. Dolore modi facere architecto. Voluptatibus reiciendis iste asperiores laborum obcaecati fugit maiores delectus repudiandae impedit rem saepe tempora nesciunt facilis nobis nisi ad cupiditate laboriosam distinctio blanditiis, neque, dolore architecto. Facere eum, laboriosam in, quia exercitationem tempora eius esse neque quaerat magnam commodi placeat suscipit, dignissimos aliquid temporibus! Vel, ratione qui. Soluta, harum incidunt eligendi saepe explicabo delectus vel cum dolorem totam corrupti excepturi cumque blanditiis! Qui blanditiis impedit reiciendis nulla cum asperiores velit quos natus, doloribus, in optio. Ipsam, consequatur!</p>
                    </div>
                    <hr />

                    
                    <div className="col-md-10 p-3">
                        <p> <b>High tech Production :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure saepe pariatur molestiae quisquam non quo sit dignissimos nisi. Dolore modi facere architecto. Voluptatibus reiciendis iste asperiores laborum obcaecati fugit maiores delectus repudiandae impedit rem saepe tempora nesciunt facilis nobis nisi ad cupiditate laboriosam distinctio blanditiis, neque, dolore architecto. Facere eum, laboriosam in, quia exercitationem tempora eius esse neque quaerat magnam commodi placeat suscipit, dignissimos aliquid temporibus! Vel, ratione qui. Soluta, harum incidunt eligendi saepe explicabo delectus vel cum dolorem totam corrupti excepturi cumque blanditiis! Qui blanditiis impedit reiciendis nulla cum asperiores velit quos natus, doloribus, in optio. Ipsam, consequatur!</p>
                    </div>
                    <div className="col-md-2 p-3 logic">
                        <img src="./images/hightech2.jpg" height={150} alt="" />
                    </div>
                    <hr />
                    <div className="col-md-2 p-3 logic">
                        <img src="./images/making-solution.jpg" height={150} alt="" />
                    </div>
                    <div className="col-md-10 p-3">
                        <p> <b>Making Solution :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure saepe pariatur molestiae quisquam non quo sit dignissimos nisi. Dolore modi facere architecto. Voluptatibus reiciendis iste asperiores laborum obcaecati fugit maiores delectus repudiandae impedit rem saepe tempora nesciunt facilis nobis nisi ad cupiditate laboriosam distinctio blanditiis, neque, dolore architecto. Facere eum, laboriosam in, quia exercitationem tempora eius esse neque quaerat magnam commodi placeat suscipit, dignissimos aliquid temporibus! Vel, ratione qui. Soluta, harum incidunt eligendi saepe explicabo delectus vel cum dolorem totam corrupti excepturi cumque blanditiis! Qui blanditiis impedit reiciendis nulla cum asperiores velit quos natus, doloribus, in optio. Ipsam, consequatur!</p>
                    </div>



                </div>

            </div>

     

      
    </div>
  )
}

export default AboutUs
