import logo from "./assets/logo/CGCmincLogo.svg"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
          <div className="navbar-menu-button">
            <button onClick={() => handleHambu()} href="#" className="menu-button">
                MENU
            </button>
          </div>
        </nav>

        <ul className={clicked ? "menu-open" : "menu-closed"}>
          <div className="menu-options">
          {links.map((ele, i) => (
              <Link to={ele.to} className="menu-button" onClick={() => setLink(ele.title)} key={i}>
              {ele.title}
              </Link>
            ))}
          </div>
          
        </ul>

        {/* <nav className='navbar-desktop'>

        </nav> */}
      </>
    )
}

export default Navbar;