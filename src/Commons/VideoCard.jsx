function VideoCard({videoData}){

  return(
    <div className="video-card-box">
      <figure className="image-video">
        <img src={videoData.image}/>
      </figure>

     <figure className="title-video">
        <img src={videoData.title}/>
      </figure>
      <div className="text-video">
        <p>{videoData.desc}</p>
      </div>
    </div>

  )
}

export default VideoCard;