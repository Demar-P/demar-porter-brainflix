import VideoItem from '../videoItem/videoItem';
// console.log(videoItem);

function NextVideos ({filterVideos, handleNextVideo}){
    console.log('filtervideo', filterVideos)
    return(
        <>  {
            filterVideos.map((video) => (
                <VideoItem
                    key={video.id}
                    title={video.title}
                    id={video.id}
                    handleNextVideo={handleNextVideo} 
                />
            ))}
        
        </>
    );
}

export default NextVideos;