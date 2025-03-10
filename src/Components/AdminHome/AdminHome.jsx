import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { getData, postData, serverURL } from "../../services/FetchNodeAdminServices";
import { useNavigate } from "react-router-dom";
// import testingimage from "./Brand-icon.png"

export default function AdminHome() {
  const [categoryList, setCategoryList] = useState([]);
  const navigate = useNavigate();

  
  const imgStyle = {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "2rem",
};


  // Fetch all categories
  const fetchAllCategory = async () => {
    const result = await getData('category/display_all_category');
    if (result.status) {
      setCategoryList(result.data);
      //alert(result.message);
    }
  };

  const isUserExist=()=>{
    localStorage.getItem("isLoggedIn")
  }

  useEffect(() => {
    fetchAllCategory();
  }, []);

useEffect(()=>{
  isUserExist()
})

/**************************************Delete category list******************************/


const categoryDelete=async(item)=>{

  var body={'categoryid':item}

   var result= await postData('category/delete_category',body)
  if(result.status)
  {
    alert('Delete category successfully.....')
    setTimeout(() => navigate('/home'), 2000);
  }
  else
  {
    alert('Not Delete category successfully.....')
  }

fetchAllCategory()
}


/********************************* */

  return (

    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-lg">
        <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Category Management</h5>
          <Link to="/categoryform" className="text-light">
            <IoMdAddCircle className="fs-3" />
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>CategoryIcon</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {categoryList.map((item) => (
                <tr key={item.categoryid}>
                  <td>{item.categoryid}</td>
                  <td>{item.categoryname}</td>
                  <td>{item.categoryicon != "" ? <img style={imgStyle} src={`${serverURL}/images/${item.categoryicon}`} alt="Product Preview" /> : ""}</td>
                  <td>
                    <button 
                      className="btn btn-sm btn-warning text-light"
                      onClick={() => navigate(`/categoryform/${item.categoryid}`)}
                    >
                      <FaEdit className="fs-5" />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-danger"  onClick={() => categoryDelete(item.categoryid)} >
                      <FaTrashAlt className="fs-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
   
  );
}
