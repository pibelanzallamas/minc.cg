import './styles/app.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Videos from './Videos'

function App() {

  return (
    <div className='wraper'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
