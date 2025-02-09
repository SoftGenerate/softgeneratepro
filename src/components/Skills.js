import meter1 from "../assets/img/android.jpg";
import meter2 from "../assets/img/web.jpeg";
import meter3 from "../assets/img/Ios.jpg";
import meter4 from "../assets/img/hybridzapp.png";
import meter5 from "../assets/img/digitalmar.png";
import meter6 from "../assets/img/uiux.png";
import meter7 from "../assets/img/mern.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="services" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h1>Our Services</h1>
                        <p>We provide expert software solutions, including  Web development, mobile apps,Digital Marketing, cloud services, and IT consulting. Our team is dedicated to delivering high-quality, scalable products that help your business thrive in the digital world.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Android App </h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Ios Mobile App</h5>
                            </div>
                            <div className="item">
                                <img src={meter4 } alt="Image" />
                                <h5> Hybrid App</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Digital Marketing</h5>
                            </div>
                            <div className="item">
                                <img src={ meter6} alt="Image" />
                                <h5>Ui/Ux Design</h5>
                            </div>

                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>MERN Stack</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
