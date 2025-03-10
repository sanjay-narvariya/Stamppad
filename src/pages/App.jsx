import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import OldPrinterSeries from './OldPrinterSeries/OldPrinterSeries';
// import NewPrinterSeries from './NewPrinterSeries/NewPrinterSeries';
// import StampPads from './StampPads/StampPads';
import AboutUs from './AboutUs/AboutUs';
// import Inks from './Inks/Inks';
import Contactus from './ContactUs/Contactus';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import AboutPage from "../pages/AboutUs/AboutUs"
import PenStamp from './PenStamp/PenStamp';
import FlashMachineries from './FlashStampMachine/Machineries/FlashMachineries';
import EmbossingSeal from './EmbossingSeal/EmbossingSeal';
import NumberingMachine from './AutomaticNumberingMachine/NumberingMachine';
import SelfInkStamp from './SelfInkStamp/SelfInkStamp';
import PreInkStamp from './PreInkStamp/PreInkStamp';
import IsoCertification from './IsoCertification/IsoCertification';
import SelfInkDaterStamp from './SelfInkDaterStamp/SelfInkDaterStamp';
import PolymerStampMakingMachine from './PolymerStampMakingMachine/PolymerStampMakingMachine';
import PolymerStampRawMaterials from './POLYMER STAMP RAW MATERIALS/PolymerStampRawMaterials';
import FlashStampRawMaterial from './FLASH STAMP RAW MATERIALS/FlashStampRawMaterial';
import FlashStampMachineAccessories from './Flash Stamp Machine Accessories/FlashStampMachineAccessories';




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <div style={{ marginTop: "2rem" }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path="/oldprinterseries" element={<OldPrinterSeries/>} /> */}
          {/* <Route path="/newprinterseries" element={<NewPrinterSeries/>} /> */}
          {/* <Route path="/stamppads" element={<StampPads />} /> */}
          {/* <Route path="/inks" element={<Inks/>} /> */}
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/about-us" element={<AboutPage/>} />

          <Route path="/PEN STAMP" element={<PenStamp/>} />
          <Route path="/PEN STAMP/:subcategoryId" element={<PenStamp/>} />

          <Route path="/SELF INK STAMP" element={<SelfInkStamp/>}/>
          <Route path="/SELF INK STAMP/:subcategoryId" element={<SelfInkStamp/>}/>

          <Route path="/PRE INK STAMP" element={<PreInkStamp/>}/>
          <Route path="/PRE INK STAMP/:subcategoryId" element={<PreInkStamp/>}/>

          <Route path="/SELF INK DATER STAMP" element={<SelfInkDaterStamp/>}/>
          <Route path="/SELF INK DATER STAMP/:subcategoryId" element={<SelfInkDaterStamp/>}/>
{/********************************************************************************************************** */}
          <Route path="/AUTOMATIC NUMBERING MACHINE" element={<NumberingMachine/>}/>
          <Route path="/AUTOMATIC NUMBERING MACHINE/:subcategoryId" element={<NumberingMachine/>}/>

          <Route path="/EMBOSSING SEAL" element={<EmbossingSeal/>}/>
          <Route path="/EMBOSSING SEAL/:subcategoryId" element={<EmbossingSeal/>}/>

          <Route path="/POLYMER STAMP MAKING MACHINES" element={<PolymerStampMakingMachine/>}/>
          <Route path="/POLYMER STAMP MAKING MACHINES/:subcategoryId" element={<PolymerStampMakingMachine/>}/>
          

          <Route path="/FLASH STAMP MACHINE" element={<FlashMachineries/>} />
          <Route path="/FLASH STAMP MACHINE/:subcategoryId" element={<FlashMachineries/>} />

          <Route path="/FLASH STAMP RAW MATERIALS"  element={<FlashStampRawMaterial/>}/>
          <Route path="/FLASH STAMP RAW MATERIALS/:subcategoryId"  element={<FlashStampRawMaterial/>}/>

          <Route path="/POLYMER STAMP RAW MATERIALS" element={<PolymerStampRawMaterials/>}/>
          <Route path="/POLYMER STAMP RAW MATERIALS/:subcategoryId" element={<PolymerStampRawMaterials/>}/>
    

          <Route path="/isocertification" element={<IsoCertification/>}/>
         

          <Route path="/flashstampmachineaccessories/:subCategories4"  element={<FlashStampMachineAccessories/>}/>
          <Route path="/flashstampmachineaccessories"  element={<FlashStampMachineAccessories/>}/>  
           
        </Routes>
      {/* </div> */}
      <Footer />
    </BrowserRouter>
  );
}











// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
