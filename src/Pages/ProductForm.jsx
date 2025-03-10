
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import { postData, getData } from "../services/FetchNodeAdminServices";
import { serverURL } from "../services/FetchNodeAdminServices";
import testingimage from "./Brand-icon.png"

export default function ProductForm() {
    const { productid } = useParams(); // Get productid from URL
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [productName, setProductName] = useState('');
    const [productImage, setProductImage] = useState({ bytes1: "", fileName1: testingimage });
    const [stampImage, setStampImage] = useState({ bytes2: "", fileName2: testingimage });
    const [imprintSize, setImprintSize] = useState({ bytes3: "", fileName3: testingimage });
    const [packaging, setPackaging] = useState({ bytes4: "", fileName4: testingimage });
    const [handleColor, setHandleColor] = useState({ bytes5: "", fileName5: testingimage });
    const [recommendedLines, setRecommendedLines] = useState({ bytes6: "", fileName6: testingimage });
    const [sparePad, setSparePad] = useState({ bytes7: "", fileName7: testingimage });
    const [optionalCover, setOptionalCover] = useState({ bytes8: "", fileName8: testingimage });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });
    const navigate = useNavigate();



    // -------------------- Css code -----------------

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

    // Fetch product details if editing

    useEffect(() => {
        //  fetchCategories();
        if (productid) {
            fetchProductDetails();
        }
    }, [productid]);

    const fetchProductDetails = async () => {
        const result = await postData('product/display_product_id', { productid });
        if (result.status) {
           //console.log("dsgdsfhfdjugkufkl",result)
            setProductName(result.data[0].productname);
            setSelectedCategory(result.data[0].categoryid);
            setSelectedSubCategory(result.data[0].subcategoryid);
            setProductImage({ bytes1: "", fileName1: result.data[0].picture ? `${serverURL}/images/${result.data[0].picture}` : testingimage })
            setStampImage({ bytes2: "", fileName2: result.data[0].picture1 ? `${serverURL}/images/${result.data[0].picture1}` : testingimage })
            setImprintSize({ bytes3: "", fileName3: result.data[0].picture2 ? `${serverURL}/images/${result.data[0].picture2}` : testingimage })
            setPackaging({ bytes4: "", fileName4: result.data[0].picture3 ? `${serverURL}/images/${result.data[0].picture3}` : testingimage })
            setHandleColor({ bytes5: "", fileName5: result.data[0].picture4 ? `${serverURL}/images/${result.data[0].picture4}` : testingimage })
            setRecommendedLines({ bytes6: "", fileName6: result.data[0].picture5 ? `${serverURL}/images/${result.data[0].picture5}` : testingimage })
            setSparePad({ bytes7: "", fileName7: result.data[0].picture6 ? `${serverURL}/images/${result.data[0].picture6}` : testingimage })
            setOptionalCover({ bytes8: "", fileName8: result.data[0].picture7 ? `${serverURL}/images/${result.data[0].picture7}` : testingimage })

        } else {
            setMessage({ type: 'error', text: 'Failed to fetch product details!' });
        }
    };




    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedSubCategory || !selectedCategory || !productName.trim()) {
            setMessage({ type: 'error', text: 'All fields are required!' });
            return;
        }

        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            let result;

            const formData = new FormData();
            formData.append('categoryid', selectedCategory);
            formData.append('subcategoryid', selectedSubCategory);
            formData.append('productname', productName);
            formData.append('picture', productImage.bytes1);
            formData.append('picture1', stampImage.bytes2);
            formData.append('picture2', imprintSize.bytes3);
            formData.append('picture3', packaging.bytes4);
            formData.append('picture4', handleColor.bytes5);
            formData.append('picture5', recommendedLines.bytes6);
            formData.append('picture6', sparePad.bytes7);
            formData.append('picture7', optionalCover.bytes8);



            const formData1 = new FormData();
            formData1.append('productid', productid);
            formData1.append('categoryid', selectedCategory);
            formData1.append('subcategoryid', selectedSubCategory);
            formData1.append('productname', productName);
            formData1.append('picture', productImage.bytes1);
            formData1.append('picture1', stampImage.bytes2);
            formData1.append('picture2', imprintSize.bytes3);
            formData1.append('picture3', packaging.bytes4);
            formData1.append('picture4', handleColor.bytes5);
            formData1.append('picture5', recommendedLines.bytes6);
            formData1.append('picture6', sparePad.bytes7);
            formData1.append('picture7', optionalCover.bytes8);
            
            console.log("FormData sanjay contents:");
        formData1.forEach((value, key) => {
          console.log(key, value);
        });


            if (productid) {
                // Update existing product
                result = await postData('product/edit_product_data', formData1);
            } else {
                // Add new product
                result = await postData('product/product_submit', formData);
            }


            if (result.status === true) {
                setMessage({ type: 'success', text: result.message });
                navigate("/product");
                //alert(message.text)
            } else {
                console.error("Error submitting product:", result);
                setMessage({ type: 'error', text: 'Failed to submit product' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage({ type: 'error', text: 'Server error while submitting product' });
        }

    };



    return (
        <div className="container mt-5">
            <div className="card shadow-lg border-0 rounded-lg p-4">
                <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
                    <h5 className='mb-0'>Add New Multi Products</h5>
                    <Link to="/product" className="text-light">
                        <FaBackward className='fs-4' />
                    </Link>
                </div>
                <div className="card-body">
                {message.text && (
                <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}>
                  {message.text}
                </div>
                   )}
                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
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
                                <label className='form-label fw-bold'>Product Name</label>
                                <input type="text" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                            </div>
                        </div>
                        
                        
                        <h5 className='mt-5 p-3 text-center bg-light rounded shadow-sm'>Details Section</h5>
                        <div className='row g-3'>
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Product Image</label>
                                        <input type="file" className="form-control" onChange={(e) => setProductImage({ bytes1: e.target.files[0], fileName1: URL.createObjectURL(e.target.files[0]) })} required />
                                        {productImage.fileName1 != testingimage ? <img style={imgStyle} src={productImage.fileName1} alt="Product Preview" /> : <img style={imgStyle} src={productImage.fileName1} alt="Product Preview" />}
                                    </div>
                       
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Stamp Image</label>
                                        <input type="file" className="form-control" onChange={(e) => setStampImage({ bytes2: e.target.files[0], fileName2: URL.createObjectURL(e.target.files[0]) })} required />
                                        {stampImage.fileName2 != testingimage ? <img style={imgStyle} src={stampImage.fileName2} alt="Product Preview" /> : <img style={imgStyle} src={stampImage.fileName2} alt="Product Preview" />}
                                    </div>
                     
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Size of Imprint</label>
                                        <input type="file" className="form-control" onChange={(e) => setImprintSize({ bytes3: e.target.files[0], fileName3: URL.createObjectURL(e.target.files[0]) })} required />
                                        {imprintSize.fileName3 != testingimage ? <img style={imgStyle} src={imprintSize.fileName3} alt="Product Preview" /> : <img style={imgStyle} src={imprintSize.fileName3} alt="Product Preview" />}
                                    </div>
                       
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Packaging</label>
                                        <input type="file" className="form-control" onChange={(e) => setPackaging({ bytes4: e.target.files[0], fileName4: URL.createObjectURL(e.target.files[0]) })} required />
                                        {packaging.fileName4 != testingimage ? <img style={imgStyle} src={packaging.fileName4} alt="Product Preview" /> : <img style={imgStyle} src={packaging.fileName4} alt="Product Preview" />}
                                    </div>
                       
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Color of Handle</label>
                                        <input type="file" className="form-control" onChange={(e) => setHandleColor({ bytes5: e.target.files[0], fileName5: URL.createObjectURL(e.target.files[0]) })} required />
                                        {handleColor.fileName5 != testingimage ? <img style={imgStyle} src={handleColor.fileName5} alt="Product Preview" /> : <img style={imgStyle} src={handleColor.fileName5} alt="Product Preview" />}
                                    </div>
                      
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Recommended Lines</label>
                                        <input type="file" className="form-control" onChange={(e) => setRecommendedLines({ bytes6: e.target.files[0], fileName6: URL.createObjectURL(e.target.files[0]) })} required />
                                        {recommendedLines.fileName6 != testingimage ? <img style={imgStyle} src={recommendedLines.fileName6} alt="Product Preview" /> : <img style={imgStyle} src={recommendedLines.fileName6} alt="Product Preview" />}
                                    </div>
                       
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Spare Pad</label>
                                        <input type="file" className="form-control" onChange={(e) => setSparePad({ bytes7: e.target.files[0], fileName7: URL.createObjectURL(e.target.files[0]) })} required />
                                        {sparePad.fileName7 != testingimage ? <img style={imgStyle} src={sparePad.fileName7} alt="Product Preview" /> : <img style={imgStyle} src={sparePad.fileName7} alt="Product Preview" />}
                                    </div>
                       
                                    <div className='col-md-4'>
                                        <label className='form-label fw-bold'>Optional Cover</label>
                                        <input type="file" className="form-control" onChange={(e) => setOptionalCover({ bytes8: e.target.files[0], fileName8: URL.createObjectURL(e.target.files[0]) })} required />
                                        {optionalCover.fileName8 != testingimage ? <img style={imgStyle} src={optionalCover.fileName8} alt="Product Preview" /> : <img style={imgStyle} src={optionalCover.fileName8} alt="Product Preview" />}
                                    </div>
                        </div>

                        
                        <button type="submit" className="btn btn-success w-100 mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}


