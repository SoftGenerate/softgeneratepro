import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col xs={12} md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column flex-md-row align-items-center">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Email Address" 
                  className="form-control mb-2 mb-md-0 mr-md-3"
                />
                <button 
  type="submit" 
  className="btn btn-primary w-100 w-md-auto mt-2 mt-md-0 ml-md-3"
>
  Submit
</button>

              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
