import aboutUs from "./assets/home/aboutBox.png"
import menuBox from "./assets/buttons/oneBoxShadow.png"
import menuBoxSel from "./assets/buttons/menuBoxesShadowSel.png"

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