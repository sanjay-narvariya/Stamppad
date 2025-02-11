import React, { useEffect } from 'react'
import Pic1 from '../images/FLASH STAMP MACHINE ACCESSORIES/062-600x400-1.jpg'
import Pic2 from '../images/FLASH STAMP MACHINE ACCESSORIES/712eZLB6MBL._AC_SL1430_-600x420-2.jpg'
import Pic3 from '../images/FLASH STAMP MACHINE ACCESSORIES/BASE-FILM-1.jpg'
import Pic4 from '../images/FLASH STAMP MACHINE ACCESSORIES/BOARDER-TAPE-600x600-1.jpg'
import Pic5 from '../images/FLASH STAMP MACHINE ACCESSORIES/COVER-FILM-600x600-1.jpg'
import Pic6 from '../images/FLASH STAMP MACHINE ACCESSORIES/DENSITY-ENHANCER-600x900-1.jpg'
import Pic7 from '../images/FLASH STAMP MACHINE ACCESSORIES/KIVIMarkings21-6-1927-600x600-1.jpg'
import Pic8 from '../images/FLASH STAMP MACHINE ACCESSORIES/KIVIMarkings21-6-1940-600x600-1.jpg'
import Pic9 from '../images/FLASH STAMP MACHINE ACCESSORIES/KIVIMarkings21-6-199-600x600-1.jpg'
import Pic10 from '../images/FLASH STAMP MACHINE ACCESSORIES/WhatsApp-Image-2021-12-02-at-12.42.24-PM.jpeg'
import Pic11 from '../images/FLASH STAMP MACHINE ACCESSORIES/fixture-600x600-1.jpg'
import Pic12 from '../images/FLASH STAMP MACHINE ACCESSORIES/ohp-pet-sheet-transparent-2-1 (1).png'
import Pic13 from '../images/FLASH STAMP MACHINE ACCESSORIES/ohp-pet-sheet-transparent-2-1.png'
import Pic14 from '../images/FLASH STAMP MACHINE ACCESSORIES/tissue-tape-600x600-1.jpg'
import PageHeader from '../../Component/PageHeader/PageHeader';
import { useNavigate } from 'react-router-dom';

export default function PolymerStampRawMaterials() {
   
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);  

    const data = [
        { id: 1, title: "Product 1", description: "DETACK POWDER", image: Pic1 },
        { id: 2, title: "Product 2", description: "BASE FILM SMALL SIZE (250 X 350 MM)", image:  Pic2 },
        { id: 3, title: "Product 3", description: "BASE FILM FULL SIZE (500 X 700 MM)", image:  Pic3 },
        { id: 4, title: "Product 4", description: "BORDER TAPE", image:  Pic4 },
        { id: 5, title: "Product 5", description: "COVER FILM ROLL", image:  Pic5 },
        { id: 6, title: "Product 6", description: "DENSITY ENHANCER", image:  Pic6 },
        { id: 7, title: "Product 7", description: " DEVELOPER (A+B) POWDER", image:  Pic7 },
        { id: 8, title: "Product 8", description: " SOFT BRUSH", image:  Pic8 },
        { id: 9, title: "Product 9", description: " LIQUID PHOTOPOLYMER ORANGE RESINE", image:  Pic9 },
        { id: 10, title: "Product 10", description: "TLIQUID PHOTOPOLYMER CLEAR RESIN", image:  Pic10 },
        { id: 11, title: "Product 11", description: "FIXTURE POWDER", image:  Pic11 },
        { id: 12, title: "Product 12", description: "LASER PRINTING FILM (LPF) A4 SIZE", image:  Pic12 },
        { id: 13, title: "Product 13", description: "LASER PRINTING FILM (LPF) A4 SIZE", image:  Pic13 },
        { id: 14, title: "Product 14", description: "TISSUE TAPE", image:  Pic14 },
      ];
    
      const navigate = useNavigate();
    
      const handleContact = () => {
        navigate("/contactus");
      }


  return (
    <> 
<PageHeader topheading="Polymer Stamp Raw Materials" title="polymerstamprawmaterial"/> 
      
<div className="container">
  <div className="cards-container">
     {data.map((item) => (
    <div key={item.id} className="card">
      <img src={item.image} alt={item.title} className="card-image" />
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
    ))}
  </div>
</div>



    </>
  )
}
