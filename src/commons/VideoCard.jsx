import nikeShoe from "../assets/videos/MT_shoe@300x.png"

function VideoCard({videoData}){

  return(
    <div className="video-card-box">
      <figure className="image-video">
        <img src={videoData.image}/>
        {videoData.link=="https://www.youtube.com/watch?v=mKruZdXavMk"
        ? <div className="shoe-diver"> 
            <img className="nike-shoe" src={nikeShoe}/>
          </div>
        :<></>}
      </figure>
      
      <a href={videoData.link} target="_blank">
        <figure className="title-video">
          <img src={videoData.title}/>
        </figure>
      </a>

      <div className="text-video">
        <p>{videoData.desc}</p>
      </div>
    </div>

  )
}

export default VideoCard;