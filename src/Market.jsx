import { useEffect, useState } from 'react'
import ItemCard from './commons/ItemCard.jsx'
import marketTitle from "./assets/market/marketTitle.png"
import descriptionBox from "./assets/market/descriptBox.png"
import viewCart from "./assets/market/viewCart.png"
import { Link } from 'react-router-dom'
import axios from 'axios'

function Market(){
  const [allProducts, setAllProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://minc-cg-back.onrender.com/products"
        );
        setAllProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return(
    <main className="content-page">
      <figure className="content-title-text">
        <img src={marketTitle} alt="market-title" />
      </figure>

      <section className="description-section">
        <figure className="description-box">
          <img src={descriptionBox} alt="market-title" />
        </figure>
        <Link to={"/"}>
          <figure className="view-cart">
            <img src={viewCart} alt="market-title" />
          </figure>
        </Link>
      </section>

      <div className='market-div'>
        <section className="market">
          {allProducts.length > 0 && allProducts.map((e)=>(
            <ItemCard itemData={e} />
          ))}
        </section>
      </div>
    </main>
  )


}

export default Market;