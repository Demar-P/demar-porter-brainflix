import VideoItem from '../videoItem/videoItem';


function NextVideos({ filteredVideos, displayVideoId }) {

    return (
        <>  {
            filteredVideos.map((video) => (
                <VideoItem
                    key={video.id}
                    title={video.title}
                    id={video.id}
                    channel={video.channel}
                    image={video.image}
                />
            ))}

        </>
    );
}

export default NextVideos;