import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath='https://private-user-images.githubusercontent.com/70647591/298517087-5c4304de-6ada-44f6-a074-3be63d9df3b3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY5NTY1NTksIm5iZiI6MTcwNjk1NjI1OSwicGF0aCI6Ii83MDY0NzU5MS8yOTg1MTcwODctNWM0MzA0ZGUtNmFkYS00NGY2LWEwNzQtM2JlNjNkOWRmM2IzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjAzVDEwMzA1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVmOWU2NjFkNmU2MDE4NjljODQzZGQ4ZWIwOGM3OTVkNzc1N2I5ZTRhMjdiYTI5YjU3YmZhMThhNDc3NDJkODImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.OIo5DC_2locG1o0BWsbEIu6ANLs3cQZd8laRP_Jg-Ac'
              isBlog={false}
              title="Samrat Hospital"
              description="This website helps to find doctor and book an appointment with them. This is a collaborative project which has been created in span of five days. In this project I was responsible for creating the Listing page. That contains list of doctors with the filter of name, availability and specialization, also I added the sorting functionality on fee basis."
              ghLink="https://github.com/geeteshmehuria/c-sharp-samrat-2345"
              demoLink="https://c-sharp-sam.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath='https://private-user-images.githubusercontent.com/146922474/301813410-14b8eb32-5107-455a-bcbe-7c2569176831.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDY5NTcxMDcsIm5iZiI6MTcwNjk1NjgwNywicGF0aCI6Ii8xNDY5MjI0NzQvMzAxODEzNDEwLTE0YjhlYjMyLTUxMDctNDU1YS1iY2JlLTdjMjU2OTE3NjgzMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIwM1QxMDQwMDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MzgyNmNjNTYyNjEzYTUyODE2OTY1ZWU2OTI2MjUwOTkwNTE4NTZlY2E4MmVjODE0MDgwMDhmMDcwZGYzMWQzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.zgz4Kq9SHXPgeNy3Oz5Ycf5fzQ5MgHBLtvFVWQgqyho'
              isBlog={false}
              title="Bits-0f-C0de"
              description="Travel Tribe is an online travel agency that offers travel packages around the world. This is a collaborative project which has been created in span of 5 days. We used HTML, CSS and JavaScript for the UI."
              ghLink="https://github.com/Nishant6571/Travel-Tribe?tab=readme-ov-file"
              demoLink="https://velvety-maamoul-e37b50.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;