import greetings from "./assets/home/greetings@300x.png"
import oo from "./assets/home/00@300x.png"
import bar from "./assets/home/whiteBar@300x.png"



function Home() {
    return(
      <main>
        <figure className="home-figures">
            <img src={""}></img>
        </figure>
        <div className="home-mobile">
          <figure className="greetings-message">
            <img src={greetings}></img>
          </figure>
          <figure className="home-white-bar">
            <img src={bar}></img>
          </figure> 
        </div>
        <figure className="home-figures">
            <img src={""}></img>
        </figure>
      </main>
    )
}

export default Home;