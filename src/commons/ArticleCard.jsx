import { useParams } from "react-router-dom";
import {programming} from "../utils/programming"


function ArticleCard({articleData}){
  const {slug} = useParams();
  const article = programming.find(p => p.slug === slug);

  if(!article) return <p className="article-not-found simple-text">Article not found.</p>;

  return(
    <article className="article">
      <figure className="article-title">
        <img src={article.title} alt={`article title for ${article.name}`}/>
      </figure>

      <section className="article-copete">

        <figure className="article-image">
          <img src={article.image} alt="" />
        </figure>
        
        <p className="article-epigrafe simple-text">{article.epilogo}</p>

      </section>

      <section className="article-body simple-text">
        {article.body.map((p,i)=>(
          <div key={`parrafo index ${i}`}>
          <p>{p}</p>
          <br/>
          </div>
        ))}
      </section>
      

    </article>
  )
}

export default ArticleCard;