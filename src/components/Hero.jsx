import background from "../img/bg.svg";
import mobil from "../img/mercy.png";
import { useNavigate } from "react-router-dom";
import {Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <section id="hero">
        <Container>
          <Row>
            <Col lg>
              <div class="left-section">
                <h1>Sewa & Rental Mobil Terbaik di kawasan Manchester</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <div class="button-hero">
                  <button onClick={()=> navigate('/CariMobil')}>Mulai Sewa Mobil</button>
                </div>
              </div>
            </Col>
            <Col lg>
              <div class="right-section">
                <img src={background} alt="background-car" class="image-background" />
                <img src={mobil} alt="mobil" class="image-full" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
