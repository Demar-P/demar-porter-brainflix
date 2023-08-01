import NextVideos from "../nextVideos/nextVideos";
import VideoDetails from "../videoDetails/videoDetails";
import VideoPlayer from "../videoPlayer/VideoPlayer";

const VideoInfo = ({currentVideo, filteredVideo, handleNextVideo}) => {
    return (
        <>
        <div className="videos">
        <VideoPlayer currentVideo={currentVideo} />
        <VideoDetails title={currentVideo.title} channel={currentVideo.channel} time={currentVideo.timestamp} views={currentVideo.views} likes={currentVideo.likes} description={currentVideo.description}/>
        <NextVideos filteredVideos={filteredVideo} handleNextVideo={handleNextVideo} />
        </div>
        </>

    );

}

export default VideoInfo;