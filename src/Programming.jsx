import ArticleCard from "./commons/ArticleCard"
import programTitle from "./assets/programming/programTitle.png"
import introProgam from "./assets/programming/BoxNewVersion.png"
import globe from "./assets/programming/globe.png"
import {programming} from "./utils/programming"
import { Link } from "react-router-dom"

function Programming(){
  return(
    <main className="content-page">
      <figure className="content-title-text programming-title">
        <img src={programTitle} alt="programming-title" />
      </figure>

      <figure className="programming-description">
        <img src={introProgam} alt="market-title" />
      </figure>

      <figure className="programming-image">
        <img src={globe} alt="globe-icon" />
      </figure>

      <div className="articles-grid">
        {programming.map(e =>(
          <div className="one-article-button">
            <figure className="article-image-select">
              <img src={e.image} alt="union-black-flag" />
            </figure> 
            <Link key={e.id} to={`/programming/${e.slug}`}>
              <figure className="article-title-select">
                <img src={e.titleSelected} alt="union-black-flag" />
              </figure> 
            </Link>
            <div className="simple-text article-description-select">{e.epilogoSelected.split("\n\n").map((paragraph, index) => 
            (<><p key={index}>{paragraph}</p><br/></>))}</div>
          </div>
        ))}
      </div>
      

    </main>
  )
}

export default Programming;