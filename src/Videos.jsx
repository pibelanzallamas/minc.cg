import VideoCard from './commons/VideoCard.jsx'
import videos from "./utils/videos.js"
import videoTit from "./assets/videos/title.png"

function Videos() {
 
  return (
    <main className="videos-page">
      <figure className="video-title-text">
        <img src={videoTit} alt="video-title" />
      </figure>

      <section className="videos">
       {videos.map((e)=>(
          <VideoCard videoData={e} />
       ))}
      </section>
    </main>
  )
}

export default Videos;
