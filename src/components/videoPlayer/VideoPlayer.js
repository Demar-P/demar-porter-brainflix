import "./VideoPlayer.scss";


const videoPlayer = ({ currentVideo }) => {

    console.log("we are now display", currentVideo.image, "and", currentVideo.id)

    return (
        <>
            <video className="video__player" poster={currentVideo.image} controls />

        </>
    )
}

export default videoPlayer;