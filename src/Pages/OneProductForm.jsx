import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaBackward } from "react-icons/fa";
import { postData, getData, serverURL } from "../services/FetchNodeAdminServices";
import testingimage from "./Brand-icon.png"

export default function OneProductForm() {
  const { productid } = useParams(); // Get categoryid from URL

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productIcon, setProductIcon] = useState({ bytes: "", fileName: testingimage });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const navigate = useNavigate();


  const imgStyle = {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    borderRadius: "2rem",
  };


  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        let result = await getData('category/display_all_category');
        if (result && result.data) {
          setCategories(result.data);
        } else {
          setMessage({ type: 'error', text: 'Failed to load categories' });
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        setMessage({ type: 'error', text: 'Server error while fetching categories' });
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories when category changes
  useEffect(() => {
    const fetchSubCategories = async () => {
      if (selectedCategory) {
        try {
          let result = await postData('subcategory/get_all_subcategory_by_categoryid', { categoryid: selectedCategory });
          if (result && result.data) {
            setSubCategories(result.data);
          } else {
            setSubCategories([]);
            setMessage({ type: 'error', text: 'Failed to load subcategories' });
          }
        } catch (error) {
          console.error("Error fetching subcategories:", error);
          setMessage({ type: 'error', text: 'Server error while fetching subcategories' });
        }
      }
    };
    fetchSubCategories();
  }, [selectedCategory]);







  // Fetch OneProduct details if editing
  useEffect(() => {
    if (productid) {
      fetchOneProductDetails();
    }
  }, [productid]);

  const fetchOneProductDetails = async () => {
    var result = await postData('oneproduct/display_oneproduct_id', { productid: productid });
    if (result.status) {
      setProductName(result.data.productname);
      setSelectedCategory(result.data.categoryid);
      setSelectedSubCategory(result.data.subcategoryid);
      setProductIcon({ bytes: result.data.picture, fileName: `${serverURL}/images/${result.data.picture}` })

    } else {
      setMessage({ type: 'error', text: 'Failed to fetch One Product details!' });
    }
  };


  // Handle form submission 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      let formData = new FormData();
      formData.append('categoryid', selectedCategory);
      formData.append('subcategoryid', selectedSubCategory);
      formData.append("productname", productName);
      formData.append("picture", productIcon.bytes);


      if (productid) {
        // Update existing one product
        formData.append("productid", productid);
        var result = await postData('oneproduct/edit_oneproduct_data', formData);

        console.log("FormData contents:");
        formData.forEach((value, key) => {
          console.log(key, value);
        });

      } else {
        // Add new One Product
        var result = await postData('oneproduct/oneproduct_submit', formData)

      }

      if (result.status) {
        setMessage({ type: 'success', text: productid ? 'OneProduct updated successfully!' : 'OneProduct added successfully!' });
        setTimeout(() => navigate('/oneproduct'), 1000);
      } else {
        setMessage({ type: 'error', text: result.message || 'Something went wrong!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to connect to the server!' });
    } finally {
      setLoading(false);
    }
  };




  return (<div className="container mt-5">
    <div className="card shadow-lg border-0 rounded-lg p-4">
      <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Add New Single Product</h5>
        <Link to="/oneproduct" className="text-light">
          <FaBackward className='fs-4' />
        </Link>
      </div>
      <div className="card-body">
        {message.text && (
          <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
            {message.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className='form-label fw-bold'>Category</label>
              <select className="form-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} required>
                <option value="">Choose Category</option>
                {categories.map((category) => (
                  <option key={category.categoryid} value={category.categoryid}>
                    {category.categoryname}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className='form-label fw-bold'>Sub Category</label>
              <select className="form-select" value={selectedSubCategory} onChange={(e) => setSelectedSubCategory(e.target.value)} required>
                <option value="">Choose Subcategory</option>
                {subCategories.map(sub => (
                  <option key={sub.subcategoryid} value={sub.subcategoryid}>{sub.subcategoryname}</option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label htmlFor="productname" className="form-label">Single Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productname"
                placeholder="Enter product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className='mb-3'>
            <label className='form-label fw-bold'>Product Picture</label>
            <input type="file" className="form-control" onChange={(e) => setProductIcon({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })} />
            {productIcon.fileName != testingimage ? <img style={imgStyle} src={productIcon.fileName} alt="Product Preview" /> : <img style={imgStyle} src={productIcon.fileName} alt="Product Preview" />}
          </div>
          <button type="submit" className="btn btn-success w-100" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  </div>
    // </div>
    // </div>
  );

}