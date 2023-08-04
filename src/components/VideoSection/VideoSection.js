import Comments from "../Comments/Comments";
import NextVideos from "../nextVideos/nextVideos";
import VideoDetails from "../videoDetails/videoDetails";
import VideoPlayer from "../videoPlayer/VideoPlayer";


const VideoSection = ({ currentVideo, filterVideos, handleNextVideo }) => {
    console.log('This is the current Video', currentVideo)
    return (
        <>
            <div className="videos">
                <VideoPlayer currentVideo={currentVideo} />
                <VideoDetails currentVideo={currentVideo} />
                <Comments comments={currentVideo.comments} />
                <NextVideos filterVideos={filterVideos} handleNextVideo={handleNextVideo} />


            </div>
        </>

    );

}

export default VideoSection;