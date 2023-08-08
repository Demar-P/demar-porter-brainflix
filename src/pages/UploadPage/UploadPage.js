import "./UploadPage.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";

function UploadPage() {

    return (
        <div className="upload">
            <h1 className="upload__header">Upload Video</h1>
            <h4 className="upload__subheader">VIDEO THUMBNAIL</h4>
            <img className="upload__img" src={UploadImage} alt="Uploaded-video" />
            <h4 className="upload__title">TITLE YOUR VIDEO</h4>
            <form>
                <div className="upload__input" >
                    <label >TITLE YOUR VIDEO</label>
                    <input className="upload__input--area" type="text" placeholder="Add a title to your video" />
                </div>

                <div className="upload__input--description">
                    <label>Add A VIDEO DESCRIPTION</label>
                    <input type="textarea" className="upload__input--textarea" placeholder="Add a description to your video" />
                </div>
                <div className="upload__input--button-section" >
                    <button className="upload__input--publish">Publish</button>
                </div>
                <div className="upload__input--buton--cancel">
                    <button className="upload__input--cancel">Cancel</button>
                </div>
            </form>
        </div>

    )


};

export default UploadPage;