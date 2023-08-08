import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import NextVideos from "../nextVideos/nextVideos";
import VideoDetails from "../videoDetails/videoDetails";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import axios from "axios";
import "./VideoSection.scss";


const VideoSection = ({ displayVideoId, filteredVideos, api_key }) => {
    console.log("THIS is the displayed Id, ", displayVideoId)
    const [currentVideo, setCurrentVideo] = useState(null);

    const url = `https://project-2-api.herokuapp.com/videos/${displayVideoId}?api_key=`

    useEffect(() => {

        if (displayVideoId === null) return;
        axios.get(url + api_key)
            .then(({ data }) => {
                setCurrentVideo(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [displayVideoId, url, api_key])


    if (currentVideo === null) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <div className="videos">
                <VideoPlayer currentVideo={currentVideo} />
                
                <article className="article-container">
                    {/*  article flex , desktop */}

                    <section className="left">
                        <VideoDetails currentVideo={currentVideo} />
                        <Comments comments={currentVideo.comments} />
                    </section>

                    <section className="right">
                        <NextVideos displayVideoId={displayVideoId} filteredVideos={filteredVideos} />
                    </section>
                </article>


            </div>
        </>

    );

}

export default VideoSection;