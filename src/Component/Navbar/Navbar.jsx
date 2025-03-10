
import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { serverURL, getData, postData } from '../../services/FetchNodeAdminServices';

export default function Navbar() {
    const [categoryName1, setCategoryName1] = useState({});
    const [categoryName2, setCategoryName2] = useState({});
    const [categoryName3, setCategoryName3] = useState({});
    const [categoryName4, setCategoryName4] = useState({});

    const [subCategories1, setSubCategories1] = useState([]);
    const [subCategories2, setSubCategories2] = useState([]);
    const [subCategories3, setSubCategories3] = useState([]);
    const [subCategories4, setSubCategories4] = useState([]);

    const [phoneNo, setPhoneNo] = useState("");
    const [mailId, setMailId] = useState("");

    const fetchAllCategory = async () => {
        try {
            const result = await getData('userinterface/user_display_all_category');
            if (result.status) {
                setCategoryName1(result.data[0] || {});
                setCategoryName2(result.data[1] || {});
                setCategoryName3(result.data[2] || {});
                setCategoryName4(result.data[3] || {});
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

    useEffect(() => {
        if (categoryName4.categoryid) fetchSubCategories(categoryName4.categoryid, setSubCategories4);
    }, [categoryName4]);

    // Ensure subCategories4 has at least one element before accessing index 0
    const subCategoryId = subCategories4.length > 0 ? subCategories4[0].subcategoryid : '';
    // const subCategoryId1 = subCategories1.map((sub,i)=>subCategories1.length > 0 ? sub.subcategoryid : '');
    // const subCategoryId2 = subCategories2.map((sub,i)=>subCategories2.length > 0 ? sub.subcategoryid : '');
    // const subCategoryId3 = subCategories3.map((sub,i)=>subCategories3.length > 0 ? sub.subcategoryid : '');



    //console.log('kkkkkkkkkk',subCategories1)




    const getPhone = async () => {
        try {
            const result = await getData('adminlogin/phoneno');
            if (result.status) {
                setPhoneNo(result.data.phoneno || {});
                setMailId(result.data.mailid || {});
                console.log('phone no hgyugeuiufe', result.data)

            } else {
                console.error("Failed to fetch phone number:", result.message);
            }
        } catch (error) {
            console.error("Error fetching phone number:", error);
        }

    }



    useEffect(() => {
        getPhone();

    }, [])

    return (
        <>
            <section className="navbarTop">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <div className="d-flex align-items-center navSec1">
                                <i className="bi bi-geo-alt-fill text-danger" aria-hidden="true"></i>
                                <Link to="https://www.google.com/search?q=I-245%2C+Sector+-+5%2C+DSIIDC%2C+Bawana+Industrial+Area%2C+Delhi%2C+India.+Pin+Code+-+110039&oq=I-245%2C+Sector+-+5%2C+DSIIDC%2C+Bawana+Industrial+Area%2C+Delhi%2C+India.+Pin+Code+-+110039&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRiPAjIHCAIQIRiPAtIBCDMyMjJqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8" className="ms-1 text-light">
                                    I-245,sector-5 DSIIDC BAWANA INDUSTRIAL AREA DELHI Pincode-110039
                                </Link>
                                <span className="text-white ms-4 d-flex align-items-center">
                                    <i className="bi bi-envelope text-danger" aria-hidden="true"></i>
                                    <span className="ms-2">
                                        Email:
                                        <Link to="mailto:ddplasticsindia@gmail.com" className="text-white">
                                            {mailId}
                                        </Link>
                                    </span>
                                </span>
                            </div>
                        </div>

                        <div className="col-md-4 text-end">
                            <div className='p-3'>
                                <span className="text-white">
                                    <i className="bi bi-telephone-fill text-danger" aria-hidden="true"></i>
                                    <span className="ms-2 text-center">
                                        Phone No:
                                        <Link to="tel:7982167578" className="text-white text-decoration-none">
                                            {phoneNo}
                                        </Link>
                                    </span>
                                </span>
                                <span>
                                    <Link to="https://www.facebook.com/goldstarstamps" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
                                        <i className="bi bi-facebook"></i>
                                    </Link>
                                    <Link to="https://www.instagram.com/goldstarstamps" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
                                        <i className="bi bi-instagram"></i>
                                    </Link>
                                    <Link to="http://wa.me/917982167578" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
                                        <i className="bi bi-whatsapp"></i>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <nav className="navbar navbar-expand-lg mainNav">
                <div className="container-fluid">
                    <div className='nav-main'>
                        <Link className="navbar-brand brand text-info" to="/">
                            <img src="/images/products/Brand-icon.png" height={80} alt="Brand Logo" />
                        </Link>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-5">
                                <li className="nav-item me-3"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item me-3"><Link className="nav-link" to="/about-us">About Us</Link></li>

                                {[categoryName1, categoryName2, categoryName3].map((category, i) => (
                                    <li className="nav-item dropdown me-3" key={i}>
                                        <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">
                                            {category.categoryname}
                                        </Link>
                                        <ul className="dropdown-menu droplist droplistproduct">
                                            {(i === 0 ? subCategories1 : i === 1 ? subCategories2 : subCategories3).map((sub, idx) => (
                                                <li key={idx}>
                                                    <Link className="dropdown-item" to={`/${sub.subcategoryname}/${sub.subcategoryid}`}>
                                                        {sub.subcategoryname}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}



                                <li className="nav-item me-3">
                                    <Link className="nav-link" to={`/flashstampmachineaccessories/${subCategoryId}`}>
                                        {categoryName4.categoryname}
                                    </Link>
                                </li>
                                <li className="nav-item me-3"><Link className="nav-link" to="/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

