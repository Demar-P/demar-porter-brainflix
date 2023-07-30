
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import videos from "./data/videos.json";
import videoDetails from "./data/video-details.json"


function App() {

  const [current, setCurrentVideo] = useState(videoDetails[0]);

  const handleNextvideo = nextVideo => {
    const foundVideo = videoDetails.find(video => nextVideo.id ===video.id)
    setCurrentVideo(foundVideo);
  }

    const filterVideos = videos.filter(video => video.id )
  return (
    <>
    <div className="App">
    <Header />  
     <videoSection currentvideo=(currentvideo) 
    </div>
    </>
  );
}

export default App;
