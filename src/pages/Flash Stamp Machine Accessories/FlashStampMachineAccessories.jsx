import React, { useEffect } from 'react'
import Pic1 from '../images/FLASH STAMP RAW MATERIALS/fuse.avif'
import Pic2 from '../images/FLASH STAMP RAW MATERIALS/fuse.webp'
import Pic3 from '../images/FLASH STAMP RAW MATERIALS/flashtrigger.jpg'

import { useNavigate } from 'react-router-dom';
import PageHeader from '../../Component/PageHeader/PageHeader';

export default function FlashStampMachineAccessories() {


    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);

   const data = [
    {id: 1 , title:"Product 1 " , description:"IMPORTED FLASH TRIGGER " , image: Pic1 },
    {id: 2 , title:"Product 2 " , description:"IMPORTED FLASH TRIGGER " , image: Pic2 },
    {id: 3 , title:"Product 3 " , description:"IMPORTED FLASH TRIGGER " , image: Pic3 },
    
   ];

   const navigate = useNavigate()

   const handleContact = ()=>{
       navigate("/contactus");
   }

  return (
    <>
    <PageHeader topheading="Flash Stamp Machine Accessories "  title="flashstampmachineaccessories"   />
     <div className="container">
        <div className="cards-container">
     {
        data.map((item)=>(
            <div key={item.id} className='card'>
                <img src={item.image} alt={item.title} className='card-image' />
                <div className='card-contant'>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button
                    onClick={handleContact}
                    className='card-button'
                    >
                       Details
                    </button>
                </div>
            </div>
        ))
     }


        </div>
        
        </div> 



    </>
  )
}
