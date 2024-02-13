import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import surbhi_profile_photo from "../../Assets/surbhi-profile-photo.jpg";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/surbhi-haldar-resume.pdf";
import Type from "./Type";

function Home({forwardedRef}) {
  return (
    <section>
      <Container fluid className="home-section" id="home" ref={forwardedRef}>
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7}  className="home-header">
              <h1 style={{ paddingBottom: 5 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> SURBHI HALDAR</strong>
              </h1>
              <p style={{ textAlign: "justify", paddingLeft: "20px", fontSize:"25px" }}>I am an Aspiring </p>

              <div style={{ paddingLeft: 25, textAlign: "left" }}>
                <Type />
              </div>

              <p style={{ textAlign: "justify", padding: "20px 50px 20px 20px", fontSize:"20px" }}>
              Welcome to my portfolio! As a web developer, I'm driven by a passion for technology and a dedication to continuous growth. With a focus on creating impactful and cutting-edge products, I'm enthusiastic about contributing to the evolving landscape of web development. Let's collaborate and build something extraordinary together.
               </p>
              
            </Col>


            <Col md={5} style={{ display: "flex", justifyContent:"center", alignItems:"center"}}>
              <img
                src={surbhi_profile_photo}
                alt="Profile Picture"
                className="img-fluid"
                style={{ maxHeight: "400px", borderRadius:"50%" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
