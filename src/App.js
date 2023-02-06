import './App.css';
import Navigationbar from './components/Navigationbar';
import Hero from './components/Hero';
import Service from './components/Service';
import Us from './components/Us';
import Testi from './components/Testi';
import Footer from './components/Footer';
import "./css/nav.css"
import "./css/hero.css"
import "./css/service.css"
import "./css/us.css"
import "./css/testi.css"
import "./css/footer.css"

function App() {
  return (
    <div>
      <Navigationbar/>
      <Hero/>
      <Service/>
      <Us/>
      <Testi/>
      <Footer/>
    </div>
  );
}

export default App;
