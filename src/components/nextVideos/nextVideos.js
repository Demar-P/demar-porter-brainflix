import VideoItem from '../videoItem/videoItem';


function NextVideos ({filterVideos, handleNextVideo}){
    console.log('filtervideo', filterVideos)
    return(
        <>  {
            filterVideos.map((video) => (
                <VideoItem
                    key={video.id}
                    title={video.title}
                    
                    channel={video.channel}
                    image={video.image}
                    handleNextVideo={handleNextVideo} 
                />
            ))}
        
        </>
    );
}

export default NextVideos;