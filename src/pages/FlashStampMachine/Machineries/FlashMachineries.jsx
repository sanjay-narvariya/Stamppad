import React, { useEffect } from 'react';
import './machineries.css';
import Pic1 from '../../images/Machine/FLASH-NEW.jpg'
import Pic2 from '../../images/Machine/FLASH-NEW1.jpg'
import Pic3 from '../../images/Machine/FLASH-NEW2.jpg'
import Pic4 from '../../images/Machine/FLASH-NEW3.jpg'
import PageHeader from '../../../Component/PageHeader/PageHeader';

export default function FlashMachineries() {

  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const data = [
    { id: 1, title: "Machine 1", description: " FLASH MACHINE 2 TUBE", image: Pic1 },
    { id: 2, title: "Machine 2", description: " FLASH MACHINE 3 TUBE", image:  Pic2 },
    { id: 3, title: "Machine 3", description: " FLASH MACHINE 2 TUBE", image:  Pic3 },
    { id: 4, title: "Machine 4", description: " FLASH MACHINE 3 TUBE", image:  Pic4 },
  ];

  return (

   <>
   <PageHeader topheading="Flash Machineries " title="flashmachineries "/>
    
    <div className="container">
      <div className="cards-container">
         {data.map((item) => (
        <div key={item.id} className="card">
          <img src={item.image} alt={item.title} className="card-image" />
          <div className="card-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className="card-button">Details</button>
          </div>
         </div>
        ))}
      </div>
    </div>
   
   </>
  );
}


