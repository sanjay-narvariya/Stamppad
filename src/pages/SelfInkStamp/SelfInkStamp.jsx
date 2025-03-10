import React, { useEffect, useState } from 'react'
import './selfinkstamp.css'

import PageHeader from '../../Component/PageHeader/PageHeader'
import { useParams, useNavigate } from 'react-router-dom';
import { serverURL, getData, postData } from '../../services/FetchNodeAdminServices';

export default function SelfInkStamp() {

  const { subcategoryId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [selectedProduct1, setSelectedProduct1] = useState("");


  const [name1, setName1] = useState("");
  const [mailid, setMailid] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message1, setMessage1] = useState("");

  const navigate = useNavigate();




  useEffect(() => {

    const fetchAllProductdetail = async () => {
      try {
        var result = await postData('userinterface/user_get_all_product_by_subcategoryid', { subcategoryid: subcategoryId });
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

  }, [subcategoryId])




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

      <PageHeader topheading="Self Ink Stamps " title="selfinkstamp" />


      <div className="container">
        <div className="cards-container">

          <div className="container">
            {selectedProduct.map((item) => (
              <div key={item.productid} >
                <div className="row row-shadow">
                  <div className="col-md-4 col-12">
                    <h3 className="pt-3 text-center">{item.productname}</h3>
                    <div className="productselfinkstamp">
                      <img
                        src={`${serverURL}/images/${item.picture}`}
                        alt={item.productname}

                      />
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <h3 className="pt-3 text-center">Stamps</h3>
                    <div className="midStamp2">
                      <img
                        src={`${serverURL}/images/${item.picture1}`}
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-md-4 col-12">
                    <div className="container">
                      <h3 className="pt-3 text-center">Details</h3>
                      <div className="card">
                        <div className="card-header bg-danger text-white">
                          {item.productname}
                        </div>
                        <div className="detailcard">
                          <div className="row mb-3">
                            <div className="col-md-6 col-12">
                              <div className="d-flex align-items-center">
                                <div className="me-2 detailimg">
                                  <img src={`${serverURL}/images/${item.picture2}`} alt="Size of Imprint" className='details-img' />
                                </div>
                                <p className='selftpara'>
                                   size of imprint
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="d-flex align-items-center">
                                <div className="me-2 detailimg">
                                  <img src={`${serverURL}/images/${item.picture3}`} alt="Packaging" className='details-img' />
                                </div>
                                <p className='selftpara'>
                                  packaging
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6 col-12">
                              <div className="d-flex align-items-center">
                                <div className="me-2 detailimg">
                                  <img src={`${serverURL}/images/${item.picture4}`} alt="Colour of Handle" className='details-img' />
                                </div>
                                <p className='selftpara'>
                                  Handle of Colours
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="d-flex align-items-center">
                                <div className="me-2 detailimg">
                                  <img src={`${serverURL}/images/${item.picture5}`} alt="Spare Pad" className='details-img' />
                                </div>
                                <p className='selftpara'>
                                  spare pad
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-md-6 col-12">
                              <div className="d-flex align-items-center">
                                <div className="me-2 detailimg">
                                  <img src={`${serverURL}/images/${item.picture6}`} alt="Recommended Number of Lines" className='details-img' />
                                </div>
                                <p className='selftpara'>
                                recommended number of lines
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6 col-12">
                              <div className="d-flex align-items-center">
                                <div className="me-2 detailimg">
                                  <img src={`${serverURL}/images/${item.picture7}`} alt="Optional Cover" className='details-img' />
                                </div>
                                <p className='selftpara'>
                                  optional: cover
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productModal" onClick={() => handleShow(item)} >Know More</button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))
            }

          </div>
        </div>
      </div>


      {/* Modal      */}
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
  )
}










