

const NextVideos = ({filterVideos, handleNextVideo}) =>{
    if (!filterVideos || !Array.isArray(filterVideos)) {
        return null;}
    const elements = filterVideos.map (videos => {
        console.log('videos:', videos)
        return(
            <>
            <hr />
            <div className="new-video" onClick={()=> {handleNextVideo(videos)}}>
                <div className="new-video__img">
                <img className="next-video__img--item" src={videos.image} alt="" />
                </div>
                <div className="next-video__text">
                    {videos.title}
                    {videos.channel}
                </div>
            </div>
            </>
        )
    })
    return(
        <>
        {elements}
        </>
    )

}

export default NextVideos;