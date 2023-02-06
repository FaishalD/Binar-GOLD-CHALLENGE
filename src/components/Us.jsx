import { Container, Row } from "react-bootstrap";
import us from "../img/Why Us.svg";

const Us = () => {
  return (
    <div>
      <section id="us">
        <Container>
          <img src={us} alt="us" className="us"/>
        </Container>
      </section>
    </div>
  );
};

export default Us;
