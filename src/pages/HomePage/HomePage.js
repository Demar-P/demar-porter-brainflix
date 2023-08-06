

import Header from '../../components/Header/Header';
// import videos from "../../data/videos.json";
// import videoDetails from "../../data/video-details.json"
import VideoSection from "../../components/VideoSection/VideoSection";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function HomePage() {

    const url = "https://project-2-api.herokuapp.com/videos?api_key=";
    const api_key = "e314b07d-ff58-46bc-8d67-ffb94d5b6c05"

    let { videoId } = useParams();
    const [videos, setVideos] = useState([]);

    let displayId = null;

    if (videos.length > 0) {
        displayId = videos[0].id;
    }

    const displayVideoId = videoId !== undefined ? videoId : displayId

    useEffect(() => {
        axios.get(url + api_key)
            .then(({ data }) => {
                setVideos(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])


    const filteredVideos = videos.filter(video => video.id !== displayVideoId);

    return (

        <>
            <VideoSection filteredVideos={filteredVideos} displayVideoId={displayVideoId} videos={videos} api_key={api_key} />

        </>
    );
}

export default HomePage; 
