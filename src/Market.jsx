import ItemCard from './commons/ItemCard.jsx'
import marketTitle from "./assets/market/marketTitle.png"
import {market} from "./utils/market.js"
import descriptionBox from "./assets/market/descriptBox.png"
import viewCart from "./assets/market/viewCart.png"

function Market(){
  return(
    <main className="content-page">
      <figure className="content-title-text">
        <img src={marketTitle} alt="market-title" />
      </figure>

      <section className="description-section">
        <figure className="description-box">
          <img src={descriptionBox} alt="market-title" />
        </figure>
        <figure className="view-cart">
          <img src={viewCart} alt="market-title" />
        </figure>
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