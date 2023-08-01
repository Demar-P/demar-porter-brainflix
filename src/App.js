
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json"
import VideoInfo from "./components/VideoSection/VideoSection";


function App() {

  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  const handleNextvideo = nextVideo => {
    const foundVideo = videoDetails.find(video => nextVideo.id === video.id)
    setCurrentVideo(foundVideo);
  }

    const filterVideos = videos.filter(video => video.id );
  return(
    <>
      <Header />  
      <VideoInfo currentVideo={currentVideo} filterVideos={filterVideos} handleNextVideo={handleNextvideo} />
    </>
  );
}

export default App; 
