import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import NextVideos from "../nextVideos/nextVideos";
import VideoDetails from "../videoDetails/videoDetails";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import axios from "axios";
import "./VideoSection.scss";


const VideoSection = ({ displayVideoId, filteredVideos, }) => {

    const [currentVideo, setCurrentVideo] = useState(null);

    const url = `http://localhost:8081/videos/${displayVideoId}`

    //const baseurl = localhost

    useEffect(() => {

        if (displayVideoId === null) return;
        axios.get(url)
            .then(({ data }) => {
                setCurrentVideo(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [displayVideoId, url,])


    if (currentVideo === null) {
        return <h2>Loading...</h2>
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