import VideoItem from '../videoItem/videoItem';


function NextVideos({ filterVideos, handleNextVideo }) {

    return (
        <>  {
            filterVideos.map((video) => (
                <VideoItem
                    key={video.id}
                    title={video.title}
                    id={video.id}
                    channel={video.channel}
                    image={video.image}
                    handleNextVideo={handleNextVideo}
                />
            ))}

        </>
    );
}

export default NextVideos;