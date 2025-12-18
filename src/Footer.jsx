import aboutUs from "./assets/home/aboutBox.png"

function Footer() {
  return(
    <footer>
      <figure className="about-us-button">
        <img src={aboutUs} alt="" />
      </figure>
    </footer>

  )
}

export default Footer;