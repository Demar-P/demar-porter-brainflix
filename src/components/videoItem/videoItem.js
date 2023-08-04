import './videoItem.scss'

function videoItem({ title, id, handleNextVideo, image, channel }) {
    console.log('ID in video is', id)
    return (
        <>
            <hr />
            <div className="new-video" onClick={() => handleNextVideo(id)}>
                <div className="new-video__img">
                    <img className="next-video__img--item" src={image} alt="" />
                </div>
                <div className="next-video__text">
                    <p className='next-video__title'>{title}</p>
                    <p className='next-video__channel'>{channel}</p>
                </div>
            </div>
        </>
    )
}



export default videoItem;