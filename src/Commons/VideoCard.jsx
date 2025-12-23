function VideoCard({videoData}){

  return(
    <div className="video-card-box">
      <figure>
        <img src={videoData.image}/>
      </figure>
     <figure>
        <img src={videoData.title}/>
      </figure>
      <figure>
        <img src={videoData.desc}/>
      </figure>
    </div>

  )
}

export default VideoCard;