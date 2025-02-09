import { Col, Row, Container } from "react-bootstrap";

export const AboutUs = () => {
  return (
    <Container>
      <Col lg={12} className="d-flex justify-content-center align-items-center text-center">
        <div className="skill-bx wow zoomIn">
          <Row>
            <Col>
              <h3>About Us</h3>
              <p>
                Welcome to our platform! We are committed to delivering exceptional services 
                and products to our customers. Our mission is to achieve excellence and 
                ensure customer satisfaction at every step.
              </p>
              <p>
                Our team consists of highly skilled professionals who are passionate about 
                innovation and quality. We continuously strive to improve and bring the best 
                to our audience.
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default AboutUs;