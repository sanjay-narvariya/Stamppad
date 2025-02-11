import { useState } from "react";
import "./numberingmachine.css";
import Pic1 from "../images/automaticNumberMachine/numberingMachine1.webp";
import Pic2 from "../images/automaticNumberMachine/numberingMachine2.webp";
import Pic3 from "../images/automaticNumberMachine/numberingMachine3.webp";
import Pic4 from "../images/automaticNumberMachine/numberingMachine1.webp";
import PageHeader from "../../Component/PageHeader/PageHeader";

export default function NumberingMachine() {
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleShow = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    handleClose();
  };

  const data = [
    { id: 1, title: "Product 1", description: "CAN BE USED FOR CONTINUOUS FORWARD COUNTING.", image: Pic1 },
    { id: 2, title: "Product 2", description: "CAN BE USED FOR REPEATING DIGITS.", image: Pic2 },
    { id: 3, title: "Product 3", description: "INK WILL BE PROVIDED WITH MACHINE.", image: Pic3 },
    { id: 4, title: "Product 4", description: "EASY TO USE.", image: Pic4 },
  ];

  return (
    <>
      <PageHeader topheading="Automatic Numbering" title="Numbering Machine" />
      <div className="container">
        <div className="cards-container">
          {data.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button className="card-button" data-bs-toggle="modal" data-bs-target="#productModal" onClick={() => handleShow(item)}>Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="productModalLabel">{selectedProduct?.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              {selectedProduct && (
                <>
                  {/* <img src={selectedProduct.image} alt={selectedProduct.title} className="modal-image" /> */}
                  
                  <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-2">
                      <input type="text" className="form-control" id="floatingInput" placeholder="Full Name" />
                      <label for="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-2">
                      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                      <input type="phone" className="form-control" id="floatingPassword" placeholder="Phone" />
                      <label for="floatingPassword">Phone Number</label>
                     </div>
                    <div className="form-floating mb-2">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>

                  </form>





                  {/* <form  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" required className="form-input form-control " />
                    <input type="Phone" placeholder="Phone Number" required className="form-input form-control  " />
                    <input type="email" placeholder="Your Email" required className="form-input form-control" />
                   <textarea rows="5" cols="10">   Whats your Quary..........</textarea>
                    <button type="submit" className="btn btn-success">Submit</button> 
                  </form> */}

                  
                </>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



