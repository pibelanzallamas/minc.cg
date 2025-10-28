import { useState } from 'react'
import './styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wraper'>
      <nav className='navbar'>
        <h1 className='navbar-logo'>CGC</h1>
        <ul className='navbar-menu'>
          <li>MENU</li>
          <li>VIDEOS</li>
          <li>MARKET</li>
        </ul>
      </nav>
      <main>
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
      </main>
    </div>
  )
}

export default App
