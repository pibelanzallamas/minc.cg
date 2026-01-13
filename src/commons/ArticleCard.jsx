import { useParams } from "react-router-dom";
import {programming} from "../utils/programming"
import leftArrow from "../assets/programming/leftArrow.png"
import rightArrow from "../assets/programming/rightArrow.png"
import { useState } from "react";

function ArticleCard(){
  const {slug} = useParams();
  const article = programming.find(p => p.slug === slug);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);

  if(!article) return <p className="article-not-found simple-text">Article not found.</p>;

  return(
    <article className="article" key={article.id}>
      <figure className="article-title">
        <img src={article.title} alt={`article title for ${article.name}`}/>
      </figure>

      <section className="article-copete">
        <figure className="article-image">
          <img src={article.image} alt="article-image" />
        </figure>
        
        <p className="article-epigrafe simple-text">{article.epilogo.map(e =>(
          <>
            <p>{e}</p>
            <br/>
          </>
        ))}</p>
      </section>

      <section className="article-body simple-text">
        {article.body.map((p,i)=>(
          <div key={`parrafo index ${i}`}>
          <p>{p}</p>
          <br/>
          </div>
        ))}
      </section>

      <section className="arrow-section"> 
        <figure onClick={() => setActualPage(actualPage - 1)} 
        className={actualPage == 1 ? "disabled"  :"article-arrow"}>
          <img src={leftArrow} alt="" />
        </figure>
        <p className="simple-text">Page {actualPage} of {totalPages}</p>
        <figure 
        onClick={() => setActualPage(actualPage + 1)} 
        className={actualPage == totalPages ? "disabled"  :"article-arrow"}>
          <img src={rightArrow} alt="" />
        </figure>
      </section>
    </article>
  )
}

export default ArticleCard;