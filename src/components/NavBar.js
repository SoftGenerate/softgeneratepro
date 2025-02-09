import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import logogold from "../assets/img/logogold.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logogold} alt="Logo" style={{ width: "130px", height: "auto" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
               
                { name: "Home", id: "home" },
                { name: "Projects", id: "projects" },
                { name: "Services", id: "services" },
                { name: "Contact Us", id: "contact" },
              ].map(({ name, id }) => (
                <Nav.Link
                  key={id}
                  href={`#${id}`}
                  className={activeLink === id ? "active navbar-link" : "navbar-link"}
                  onClick={() => setActiveLink(id)}
                >
                  {name}
                </Nav.Link>
              ))}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {[navIcon1, navIcon2, navIcon3].map((icon, index) => (
                  <a key={index} href="#"><img src={icon} alt="social-icon" /></a>
                ))}
              </div>
              <HashLink to="#connect">
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
