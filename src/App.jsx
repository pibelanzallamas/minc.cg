import './styles/app.css'
import logo from "./assets/logo/CGCmincLogo.svg"

function App() {

  return (
    <div className='wraper'>
      <nav className='navbar'>
        <figure className='navbar-logotipo'>
          <img src={logo} alt='cgcminic-logo'></img>
        </figure>
        <ul className='navbar-menu'>
          {/* <li className='navbar-menu-redbar'></li>
          <li className='navbar-menu-title'>MENU</li>
          <li className='navbar-menu-title'>VIDEOS</li>
          <li className='navbar-menu-title'>MARKET</li> */}
        </ul>
      </nav>
      {/*<main>
        <section className="greetings">
          <div className='greetings-title'>
            <div className='greetings-title-number'>00</div>
            <div className='greetings-title-salute'>GREETINGS</div>
          </div>
          <div className='greetings-box'>
            <p className='greetings-box-text'>
              Welcome to <span>minc CGC</span>. Although fully functional from a mobile device, 
              our facility is best experienced from a desktop.
            </p>
          </div>
        </section>
      </main> */}
    </div>
  )
}

export default App
