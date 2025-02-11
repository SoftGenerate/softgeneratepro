import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Slider from "react-slick";  // Import React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";
import projImg4 from "../assets/img/mob1.png";
import projImg5 from "../assets/img/mob2.png";
import projImg6 from "../assets/img/mob3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./style.css"; // Import the CSS file

export const Projects = () => {

  const projects = [
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg1 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg2 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg3 },
  ];
  
  const projects1 = [
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg4 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg5 },
    { title: "Business Startup", description: "Design & Development", imgUrl: projImg6 },
  ];

  const testimonials = [
    { name: "Sue", review: "I really enjoyed working with SoftGenerate. His communication was excellent, he met all deadlines, and his skills were strong.", rating: 5 },
    { name: "Dan Bennett", review: "Outstanding IT services! The team is professional, efficient, and delivers high-quality solutions. Highly recommended for any software needs!", rating: 5 },
    { name: "Anura V.", review: "This would be my second project with SoftGenerate. These are wonderful bunch of professionals. Great to work with SoftGenerate.", rating: 4 },
    { name: "Gopal Gupta", review: "Great people to work with. They are full of professional etiquette and true ethics. Such an amazing team with clear skills and quality techniques.", rating: 4 },
    { name: "Tragic Soul", review: " Developing our app with softgenerate was a smooth and collaborative experience. They understood our needs, proposed innovative solutions, and delivered a polished app that exceeds our expectations.", rating: 5 }
  ];

  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>We specialize in delivering innovative IT solutions, including web development, mobile apps, e-commerce, and AI-driven platforms.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Project Images</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Testimonials</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Mobile Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Slider {...sliderSettings}>
                          {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-slide">
                              <p>"{testimonial.review}"</p>
                              <h5 className="testimonial-name">- {testimonial.name}</h5>
                              <div className="star-rating">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} style={{ color: i < testimonial.rating ? "#FFD700" : "#ccc" }}>
                                    ★
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                        {/* <p>More information coming soon.</p> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}
