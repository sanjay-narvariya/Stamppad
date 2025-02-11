import React, { useEffect } from 'react'
import Pic1 from '../images/Machine1/31eGJrnmsUL._AC_UL600_SR600,600_.jpg'
import Pic2 from '../images/Machine1/MACHINE1.jpg'
import Pic3 from '../images/Machine1/polymer-stamp-machines-8-tube.jpg'
import Pic4 from '../images/Machine1/stamp-making-machine-500x500.webp'
import Pic5 from '../images/Machine1/12-4-600x400-1 (1).jpg'
import Pic6 from '../images/Machine1/12-4-600x400-1.jpg'
import Pic7 from '../images/Machine1/12-8-600x400-1.jpg'
import Pic8 from '../images/Machine1/18-4-600x400-1 (1).jpg'
import Pic9 from '../images/Machine1/18-4-600x400-1.jpg'
import Pic10 from '../images/Machine1/18-8-600x400-1.jpg'


import { useNavigate } from 'react-router-dom';
import PageHeader from '../../Component/PageHeader/PageHeader'

export default function PolymerStampMakingMachine() {

  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

    const data = [
        { id: 1, title: "Machine 1", description: "POLY 18/08 MACHINE", image: Pic1 },
        { id: 2, title: "Machine 2", description: "This is the second card.", image:  Pic2 },
        { id: 3, title: "Machine 3", description: "POLY 18/08 MACHINE", image:  Pic3 },
        { id: 4, title: "Machine 4", description: "POLY 18/08 MACHINE", image:  Pic4 },
        { id: 5, title: "Machine 5", description: "POLY 12/04 MACHINE", image:  Pic5 },
        { id: 6, title: "Machine 6", description: " POLYMAER MACHINE’S TUBE 18 INCH 15 WATT(F18INCH15W)", image:  Pic6 },
        { id: 7, title: "Machine 7", description: "POLY 12/08 MACHINE", image:  Pic7 },
        { id: 8, title: "Machine 8", description: "POLY 18/04 MACHINE", image:  Pic8 },
        { id: 9, title: "Machine 9", description: "POLY 18/04 MACHINE", image:  Pic9 },
        { id: 10, title: "Machine 10", description: "POLY 18/08 MACHINE", image:  Pic10 },
      ];
    
      const navigate = useNavigate();
    
      const handleContact = () => {
        navigate("/contactus");
      }



  return (
    <>

<PageHeader topheading="Polymer Stamp Making Machine" title="polymerstampmakingmachine"/> 

         
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
