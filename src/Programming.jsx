import programTitle from "./assets/programming/programTitle.png"
import introProgam from "./assets/programming/introProgram.png"

function Programming(){
  return(
    <main className="content-page">
      <figure className="content-title-text">
        <img src={programTitle} alt="video-title" />
      </figure>

      <section className="description-section">
        <figure className="description-box">
          <img src={introProgam} alt="market-title" />
        </figure>
      </section>

    </main>
  )
}

export default Programming;