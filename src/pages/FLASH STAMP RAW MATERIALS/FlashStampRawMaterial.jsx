import React, { useEffect } from 'react'
import Pic1 from '../images/FLASH STAMP RAW MATERIALS/HTB1FO5.iaSWBuNjSsrbq6y0mVXac.avif'
import Pic2 from '../images/FLASH STAMP RAW MATERIALS/dura-flash-foam.png'
import Pic3 from '../images/FLASH STAMP RAW MATERIALS/round-flash-foam.jpg'
import Pic4 from '../images/FLASH STAMP RAW MATERIALS/round-flash-foam-500x500.webp'
import Pic5 from '../images/FLASH STAMP RAW MATERIALS/i1.jpg'
import Pic6 from '../images/FLASH STAMP RAW MATERIALS/i2.jpg'
import Pic7 from '../images/FLASH STAMP RAW MATERIALS/i3.jpg'
import Pic8 from '../images/FLASH STAMP RAW MATERIALS/round-flash-foam.jpg'
import Pic9 from '../images/FLASH STAMP RAW MATERIALS/round-flash-foam-500x500.webp'


import { useNavigate } from 'react-router-dom';
import PageHeader from '../../Component/PageHeader/PageHeader';

export default function FlashStampRawMaterial() {

    
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

    const data = [
        {id: 1, title : "Material 1 ", description : "FLASH FOAM 3MM (450 X178 MM)" , image: Pic1  },
        {id: 2, title : "Material 2 ", description : "FLASH FOAM 3MM (450 X178 MM)" , image: Pic2  },
        {id: 3, title : "Material 3 ", description : "FLASH FOAM 3MM (450 X178 MM)" , image: Pic3  },
        {id: 4, title : "Material 4 ", description : "FLASH FOAM 3MM (450 X178 MM)" , image: Pic4  },
        {id: 5, title : "Material 5 ", description : "FLASH INK (PRE INK) RED" , image: Pic5  },
        {id: 6, title : "Material 6 ", description : "FLASH INK (PRE INK) BLACK" , image: Pic6  },
        {id: 7, title : "Material 7 ", description : "FLASH INK (PRE INK) BLUE" , image: Pic7  },
        {id: 8, title : "Material 8 ", description : "FLASH FOAM 3MM (450 X178 MM)" , image: Pic8  },
        {id: 9, title : "Material 9 ", description : "FLASH FOAM 3MM (450 X178 MM)" , image: Pic9  },
    ] ;

const navigate = useNavigate();
 
const handleContact = ()=>{
    navigate("/contactus");
}

  return (
    <>

   <PageHeader  topheading="Flash Stamp Raw Materials" title="flashstamprawmaterial" />

    <div className="container">
        <div className="cards-container">
            {
            data.map((item)=>(
                <div key={item.id} className="card">
                    <img src={item.image} alt={item.title} className='card-image' />
                   <div className="card-content">
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
