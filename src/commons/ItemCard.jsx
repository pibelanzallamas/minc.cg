import addToCard from "../assets/market/addToCartAlone.png"
import menuBox from "../assets/buttons/oneBoxShadow.png"
import menuBoxSel from "../assets/buttons/menuBoxesShadowSel.png"
import { Link } from "react-router-dom"


function ItemCard({itemData}){

  return(
    <div className="item-card">
      <figure className="item-image"><img src={itemData.image}/></figure>
      
      <p className="item-title">{itemData.title}</p>
      
      <div className="item-size-price">
        {itemData.size == "Raffle Tickets" ? <div className="raffle-ticket">Raffle Tickets</div>
        : <p className="item-size-">{itemData.size}</p>}
        <p className="item-price">£{Math.trunc(itemData.price)}</p>
      </div>
      
      <div className="about-us add-to-cart">
        <figure className="add-to-cart-text"><img src={addToCard} alt="" /></figure>
        <Link to="/about-us" className="about-us-link add-link">
          <figure className="about-us-box add-cart-box"><img src={menuBox} alt="" /></figure>
          <figure className="about-us-sel-box add-cart-box-sel"><img src={menuBoxSel} alt="" /></figure>
        </Link>
      </div>
    </div>

  )
}

export default ItemCard;