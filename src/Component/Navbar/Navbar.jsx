import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            {/* Navbar Top Section */}
            <section className="navbarTop">
                <div className="container ">
                    <div className="row align-items-center">
                        {/* Address and Email Section */}
                        <div className="col-md-8">
                            <div className="d-flex align-items-center navSec1 ">
                                <i className="bi bi-geo-alt-fill text-danger" aria-hidden="true"></i>
                                <Link to="https://www.google.com" className="ms-1 text-light">I-245,sector-5 DSIIDC BAWANA INDUSTRIAL AREA DELHI
                                Pincode-110039</Link>
                                <span className="text-white ms-4 d-flex align-items-center">
                                    <i className="bi bi-envelope text-danger" aria-hidden="true"></i>
                                    <span className="ms-2">Email:<Link to="mailto:ddplastic234@gmail.com" className="text-white">ddplastic1234@gmail.com</Link></span>
                                </span>
                            </div>
                        </div>

                        {/* Phone and Social Icons Section */}
                        <div className="col-md-4 text-end">
                           <div className='p-3'>
                           <span className="text-white">
                                <i className="bi bi-telephone-fill text-danger " aria-hidden="true"></i>
                                <span className="ms-2 text-center">Phone No: <Link  to="tel:7982167578" className="text-white text-decoration-none">7982167578</Link></span>
                            </span>
                            <span>
                                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                                <Link to="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer" className="text-white ms-3">
                                    <i className="bi bi-whatsapp"></i>
                                </Link>
                                </span>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Navbar */}
     <nav className="navbar navbar-expand-lg mainNav">
    <div className="container-fluid ">
        <Link className="navbar-brand brand text-info" to="/"><img src="/images/products/Brand-icon.png"  height={80} alt="" /></Link>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
                <li className="nav-item me-3 ">
                    <Link className="nav-link  " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item dropdown me-3">
                    <Link
                        className="nav-link  dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Products
                    </Link>
                    <ul className="dropdown-menu droplist ">
                        <li ><Link className="dropdown-item" to="/oldprinterseries">Old Printer Series</Link></li>
                        <li><Link className="dropdown-item" to="/newprinterseries">All New Printer Series</Link></li>
                        <li><Link className="dropdown-item" to="/stamppads">Stamp pads</Link></li>
                        <li><Link className="dropdown-item" to="/inks">Inks</Link></li>
                    </ul>
                </li>
                <li className="nav-item me-3">
                    <Link className="nav-link" to="/contactus">Contact Us</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
        </>
    );
}
