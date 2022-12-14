import meter1 from "../assets/img/chad-no-background.png";
import meter2 from "../assets/img/nick-no-background.png";
import meter3 from "../assets/img/erik-no-background.png";
import meter4 from "../assets/img/web.png";
import meter5 from "../assets/img/pythonab.png";
import meter6 from "../assets/img/ue.png";
import meter7 from "../assets/img/logoship.png";
import meter8 from "../assets/img/bugs.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';


export const Crew = () => {
  
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
  let navigate = useNavigate();
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Meet the Crew</h2>
              <p>The three Leads of the Programming Elite Squardian team you'll find are bellow.<br></br> The three experimental on board S.H.I.P. AIs you will also find down bellow. Click on anyones portrait to learn more all about them. --J.L.2473</p>
              <button type="button" onClick={() => navigate("/Bio")}>
                Learn More
                <ArrowRightCircle size={25} />
              </button>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Warrant Officer</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Space Commander</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Lt. Colonel</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>Web Sibilings</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>The Snakes</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>The Nonexistent</h5>
                </div>
                <div className="item">
                  <img src={meter7} alt="Image" />
                  <h5>S.H.I.P. Program</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="Image" />
                  <h5>The Bugs</h5>
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
