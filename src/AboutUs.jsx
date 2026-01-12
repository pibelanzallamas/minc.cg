import instagramIcon from "./assets/aboutus/instagram.png";
import descriptionIcon from "./assets/aboutus/description.png";
import namingIcon from "./assets/aboutus/naming.png";
import globeIcon from "./assets/aboutus/globe.png";

function AboutUs(){
  return (
    <main className="content-page about-us-page">
      <figure className="aboutus-world">
        <img src={globeIcon} loading="lazy" alt="Global reach icon" />
      </figure>

      <section className="simple-text about-us-credits">
        <p><span className="yellow">Name: </span> 
        <span className="minc-title">CGC MINC</span></p>
        <p><span className="yellow">Know as: </span> 
        <span className="">MINC</span></p>
        <p><span className="yellow">Also know as: </span> 
        <span className="">MINC.CG / M.INC</span></p>
      </section>

      <section className="simple-text about-us-services">
        <p>Art & Design Studio . Observatory . Science Facility . Social Research Institute </p>
        <p>Global Network . Documentation . Distribution . Programming .</p>
      </section>

      <a href="https://www.instagram.com/minc.cg/" target="_blank">
        <figure className="instagram-link">
          <img src={instagramIcon} alt="Instagram integration icon" />
        </figure>
      </a>

    </main>
  )

}

export default AboutUs;