import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/astro.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link, useNavigate } from "react-router-dom";




export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Alex Hull", "Justin Lee", "Ian Irwin", "Connor Mitchener" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  let navigate = useNavigate ()
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                <h1>{`Welcome to S.H.I.P!! By:`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Alex Hull", "Justin Lee", "Ian Irwin", "Connor Mitchener" ]'><span className="wrap">{text}</span></span></h1>
                  <p>The time is 34702343776 the infamous coding wars has been going on for generations, you've been recruited by the legendary agent A.A.7824 to join the Programers in their war against the evil Bugs. You're expected to pilot one of the three experimental S.H.I.P. crafts but have no fear you brand new recruit you have three of our very best commanders to teach you the ways of the S.H.I.P... Good Luck recruit may the syntax be with you --I.I.3565</p>
                  <button type="button" onClick={() => navigate("/Tutorial")}>
                    Tutorial
                    <ArrowRightCircle size={25} />
                 </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
