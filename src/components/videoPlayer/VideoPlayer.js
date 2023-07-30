


const videoPlayer = ({currentvideo}) =>{
    return(
        <>
            <video className="video__player" src={currentvideo} poster={currentvideo.image}></video>
        </>
    )
}

export default videoPlayer