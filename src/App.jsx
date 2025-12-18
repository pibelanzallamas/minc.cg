import './styles/app.css'
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

function App() {

  return (
    <div className='wraper'>
      <Navbar />
      <Home />
      <Footer/>
    </div>
  )
}

export default App;
