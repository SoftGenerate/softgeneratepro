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
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>
        {`
        @media (max-width: 768px) {
          .navbar-toggler {
            border: none;
            padding: 10px;
          }

          .nav-links {
            display: flex;
            flex-direction: column;
            text-align: center;
            gap: 10px;
            padding: 10px 0;
          }

          .navbar-link {
            font-size: 16px;
            padding: 8px;
          }

          .mobile-nav-footer {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 0;
          }

          .social-icon {
            display: flex;
            justify-content: center;
            gap: 10px;
            padding: 10px 0;
          }

          .social-icon a img {
            width: 30px;
            height: auto;
          }

          .vvd {
            font-size: 16px;
            padding: 10px 20px;
            margin-top: 10px;
            background: linear-gradient(90deg, #ff8a00, #e52e71); /* Gradient Background */
            color: white;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: 0.3s;
          }

          .vvd:hover {
            background: linear-gradient(90deg, #e52e71, #ff8a00);
          }
        }
        `}
      </style>
      <Router>
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logogold} alt="Logo" style={{ width: "130px", height: "auto" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto nav-links">
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
              <span className="navbar-text mobile-nav-footer">
                <div className="social-icon">
                  {[
                    { icon: navIcon1, link: "https://www.linkedin.com/in/softgenerate-it-b3264b1b6/" },
                    { icon: navIcon2, link: "https://www.facebook.com/profile.php?id=100053906046732" },
                    { icon: navIcon3, link: "https://www.instagram.com/softgenerate/" },
                  ].map(({ icon, link }, index) => (
                    <a key={index} href={link} target="_blank" rel="noopener noreferrer">
                      <img src={icon} alt={`social-icon-${index}`} />
                    </a>
                  ))}
                </div>
                <HashLink to="#contact">
                  <button className="vvd"><span>Let’s Connect</span></button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    </>
  );
};
