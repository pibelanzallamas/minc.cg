import ArticleCard from "./commons/ArticleCard"
import programTitle from "./assets/programming/programTitle.png"
import introProgam from "./assets/programming/BoxNewVersion.png"
import globe from "./assets/programming/globe.png"
import flag from "./assets/programming/flag.png"
import unionBlackTitle from "./assets/programming/UBtitle.png"
import uBDescription from "./assets/programming/description.png"
import {programming} from "./utils/programming"

function Programming(){
  return(
    <main className="content-page">
      <figure className="content-title-text">
        <img src={programTitle} alt="programming-title" />
      </figure>

      <figure className="description-box">
        <img src={introProgam} alt="market-title" />
      </figure>

      <figure className="description-box">
        <img src={globe} alt="globe-icon" />
      </figure>
{/* 
      <figure className="description-box">
        <img src={flag} alt="union-black-flag" />
      </figure>

      <figure className="description-box">
        <img src={unionBlackTitle} alt="union-black-title" />
      </figure>

      <figure className="description-box">
        <img src={uBDescription} alt="description-black-union" />
      </figure> */}

      <div className="articles-grid">
        {programming.map(e =>(
          <div className="one-article-button">
            <figure className="article-image-select">
              <img src={e.image} alt="union-black-flag" />
            </figure> 
            <figure className="article-title-select">
              <img src={e.titleSelected} alt="union-black-flag" />
            </figure> 
            <div className="article-description-select">{e.epilogoSelected.split("\n\n").map((paragraph, index) => 
            (<><p key={index}>{paragraph}</p><br/></>))}</div>
          </div>
        ))}
      </div>
      

    </main>
  )
}

export default Programming;