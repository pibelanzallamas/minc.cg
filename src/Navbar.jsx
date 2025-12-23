import logo from "./assets/logo/CGCmincLogo.svg"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import menuButton from "./assets/buttons/menuBttn@300x.png"
import menuLine from "./assets/buttons/menuLine.svg"
import pButton from "./assets/buttons/proBttn@300x.png"
import vButton from "./assets/buttons/VidBttn@300x.png"
import mButton from "./assets/buttons/markBttn@300x.png"
import newButton from "./assets/buttons/new@300x.png"
import menuBar from "./assets/buttons/menuBar.png"
import box from "./assets/buttons/oneBox.png"
import boxSel from "./assets/buttons/oneBoxSelected.png"


function Navbar() {
    const location = useLocation();
    const [extraMenu, setExtraMenu] = useState(false);

    const handleHambu = () => {
        setExtraMenu(!extraMenu);
    };


    return(
        <>
        <nav className='navbar'>
          <Link to="/" className='navbar-logotipo'>
              <img src={logo} alt='cgcminic-logo'></img>
          </Link>
          
          <figure className="menu-desktop-bar">
            <img className="menu-bar" src={menuBar}></img>
            <figure className="menu-desktop-box">
              {/* <Link to={"/programming"}>
                <img className="box" src={box} alt="" />
                <img className="box-selected" src={boxSel} alt="" />
              </Link>
              <Link to={"/videos"}>
                <img className="box" src={box} alt="" />
                <img className="box-selected" src={boxSel} alt="" />
              </Link>
              <Link to={"/market"}>
                <img className="box" src={box} alt="" />
                <img className="box-selected" src={boxSel} alt="" />
              </Link> */}
            </figure>
          </figure>
          
          <figure className="navbar-menu-button">
            <img onClick={()=>handleHambu()} src={menuButton}></img>
            <figure  className={extraMenu ? "navbar-menu-line" : "menu-closed"}>
              <img src={menuLine}></img>
            </figure>  
          </figure>

        </nav>

        <div className={extraMenu ? "extra-menu" : "menu-closed"}>
          <ul className="extra-menu-buttons-div">
            <Link to={"/programming"}>
              <figure className="navbar-extra-button">
                <img src={pButton}></img>
              </figure>
            </Link>

            <Link to={"/videos"}>
              <figure className="navbar-extra-button">
                <img src={vButton}></img>
              </figure>
            </Link>

            <Link to={"/market"}>
              <figure className="navbar-extra-button new-button-div">
                <img src={mButton}></img>
                <figure className="new-button">
                  <img src={newButton}></img>
                </figure>
              </figure>
            </Link>
          </ul>
        </div>

      </>
    )
}

export default Navbar;