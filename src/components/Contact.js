import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const initialFormDetails = { firstName: "", lastName: "", email: "", phone: "", message: "" };
  const [formDetails, setFormDetails] = useState(initialFormDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [popup, setPopup] = useState({ show: false, message: "", success: false });

  const updateForm = (field, value) => {
    if (field === "phone" && (!/^[0-9]*$/.test(value) || value.length > 10)) return; // Only allow numbers and max 10 digits
    setFormDetails(prev => ({ ...prev, [field]: value }));
};

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/; // Ensures exactly 10 digits

    if (!emailPattern.test(email)) return showPopup("Please enter a valid email address.", false);
    if (!phonePattern.test(phone)) return showPopup("Please enter a valid 10-digit phone number.", false);
    if (!firstName || !lastName || !email || !phone || !message) return showPopup("All fields are required.", false);
    return true;
  };

  const showPopup = (message, success) => setPopup({ show: true, message, success });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setButtonText("Sending...");

    try {
      await emailjs.send("service_z8wrn1n", "template_beuoyft", {
        from_name: `${formDetails.firstName} ${formDetails.lastName}`,
        from_email: formDetails.email,
        from_phone: formDetails.phone,
        message: formDetails.message
      }, "lKLq2X0jkLCru8bg7");

      showPopup("Message sent successfully!", true);
      setFormDetails(initialFormDetails);
    } catch (error) {
      showPopup("Something went wrong, please try again.", false);
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
            <div className="contact-info mt-4 text-center">
              <ContactDetail icon={FaEnvelope} text="Email" detail="softgenerate@gmail.com" color="text-primary" />
              <ContactDetail icon={FaMapMarkerAlt} text="Address" detail="Devi Nagar Rd, Jaipur, Rajasthan 302019" color="text-danger" />
              <ContactDetail icon={FaPhone} text="Mobile" detail="+91-9782379167 , 8949482523" color="text-success" />
            </div>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {["firstName", "lastName", "email", "phone"].map((field, index) => (
                        <Col sm={6} className="px-1" key={index}>
                          <input
                            type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                            placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                            value={formDetails[field]}
                            onChange={(e) => updateForm(field, e.target.value)}
                            required
                          />
                        </Col>
                      ))}
                      <Col className="px-1">
                        <textarea rows="6" placeholder="Message" value={formDetails.message} onChange={(e) => updateForm("message", e.target.value)} required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Modal show={popup.show} onHide={() => setPopup(prev => ({ ...prev, show: false }))} centered>
        <Modal.Header closeButton>
          <Modal.Title>{popup.success ? "Success" : "Error"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ color: popup.success ? "green" : "red" }}>{popup.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={popup.success ? "success" : "danger"} onClick={() => setPopup(prev => ({ ...prev, show: false }))}>Close</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

const ContactDetail = ({ icon: Icon, text, detail, color }) => (
  <p style={{ fontSize: "20px", fontWeight: "bold" }}>
    <Icon className={`me-2 ${color}`} size={24} /> {text} : <strong>{detail}</strong>
  </p>
);
