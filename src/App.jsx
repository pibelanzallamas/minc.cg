import { useState } from 'react'
import './styles/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>minc</h1>
      <section className="greetings">
        <div className='greetings-title'>Greetings</div>
        <div className='greetings-box'>
          <p className='greetings-box-text'>
            Welcome to <span>minc CGC</span>. Although fully functional from a mobile device, 
            our facility is best experienced from a desktop.
          </p>
        </div>
      </section>
    </>
  )
}

export default App
