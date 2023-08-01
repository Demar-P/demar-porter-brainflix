import "./videoDetails.scss"

const videoDetails =({title, channel, timestamp, views, likes, description}) => {
    return(
        <>
        <div className="video-description">
        <h1 className="video-description__title">{title}</h1>
        <div className="video-description__info">
        <p className="video-description__channel">{channel}</p>
        <p className="video-description__time">{timestamp}</p>
        <p className="video-description__views">{views}</p>
        <p className="video-description__like">{likes}</p>
        </div>
        <p className="video-description__description">{description}</p>
        </div>
        </>
    )
}

export default videoDetails;