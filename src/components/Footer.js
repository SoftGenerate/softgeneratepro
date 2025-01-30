import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logogold from "../assets/img/logogold.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
        </Row>

        {/* Centered Logo */}
        <Row className="justify-content-center my-3">
          <Col xs={12} className="text-center">
            <img src={logogold} alt="Logo" style={{ width: '170px', height: 'auto' }} />
          </Col>
        </Row>

        {/* Social Icons & Copyright */}
        <Row className="align-items-center">
          <Col xs={12} sm={6} className="text-center text-sm-start">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
