import React from 'react'
import "./inks.css"
import pic1 from '../images/a1.jpg';
import pic2 from '../images/a1.jpg';
import pic3 from '../images/a1.jpg';
import PageHeader from '../../Component/PageHeader/PageHeader';

const Inks = () => {
  return (
    <>
      <PageHeader topheading="Inks" title="inks" />

      <div className="container">
        <div className="row mb-2">
          <div className="col-md-2 col-12">
            <h3 className="pt-3 text-center">Products</h3>
            <div className='inkpic'>
              <img src="/images/products/i1.jpg" className='ink-image' alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="midStamp">
              <h3 className="pt-3 text-center">Stamps</h3>
              <img src="/images/redmohar.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="container">
              <h3 className="pt-3 text-center">Details</h3>
              <div className="card">
                <div className="card-header bg-danger text-white">
                  Printer C 10
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Size of Imprint" />
                        </div>
                        <div className="p-1">
                          size of imprint
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Packaging" />
                        </div>
                        <div>
                          packaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic2} height={40} alt="Colour of Handle" />
                        </div>
                        <div>

                          <span className="badge bg-dark me-1">Black</span>
                          <span className="badge bg-danger me-1">Red</span>
                          <span className="badge bg-primary">Blue</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Spare Pad" />
                        </div>
                        <div>
                          spare pad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Recommended Number of Lines" />
                        </div>
                        <div>

                          recommended number of lines
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Optional Cover" />
                        </div>
                        <div>
                          optional: cover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container ">
        <div className="row mb-2">
          <div className="col-md-2 col-12">
            <div className='inkpic'>
              <img src="/images/products/i2.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div className="midStamp ">
              <img src="/images/stamp.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="container">
              <div className="card">
                <div className="card-header bg-danger text-white">
                  Printer C 10
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Size of Imprint" />
                        </div>
                        <div className="p-1">
                          size of imprint
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Packaging" />
                        </div>
                        <div>
                          packaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic2} height={40} alt="Colour of Handle" />
                        </div>
                        <div>

                          <span className="badge bg-dark me-1">Black</span>
                          <span className="badge bg-danger me-1">Red</span>
                          <span className="badge bg-primary">Blue</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Spare Pad" />
                        </div>
                        <div>

                          spare pad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Recommended Number of Lines" />
                        </div>
                        <div>

                          recommended number of lines
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Optional Cover" />
                        </div>
                        <div>
                          optional: cover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container ">
        <div className="row mb-2">
          <div className="col-md-2 col-12">
            <div className='inkpic'>
              <img src="/images/products/i3.jpg" height={270} width={210} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="midStamp">
              <img src="/images/bluemohar.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="container">
              <div className="card">
                <div className="card-header bg-danger text-white">
                  Printer C 10
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Size of Imprint" />
                        </div>
                        <div className="p-1">
                          size of imprint
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic1} height={40} alt="Packaging" />
                        </div>
                        <div>
                          packaging
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic2} height={40} alt="Colour of Handle" />
                        </div>
                        <div>

                          <span className="badge bg-dark me-1">Black</span>
                          <span className="badge bg-danger me-1">Red</span>
                          <span className="badge bg-primary">Blue</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Spare Pad" />
                        </div>
                        <div>

                          spare pad
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Recommended Number of Lines" />
                        </div>
                        <div>

                          recommended number of lines
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="me-2">
                          <img src={pic3} height={40} alt="Optional Cover" />
                        </div>
                        <div>
                          optional: cover
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Inks







