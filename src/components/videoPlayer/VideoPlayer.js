import "./VideoPlayer.scss";


const videoPlayer = ({ currentVideo }) => {

    

    return (
        <>
            <video className="video__player" poster={currentVideo.image} controls />

        </>
    )
}

export default videoPlayer;