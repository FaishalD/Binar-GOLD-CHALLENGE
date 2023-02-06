import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigationbar from "../components/Navigationbar";
import Service from "../components/Service";
import Testi from "../components/Testi";
import Us from "../components/Us";
import "../css/nav.css";
import "../css/hero.css";
import "../css/service.css";
import "../css/us.css";
import "../css/testi.css";
import "../css/footer.css";

const Home = () => {
  return (
    <div>
      <Navigationbar />
      <Hero />
      <Service />
      <Us />
      <Testi />
      <Footer />
    </div>
  );
};

export default Home;
