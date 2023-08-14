import "./videoDetails.scss"
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';

const videoDetails = ({ currentVideo }) => {
    let d = new Date(currentVideo.timestamp);
    let date = `${(d.getMonth() + 1)}/${d.getDate()}/${d.getFullYear()}`;


    return (
        <>
            <div className="video-description">
                <h1 className="video-description__title">{currentVideo.title}</h1>
                <div className="video-description__info">
                    <div>
                        <p className="video-description__channel">By {currentVideo.channel}</p>
                        <p className="video-description__time">{date}</p>
                    </div>
                    <div className="video-description__right">
                        <div className="video-description__views-container">
                            <img src={views} alt="Views icon" className="views__icon" />
                            <p className="video-description__views">{currentVideo.views}</p>

                        </div>
                        <div className="video-description__likes-container">
                            <img src={likes} alt="likes icon" className="likes__icon" />
                            <p className="video-description__likes">{currentVideo.likes}</p>
                        </div>
                    </div>
                </div>
                <p className="video-description__description">{currentVideo.description}</p>
            </div>

        </>
    )
}

export default videoDetails;