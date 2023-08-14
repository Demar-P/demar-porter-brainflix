import "./UploadPage.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import publish from '../../assets/icons/publish.svg';

function UploadPage() {

    const newState = {
        title: "",
        description: ""
    }

    const [formData, setFormData] = useState({ ...newState })

    const handleFormChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }



    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault()
        const title = formData.title
        const description = formData.description
        axios.post('http://localhost:8081/videos', { title, description, })
            .then(response => {
            })
        alert("Upload Complete");
        navigate("/");
    }
    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <h4 className="upload__subheader">VIDEO THUMBNAIL</h4>
            <img className="upload__img" src={UploadImage} alt="Uploaded-video" />
            <h4 className="upload__title">TITLE YOUR VIDEO</h4>
            <form>
                <div className="upload__input" >
                    <label >TITLE YOUR VIDEO</label>
                    <input onChange={handleFormChange} value={formData.title} name="title" className="upload__input--area" type="text" placeholder="Add a title to your video" />
                </div>

                <div className="upload__input--description">
                    <label>Add A VIDEO DESCRIPTION</label>
                    <input onChange={handleFormChange} value={formData.description} name="description" type="textarea" className="upload__input--textarea" placeholder="Add a description to your video" />
                </div>
                <div className="upload__input--button-section" >
                    <button className="upload__input--publish" onClick={handleFormSubmit}><img src={publish} alt="publish icon" />Publish</button>

                </div>
                <div className="upload__input--button--cancel">
                    
                    <button className="upload__input--cancel">Cancel</button>
                </div>
            </form>
        </div>

    )


};

export default UploadPage;