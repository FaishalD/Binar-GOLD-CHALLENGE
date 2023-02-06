import logo from "../img/logo.png";
import { Container, Row } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <div>
      <section id="nav">
        <Container>
          <Row>
            <div className="col-lg-3">
              <a href="#hero">
                <img src={logo} alt="logo" class="logo" />
              </a>
            </div>
            <div className="col-lg-9">
              <ul class="navbar">
                <li>
                  <a href="#service">Our Services</a>
                </li>
                <li>
                  <a href="#us">Why Us</a>
                </li>
                <li>
                  <a href="#testi">Testimonial</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Navigationbar;
