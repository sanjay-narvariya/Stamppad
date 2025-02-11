import React, { useEffect } from 'react'
import ContactUs from '../../Component/ContactUs/ContactUs'
import PageHeader from '../../Component/PageHeader/PageHeader';




const Contactus = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  return (
    <>
      <section>
        <div>
          <PageHeader topheading="ContactUs" title="ContactUs" />
        </div>




        <ContactUs />
      </section>
    </>
  )
}

export default Contactus;
