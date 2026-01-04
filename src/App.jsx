import './styles/app.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Videos from './Videos'
import Programming from './Programming'
import Market from './Market'
import AboutUs from './AboutUs'
import ArticleCard from './commons/ArticleCard';

function App() {

  return (
    <div className='wraper'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programming" element={<Programming/>}/>
        <Route path="/videos" element={<Videos />} />
        <Route path="/market" element={<Market/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/programming/:slug" element={<ArticleCard />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
