import "./VideoPlayer.scss";


const videoPlayer = ({currentVideo}) => {
    return(
        <>
            <video className="video__player" src={currentVideo.video} poster={currentVideo.image} controls />
                
        </>
    )
}

export default videoPlayer;