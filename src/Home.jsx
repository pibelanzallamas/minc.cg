import greetings from "./assets/home/greetings@300x.png"
import oo from "./assets/home/00@300x.png"
import bar from "./assets/home/whiteBar@300x.png"



function Home() {
    return(
      <main>
        <div className="home-mobile">
          <figure className="greetings-message">
            <img src={greetings}></img>
          </figure>
          <figure className="home-white-bar">
            <img src={bar}></img>
          </figure> 
        </div>
      </main>
    )
}

export default Home;