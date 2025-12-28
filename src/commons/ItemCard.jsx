import addToCard from "../assets/market/addToCart.png"

function ItemCard({itemData}){

  return(
    <div className="item-card">
      <figure className="item-image"><img src={itemData.image}/></figure>
      <div className="item-info">
        <p className="item-title">{itemData.title}</p>
        <div className="item-description">
          <p className="item-size-">{itemData.size}</p>
          <p className="item-price">{Math.trunc(itemData.price)}</p>
        </div>
      </div>
      <figure className="add-to-cart"><img src={addToCard} alt="" /></figure>
    </div>

  )
}

export default ItemCard;