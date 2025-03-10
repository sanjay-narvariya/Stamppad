import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { getData, postData, serverURL } from "../services/FetchNodeAdminServices";
import { useNavigate } from "react-router-dom";


export default function OneProduct() {

      const [productList, setProductList] = useState([]);
               const navigate = useNavigate();
    
                
      const imgStyle = {
        width: "50px",
        height: "50px",
        objectFit: "cover",
        borderRadius: "2rem",
       };


 // Fetch all Oneproduct

 const fetchAllOneProduct = async () => {
    const result = await getData('oneproduct/display_all_oneproduct');
    if (result.status) {
      setProductList(result.data);
      //alert(result.message);
    }
    else
    {
      alert('One Product not found.....')
    }
  };

   useEffect(() => {
    fetchAllOneProduct();
    }, []);
  

/**************************************Delete One Product list******************************/


const oneProductDelete=async(item)=>{

    var body={'productid':item}
  
     var result= await postData('oneproduct/delete_oneproduct',body)
    if(result.status)
    {
      alert('Delete oneProduct successfully.....')
      setTimeout(() => navigate('/oneproduct'), 1000);
    }
    else
    {
      alert('Not Delete One Product .....')
    }
  
    fetchAllOneProduct();
  }
  
  
  /********************************* */

  
return(  <div className="container mt-5">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Single Product</h5>
              <Link to="/oneproductform" className="text-light">
                <IoMdAddCircle className="fs-3" />
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-hover table-bordered text-center align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Single Product Picture</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((item) => (
                    <tr key={item.productid}>
                      <td>{item.productid}</td>
                      <td>{item.productname}</td>
                      <td>{item.picture != "" ? <img style={imgStyle} src={`${serverURL}/images/${item.picture}`} alt="Product Preview" /> : ""}</td>
                       <td>
                        <button 
                          className="btn btn-sm btn-warning text-light"
                          onClick={() => navigate(`/oneproductform/${item.productid}`)}
                        >
                          <FaEdit className="fs-5" />
                        </button>
                      </td> 
                      <td>
                        <button className="btn btn-sm btn-danger"  onClick={() => oneProductDelete(item.productid)} >
                          <FaTrashAlt className="fs-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>)

}