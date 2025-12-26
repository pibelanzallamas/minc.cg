import ItemCard from './commons/ItemCard.jsx'
// import marketTitle from "./assets/market/"
import {market} from "./utils/market.js"

function Market(){
  return(
    <main className="content-page">
      <figure className="content-title-text">
        {/* <img src={marketTitle} alt="market-title" /> */}
      </figure>
      <section className="card-section">

      </section>

      <section className="market">
        {market.map((e)=>(
          <ItemCard itemData={e} />
        ))}
      </section>
    </main>
  )


}

export default Market;