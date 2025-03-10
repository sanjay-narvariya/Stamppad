import React, { useState,useEffect } from "react";
import Pic1 from '../../pages/images/selfinkstamp/b1.png'
import Pic2 from '../../pages/images/preInkstamp/o9.png'
import Pic3 from '../../pages/images/penstemp/PEN STAMP 8.jpeg'
import Pic4 from '../../pages/images/selfinkdaterstamp/n2.png'
import Pic5 from '../../pages/images/automaticNumberMachine/numberingMachine1.webp'
import Pic6 from '../../pages/images/embossingSeal/embossingpic1.jpg'
import Pic7 from '../../pages/images/Machine/FLASH-NEW.jpg'
import Pic8 from '../../pages/images/Machine1/12-4-600x400-1.jpg'
import Pic9 from '../../pages/images/FLASH STAMP MACHINE ACCESSORIES/062-600x400-1.jpg'
import Pic10 from '../../pages/images/FLASH STAMP RAW MATERIALS/HTB1FO5.iaSWBuNjSsrbq6y0mVXac.avif'
import { Link } from 'react-router-dom';
import { serverURL, getData, postData } from '../../services/FetchNodeAdminServices';
import "./products.css";
    


const Products = () => {

      const [categoryName1, setCategoryName1] = useState({});
      const [categoryName2, setCategoryName2] = useState({});
      const [categoryName3, setCategoryName3] = useState({});
      // const [categoryName4, setCategoryName4] = useState({});
  
      const [subCategories1, setSubCategories1] = useState([]);
      const [subCategories2, setSubCategories2] = useState([]);
      const [subCategories3, setSubCategories3] = useState([]);
      const [subCategories4, setSubCategories4] = useState([]);

       const fetchAllCategory = async () => {
              try {
                  const result = await getData('userinterface/user_display_all_category');
                  if (result.status) {
                   // console.log('jhchcgcdujdchjdhdc',result)
                      setCategoryName1(result.data[0] || {});
                      setCategoryName2(result.data[1] || {});
                      setCategoryName3(result.data[2] || {});
                      // setCategoryName4(result.data[3] || {});
                  } else {
                      console.error("Failed to fetch categories:", result.message);
                  }
              } catch (error) {
                  console.error("Error fetching categories:", error);
              }
          };
      
          const fetchSubCategories = async (categoryid, setSubCategories) => {
              if (categoryid) {
                  try {
                      let result = await postData('userinterface/user_get_all_subcategory_by_categoryid', { categoryid });
                      setSubCategories(result.data || []);
                  } catch (error) {
                      console.error("Error fetching subcategories:", error);
                      setSubCategories([]);
                  }
              } else {
                  setSubCategories([]);
              }
          };
      
          useEffect(() => {
              fetchAllCategory();
          }, []);
      
          useEffect(() => {
              if (categoryName1.categoryid) fetchSubCategories(categoryName1.categoryid, setSubCategories1);
          }, [categoryName1]);
      
          useEffect(() => {
              if (categoryName2.categoryid) fetchSubCategories(categoryName2.categoryid, setSubCategories2);
          }, [categoryName2]);
      
          useEffect(() => {
              if (categoryName3.categoryid) fetchSubCategories(categoryName3.categoryid, setSubCategories3);
          }, [categoryName3]);
      
          // useEffect(() => {
          //     if (categoryName4.categoryid) fetchSubCategories(categoryName4.categoryid, setSubCategories4);
          // }, [categoryName4]);
      
        

  return (
    <>
     {[categoryName1, categoryName2, categoryName3].map((category, i) => (
    <section className="product-section"  key={i}>
      <div className="container"  key={i}>
      <h2><b> {category.categoryname}  </b></h2>
         <div className="StampHandle"  key={i}>
         <div className="row"  key={i}>
        
         {(i === 0 ? subCategories1 : i === 1 ? subCategories2 : subCategories3).map((sub, idx) => (
              <div className="col-md-3 col-6"  key={idx}>
                <div key={sub.subcategoryid} className="product-card">
                  <img
                     src={`${serverURL}/images/${sub.subcategoryicon}`}
                    alt={sub.subcategoryname}
                    className="product-image"
                  />
                  <h3>{sub.subcategoryname}</h3>
                  <a href={`/${sub.subcategoryname}/${sub.subcategoryid}`} className="view-more">
                   →
                  </a>
                </div>
              </div>
                  ))}
          </div>
         </div>
 
      </div>
        </section>
           ))}



    </>
  );
};

export default Products;
