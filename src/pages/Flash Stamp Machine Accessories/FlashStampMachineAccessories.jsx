import React, { useEffect, useState } from "react";

import PageHeader from "../../Component/PageHeader/PageHeader";
import { useParams, useNavigate } from "react-router-dom";
import { serverURL, getData, postData } from '../../services/FetchNodeAdminServices';


export default function FlashStampMachineAccessories() {
  const { subCategories4 } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedProduct1, setSelectedProduct1] = useState("");

  const [name1, setName1] = useState("");
  const [mailid, setMailid] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message1, setMessage1] = useState("");

  const navigate = useNavigate();

  // console.log('sshhgfhfhhghghgghssssss',selectedProduct)
  // const data1 = Object.entries(selectedProduct)
  //const data1 = Object.values(selectedProduct)
  //console.log(data1)



  useEffect(() => {

    const fetchAllProductdetail = async () => {
      try {
        var result = await postData('userinterface/user_get_all_oneproduct_by_subcategoryid', { subcategoryid: subCategories4 });
        if (result.status) {
          setSelectedProduct(result.data);
          // console.log('sssssssssssssss', result.data[0])

        } else {
          console.error("Failed to fetch categories:", result.message);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchAllProductdetail();

  }, [subCategories4])



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);



  const handleShow = (product) => {
    setSelectedProduct1(product);
  };

  const handleClose = () => {
    setSelectedProduct1("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var result = await postData('useraddress/user_submit', {
              name: name1,
              mailid: mailid,
              mobileno: phoneno,
              message: message1
    });

    if (result.status) {
      alert("Form submitted successfully!");

      // Reset form fields
            setName1("");
            setMailid("");
            setPhoneno("");
            setMessage1("");
            
            window.location.reload(); // Refresh the page after navigation
      // Close modal
      handleClose();
    } else {
      console.error("Failed to submit form:", result.message);
    }
  };


  return (
    <>
      <PageHeader topheading="Flash Stamp Machine Accessories" title="flashstampmachineaccessories" />

      <div className="container">
        <div  className="cards-container">
          {selectedProduct.map((item) => (
            <div key={item.productid} className="card">
              <img src={`${serverURL}/images/${item.picture}`} alt={item.productname} className="card-image" />
              <div className="card-content">
                <h3>{item.productname}</h3>
                {/* <p>{item.description}</p> */}
                <button
                  className="card-button"
                  data-bs-toggle="modal"
                  data-bs-target="#productModal"
                  onClick={() => handleShow(item)}
                >
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      <form onSubmit={handleSubmit} className="needs-validation" noValidate >
        <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content stylishform text-center">
              <div className="modal-header">
                <h5 className="modal-title" id="productModalLabel">{selectedProduct1?.productname}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
              </div>
              <div className="modal-body">
                {selectedProduct1 && (
                  <>
                    <p>{selectedProduct1.productname}</p>

                    <div className="form-floating mb-2">
                      <input type="text" className="form-control" value={name1} onChange={(e) => setName1(e.target.value)} placeholder="Full Name" required />
                      <label htmlFor="floatingName">Name</label>
                    </div>

                    <div className="form-floating mb-2">
                      <input type="email" className="form-control" value={mailid} onChange={(e) => setMailid(e.target.value)} placeholder="name@example.com" required />
                      <label htmlFor="floatingEmail">Email address</label>
                    </div>

                    <div className="form-floating mb-2">
                      <input type="tel" className="form-control" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} placeholder="Phone" required />
                      <label htmlFor="floatingPhone">Phone Number</label>
                    </div>

                    <div className="form-floating mb-2">
                      <textarea className="form-control" placeholder="Leave a Message here" value={message1} onChange={(e) => setMessage1(e.target.value)} style={{ height: "100px" }} required></textarea>
                      <label htmlFor="floatingTextarea2">Requirement</label>
                    </div>

                    <div className="d-flex justify-content-between">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>

                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
