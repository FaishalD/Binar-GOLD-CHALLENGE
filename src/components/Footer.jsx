import foot from "../img/Footer.svg"
import { Container } from "react-bootstrap"

const Footer = () => {
    return(
        <div>
            <section id="footer">
                <Container>
                    <img src={foot} alt="footer" className="footer"/>
                </Container>
            </section>
        </div>
    )
}

export default Footer