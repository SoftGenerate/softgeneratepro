import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import bannerVideo from "../assets/img/bannervideo.mp4"; // Ensure correct path

export const Banner = () => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = ["Ready ", "Ready Our Services"];
  const period = 2000;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  }, [text, loopNum, isDeleting]);

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [tick, delta]);

  return (
    <section className="banner" id="home">
      {/* Video Background */}
      <video className="banner-video" autoPlay loop muted playsInline>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Container>
        <Row className="align-items-center">
          {/* Left Content */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn banner-content" : "banner-content"}>
                  <span className="tagline">Transforming Ideas into Digital Reality</span>
                  <h1>
                    {`Hi! Are You `}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Our", "Services", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    <b>
                      Our expertise in technology understanding and software coding for web solution projects, along with a team of tech-savvy web experts, ensures value-added solutions. We integrate experience and expertise to deliver signature solutions.
                    </b>
                  </p>
                  {/* <button onClick={() => console.log("#contact")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
