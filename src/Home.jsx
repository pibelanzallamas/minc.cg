import greetingsMsg from "./assets/home/greetings.png"
import bar from "./assets/home/whiteBar@300x.png"
import leftCharacter from "./assets/home/characterLeft.png"
import rightCharacter from "./assets/home/characterRight.png"

function Home() {
  return(
    <main className="welcome-page">
      <figure className="home-figures figure-a">
          <img src={leftCharacter}></img>
      </figure>
      <section className="greetings-section">
        <figure className="greetings-message">
          <img src={greetingsMsg}></img>
        </figure>
        <figure className="home-char-bar">
          <img src={bar}></img>
        </figure> 
      </section>
      <figure className="home-figures figure-b">
          <img src={rightCharacter}></img>
      </figure>
    </main>
  )
}

export default Home;