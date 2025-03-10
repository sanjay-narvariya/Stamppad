import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { getData, postData, serverURL } from "../services/FetchNodeAdminServices";
import { useNavigate } from "react-router-dom";


export default function MainBanner1() {
          const [bannerList, setBannerList] = useState([]);
           const navigate = useNavigate();

            
  const imgStyle = {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "2rem",
};

 // Fetch all mainbanner
 const fetchAllMainBanner = async () => {
    const result = await getData('mainbanner/display_all_mainbanner');
    if (result.status) {
      setBannerList(result.data);
      //alert(result.message);
    }
  };

   useEffect(() => {
      fetchAllMainBanner();
    }, []);
  

/**************************************Delete Main Banner list******************************/


const mainBannerDelete=async(item)=>{

    var body={'bannerid':item}
  
     var result= await postData('mainbanner/delete_mainbanner',body)
    if(result.status)
    {
      alert('Delete MainBanner successfully.....')
      setTimeout(() => navigate('/mainbanner'), 1000);
    }
    else
    {
      alert('Not Delete Main Banner .....')
    }
  
    fetchAllMainBanner();
  }
  
  
  /********************************* */

    return(  <div className="container mt-5">
        <div className="card shadow-lg border-0 rounded-lg">
          <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Main Banner</h5>
            <Link to="/mainbannerform" className="text-light">
              <IoMdAddCircle className="fs-3" />
            </Link>
          </div>
          <div className="card-body">
            <table className="table table-hover table-bordered text-center align-middle">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Banner Name</th>
                  <th>Message</th>
                  <th>Main Banner Pictures</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {bannerList.map((item) => (
                  <tr key={item.bannerid}>
                    <td>{item.bannerid}</td>
                    <td>{item.bannername}</td>
                    <td>{item.message}</td>
                    <td>{item.pictures != "" ? <img style={imgStyle} src={`${serverURL}/images/${item.pictures}`} alt="Product Preview" /> : ""}</td>
                     <td>
                      <button 
                        className="btn btn-sm btn-warning text-light"
                        onClick={() => navigate(`/mainbannerform/${item.bannerid}`)}
                      >
                        <FaEdit className="fs-5" />
                      </button>
                    </td> 
                    <td>
                      <button className="btn btn-sm btn-danger"  onClick={() => mainBannerDelete(item.bannerid)} >
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