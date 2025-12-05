import logo from "./assets/logo/CGCmincLogo.svg"
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const links = [
    { to: "/programming", title: "Programming" },
    { to: "/videos", title: "Videos" },
    { to: "/market", title: "Market" },
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
           <a >

          <button onClick={() => handleHambu()} href="#" className="menu-button">
              MENU
          </button>
          </a>
        </nav>
        {/* <ul className={clicked ? "hambu" : "notHambu"}>
        {links.length > 0 &&
          links.map((ele, i) => (
            <Link to={ele.to} onClick={() => setLink(ele.title)} key={i}>
              {link == ele.title ? <u>{ele.title}</u> : ele.title}
            </Link>
          ))}
        </ul> */}
        <nav className='navbar-desktop'>

        </nav>
      </>
    )
}

export default Navbar;