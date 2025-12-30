import aboutUs from "./assets/home/aboutUsText.png"
import menuBox from "./assets/buttons/oneBoxShadow.png"
import menuBoxSel from "./assets/buttons/menuBoxesShadowSel.png"
import { Link } from "react-router-dom"

function Footer() {
  return(
    <footer>
      <div className="about-us">
        <figure className="about-us-text">
          <img src={aboutUs}></img>
        </figure>
        <Link to="/about-us" className="about-us-link">
          <figure className=" about-us-box"><img src={menuBox} alt="" /></figure>
          <figure className=" about-us-sel-box"><img src={menuBoxSel} alt="" /></figure>
        </Link>
      </div>
    </footer>

  )
}

export default Footer;