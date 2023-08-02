// import VideoData from "../../data/videos.json";

function videoItem({title,id, handleNextVideo, image}){
    return(
        <>
        <hr />
        <div className="new-video" onClick={()=> handleNextVideo(id)}>
            <div className="new-video__img">
            <img className="next-video__img--item" src={image} alt="" />
            </div>
            <div className="next-video__text">
                {title}
                {/* {channel} */}
            </div>
        </div>
        </>
    )
}



export default videoItem;