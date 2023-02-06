import service from "../img/img_service.png"
import { Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <div>
      <section id="service">
        <Container>
          <Row>
            <div class="col-lg-6">
              <div class="image">
                <img src={service} alt="service" class="service" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="description">
                <h2>Best Car Rental for any kind of trip in Manchester!</h2>
                <p>Sewa mobil di Manchester bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul class="desc">
                  <li>Sewa Mobil Dengan Supir di Manchester 12 Jam</li>
                  <li>Sewa Mobil Lepas Kunci di Manchester 24 Jam</li>
                  <li>Sewa Mobil Jangka Panjang Bulanan</li>
                  <li>Gratis Antar - Jemput Mobil di Bandara</li>
                  <li>Layanan Airport Transfer / Drop In Out</li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Service;
