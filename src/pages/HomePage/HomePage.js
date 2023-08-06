

import Header from '../../components/Header/Header';
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json"
import VideoSection from "../../components/VideoSection/VideoSection";
import { useState } from 'react';


function HomePage() {

    const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

    function handleNextvideo(nextVideoID) {
        const foundVideo = videoDetails.find((video) => {
            return video.id === nextVideoID
        })


        setCurrentVideo(foundVideo);
    }

    const filterVideos = videos.filter((video) => {
        return currentVideo && video.id !== currentVideo.id;
    })


    return (

        <>
            <VideoSection currentVideo={currentVideo} filterVideos={filterVideos} handleNextVideo={handleNextvideo} />

        </>
    );
}

export default HomePage; 
