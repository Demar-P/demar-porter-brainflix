



import VideoSection from "../../components/VideoSection/VideoSection";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function HomePage() {

    const url = "http://localhost:8081/videos";


    let { videoId } = useParams();
    const [videos, setVideos] = useState([]);

    let displayId = null;

    if (videos.length > 0) {
        displayId = videos[0].id;
    }

    const displayVideoId = videoId !== undefined ? videoId : displayId

    useEffect(() => {
        axios.get(url)
            .then(({ data }) => {
                setVideos(data);

            })
            .catch(error => {
                alert(error);
            })
    }, [])


    const filteredVideos = videos.filter(video => video.id !== displayVideoId);

    return (

        <>
            <VideoSection filteredVideos={filteredVideos} displayVideoId={displayVideoId} videos={videos} />

        </>
    );
}

export default HomePage; 
