

function ItemCard({itemData}){

  return(
    <div className="item-card">
      <figure className="item-image"><img src={itemData.image}/></figure>
      <p className="item-title">{itemData.title}</p>
      <p className="item-size-">{itemData.size}</p>
      <p className="item-price">{itemData.price}</p>
      <button className="add-to-cart-button"></button>
    </div>

  )
}

export default ItemCard;