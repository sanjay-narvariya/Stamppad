import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import { postData, getData } from "../services/FetchNodeAdminServices";
import { serverURL } from "../services/FetchNodeAdminServices";
import testingimage from "./Brand-icon.png"

export default function MainbannerForm() {
          
             const { bannerid } = useParams(); // Get bannerid from URL
             const [bannerName, setBannerName] = useState('');
             const [bannerMessage, setBannerMessage] = useState('');
             const [filenames, setFilenames] = useState({ bytes: "", fileName: testingimage })
             const [message, setMessage] = useState({ type: '', text: '' })
             const [loading, setLoading] = useState(false);
             const navigate = useNavigate();


          
             const imgStyle = {
                width: "50px",
                height: "50px",
                objectFit: "cover",
                borderRadius: "2rem",
            };



            
    // Fetch MainBanner details if editing
        useEffect(() => {
                if (bannerid) {
                  fetchMainBannerDetails();
                }
              }, [bannerid]);
            
    const fetchMainBannerDetails = async () => {
                var result = await postData('mainbanner/display_mainbanner_id', { bannerid: bannerid });
                if (result.status) {
                   setFilenames({ bytes: result.data.pictures, fileName: `${serverURL}/images/${result.data.pictures}`})
                   setBannerName(result.data.bannername);
                   setBannerMessage(result.data.message)
                } else {
                  setMessage({ type: 'error', text: 'Failed to fetch category details!' });
                }
              };
            
       /************************************************************************ */     
            
             
    const handleImage = (e) => {
        setFilenames({ bytes: e.target.files[0], fileName: URL.createObjectURL(e.target.files[0]) })
    }


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        if (!filenames.bytes) {
            setMessage({ type: 'error', text: "Please upload a picture." });
            return;
        }
    
        setLoading(true);
        setMessage({ type: '', text: '' });
    
        try {
                 let formData = new FormData();
            
            formData.append('pictures', filenames.bytes);
            formData.append('bannername', bannerName);
            formData.append('message', bannerMessage);
    
            let result;
            if (bannerid) {
                formData.append("bannerid", bannerid);
                result = await postData('mainbanner/edit_mainbanner_data', formData);
            } else {
                result = await postData('mainbanner/mainbanner_submit', formData);
            }
    
            if (result.status) {
                setMessage({ type: 'success', text: bannerid ? 'MainBanner updated successfully!' : 'MainBanner added successfully!' });
    
                // Wait for a short delay before navigating
                setTimeout(() => {
                    navigate('/mainbanner'); // Navigate smoothly without reloading
                }, 1000);
            } else {
                setMessage({ type: 'error', text: result.message || 'Something went wrong!' });
            }
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to connect to the server!' });
        } finally {
            setLoading(false);
        }
    };
    

return(
    <div className="container mt-5">
          <div className="card shadow-lg border-0 rounded-lg p-4">
            <div className="card-header bg-primary text-light d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Add Main Banner</h5>
              <Link to="/mainbanner" className="text-light">
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
                <div className="mb-3">
                   <label htmlFor="mainbanner" className="form-label">Banner Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryname"
                    placeholder="Enter category name"
                    value={bannerName}
                    onChange={(e) => setBannerName(e.target.value)}
                    required
                  /> 
                </div>

                <div className="mb-3">
                   <label htmlFor="mainbanner" className="form-label">Banner Message</label>
                  <input
                    type="text"
                    className="form-control"
                    id="categoryname"
                    placeholder="Enter category name"
                    value={bannerMessage}
                    onChange={(e) => setBannerMessage(e.target.value)}
                    required
                  /> 
                </div>
    
                <div className='mb-3'>
                  <label className='form-label fw-bold'>Banner Pictures</label>
                  <input type="file" className="form-control" onChange={handleImage} accept="image/*" />
                  {filenames.fileName != testingimage ? <img style={imgStyle} src={filenames.fileName} alt="Product Preview" /> : <img style={imgStyle} src={filenames.fileName} alt="Product Preview" />}
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