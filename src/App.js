import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import AdminHome from "./Components/AdminHome/AdminHome";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import CategoryForm from "./Pages/CategoryForm";
import SubCategory from "./Pages/SubCategory";
import SubCategoryForm from "./Pages/SubCategoryForm";
import ProductForm from "./Pages/ProductForm";
import Product from "./Pages/Product";
import Enquiry from "./Pages/Enquiry";
import MainbannerForm from "./Pages/MainbannerForm";
import MainBanner1 from "./Pages/MainBanner1";
import OneProduct from "./Pages/OneProduct";
import OneProductForm from "./Pages/OneProductForm";
import { useNavigate } from "react-router-dom";
import './App.css'

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear()
    navigate("/")
    window.location.reload(); 
  }

  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: "250px", height: "100vh" }}>
      <h4 className="text-center">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/home">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/subcategory">SubCategory</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mainbanner">MainBanner</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/oneproduct">Single Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Multi Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/enquiry">Enquiry</Link>
        </li>
        <button className="btn btn-primary" onClick={handleLogOut}>
          Logout
        </button>
      </ul>
    </div>)
};

const AdminPanel = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");


  return (
    <Router>
      <Navbar />
      <div className="d-flex">
        {isLoggedIn ? <Sidebar /> : <div></div>}
        <div className="flex-grow-1" style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
            {isLoggedIn ? (
              <>
                <Route path="/home" element={<AdminHome />} />
                <Route path="/categoryform" element={<CategoryForm />} />
                <Route path="/categoryform/:categoryid" element={<CategoryForm />} />

                <Route path="/subcategory" element={<SubCategory />} />
                <Route path="/subcategoryform" element={<SubCategoryForm />} />
                
                <Route path="/subcategoryform/:subcategoryid" element={<SubCategoryForm />} />
                <Route path="/productForm" element={<ProductForm />} />
                <Route path="/productForm/:productid" element={<ProductForm />} />
                <Route path="/product" element={<Product />} />
                <Route path="/enquiry" element={<Enquiry />} />

                <Route path="/mainbannerform" element={<MainbannerForm />} />
                <Route path="/mainbannerform/:bannerid" element={<MainbannerForm />} />
                <Route path="/mainbanner" element={<MainBanner1 />} />

                <Route path="/oneproductform" element={<OneProductForm />} />
                <Route path="/oneproductform/:productid" element={<OneProductForm />} /> 
                <Route path="/oneproduct" element={<OneProduct />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AdminPanel;
