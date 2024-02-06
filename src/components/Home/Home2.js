import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/surbhi-profile-photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I have developed a deep appreciation for programming. 
              <br />
              <br />I have acquired proficiency in fundamental languages and technologies such as  
              <i>
                <b className="purple"> React, JavaScript, Node.js, MongoDB, HTML and CSS. </b></i> Apart from these I have also knowledge of <i><b className="purple"> Core Java and C </b></i>
              
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Applications and Websites</b> 
              </i>
              <br />
              <br />
              I am enthusiastic about contributing to the evolving landscape of technology and continuously enhancing my skills to create impactful and cutting-edge products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{borderRadius: "50%", height:"300px", width:"300px"}} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sur-123-bhi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/surbhi-haldar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
