import "./videoDetails.scss"

const videoDetails = ({ currentVideo }) => {
    
    return (
        <>
            <div className="video-description">
                <h1 className="video-description__title">{currentVideo.title}</h1>
                <div className="video-description__info">
                    <p className="video-description__channel">{currentVideo.channel}</p>
                    <p className="video-description__time">{currentVideo.timestamp}</p>
                    <p className="video-description__views">{currentVideo.views}</p>
                    <p className="video-description__like">{currentVideo.likes}</p>
                </div>
                <p className="video-description__description">{currentVideo.description}</p>
            </div>

        </>
    )
}

export default videoDetails;