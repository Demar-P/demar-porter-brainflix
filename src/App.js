import './App.scss';
import Header from './components/Header/Header';
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json"
import VideoSection from "./components/VideoSection/VideoSection";
import { useState } from 'react';


function App() {

  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);

  function handleNextvideo(nextVideoID) {
    const foundVideo = videoDetails.find((video) => {
      return video.id === nextVideoID
    })
    console.log('this is the next video on app.js ', nextVideoID, foundVideo, 'this is the foundVideo')

    setCurrentVideo(foundVideo);
  }

  const filterVideos = videos.filter((video) => {
    return currentVideo && video.id !== currentVideo.id;
  })


  return (
    <>
      <Header />
      <VideoSection currentVideo={currentVideo} filterVideos={filterVideos} handleNextVideo={handleNextvideo} />

    </>
  );
}

export default App; 
