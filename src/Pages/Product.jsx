import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { postData, getData } from "../services/FetchNodeAdminServices";

export default function Product() {

  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  /****************************** Fetch all Product **********************/
  const fetchAllProduct = async () => {
    try {
      const result = await getData('product/display_all_product');
      if (result.status) {
        setProductList(result.data);
       // console.log(result.data);
      } else {
        console.error("Failed to fetch subcategories:", result.message);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);


 /****************************** Delete Subcategory **********************/

const handleDelete = async (item) => {
        var body={'productid':item}
 
      var result = await postData('product/delete_product', body)
      if (result.status) {
          alert("Product deleted successfully",result);
          setTimeout(() => navigate('/product'), 2000);
      } else {
          alert("Failed to delete product: " + result.message);
      }
  
      fetchAllProduct(); // Refresh the list
};
    



  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0 rounded-lg">
        <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Multi Products</h5>
          <Link to="/productform" className="text-light">
            <IoMdAddCircle className="fs-3" />
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-hover table-bordered text-center align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => (
                <tr key={index}>
                  <td>{item.productid}</td>
                  <td>{item.productname}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning text-light"
                      onClick={() => navigate(`/productForm/${item.productid}`)}
                    >
                      <FaEdit className="fs-5" />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item.productid)}
                    >
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