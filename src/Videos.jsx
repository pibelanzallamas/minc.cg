import VideoCard from './Commons/VideoCard'
import videos from "./utils/videos.js"

function Videos() {
 
  return (
    <main className="videos-page">
      <div className="video-title-text">
        <h2>VIDEOS</h2>
      </div>

      <section className="videos">
       {videos.map((e)=>(
          <VideoCard videoData={e} />
       ))}
      </section>
      
    </main>
  )
}

export default Videos;
