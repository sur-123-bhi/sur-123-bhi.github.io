import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FigmaProjectImg from "../../Assets/Figma-Design-Img.png";
import TravelWebsiteImg from "../../Assets/Travel-Website-Img.png";
import HospitalWebsiteImg from "../../Assets/Hospital-Website-Img.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HospitalWebsiteImg}
              isBlog={false}
              title="Samrat Hospital"
              description="This website helps to find doctor and book an appointment with them. This is a collaborative project which has been created in span of five days. In this project I was responsible for creating the Listing page. That contains list of doctors with the filter of name, availability and specialization, also I added the sorting functionality on fee basis."
              ghLink="https://github.com/geeteshmehuria/c-sharp-samrat-2345"
              demoLink="https://c-sharp-sam.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelWebsiteImg}
              isBlog={false}
              title="Travel Tribe"
              description="Travel Tribe is an online travel agency that offers travel packages around the world. This is a collaborative project which has been created in span of 5 days. We used HTML, CSS and JavaScript for the UI and JSON server to create API. In this project, I have created the Home Page, where I have added functionality to show a list of places"
              ghLink="https://github.com/Nishant6571/Travel-Tribe?tab=readme-ov-file"
              demoLink="https://velvety-maamoul-e37b50.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaProjectImg}
              isBlog={false}
              title="Figma Design Clone"
              description="This project was based on Figma Design. We were 5 members all of us contributed in this project. We have used HTML, CSS and SASS Framework to create the UI. And also we have used Media Queries to give it responsiveness for small screen size devices."
              ghLink="https://github.com/sur-123-bhi/bouncy-invention-713"
              demoLink="https://bounty-invention-713.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;