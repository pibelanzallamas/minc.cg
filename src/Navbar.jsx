import logo from "./assets/logo/CGCmincLogo.svg"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import menuButton from "./assets/buttons/menuBttn@300x.png"
import menuLine from "./assets/buttons/menuLine.svg"
import pButton from "./assets/buttons/proBttn@300x.png"
import vButton from "./assets/buttons/VidBttn@300x.png"
import mButton from "./assets/buttons/markBttn@300x.png"
import newButton from "./assets/buttons/new@300x.png"

function Navbar() {
    const location = useLocation();
    const links = [
    { to: "/programming", title: "PROGRAMMING" },
    { to: "/videos", title: "VIDEOS" },
    { to: "/market", title: "MARKET" },
  ];
    const [clicked, setClicked] = useState(false);
    const [link, setLink] = useState("");

    const handleHambu = () => {
        setClicked(!clicked);
    };

    useEffect(() => {
        if (location.pathname == "/") {
            setLink("");
        }
    }, [location]);

    return(
        <>
        <nav className='navbar'>
          <Link to="/" className='navbar-logotipo'>
              <img src={logo} alt='cgcminic-logo'></img>
          </Link>
          
          <ul className="navbar-menu-desktop">
            <figure className="navbar-extra-button">
              <img src={pButton}></img>
            </figure>
            <figure className="navbar-extra-button">
              <img src={vButton}></img>
            </figure>
            <figure className="navbar-extra-button new-button-div">
              <img src={mButton}></img>
              <figure className="new-button">
                <img src={newButton}></img>
              </figure>
            </figure>
          </ul>

          <figure className="navbar-menu-button">
            <img onClick={()=>handleHambu()} src={menuButton}></img>
            <figure  className={clicked ? "navbar-menu-line" : "menu-closed"}>
              <img src={menuLine}></img>
            </figure>  
          </figure>
        </nav>

        <div className={clicked ? "extra-menu" : "menu-closed"}>
          <ul className="extra-menu-buttons-div">
            <figure className="navbar-extra-button">
              <img src={pButton}></img>
            </figure>
            <figure className="navbar-extra-button">
              <img src={vButton}></img>
            </figure>
            <figure className="navbar-extra-button new-button-div">
              <img src={mButton}></img>
              <figure className="new-button">
                <img src={newButton}></img>
              </figure>
            </figure>
          </ul>
        </div>
      </>
    )
}

export default Navbar;