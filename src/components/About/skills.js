import React from "react";
import { Col, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-brands-svg-icons';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
// import {
//   SiRedis,
//   SiPostgresql,
// } from "react-icons/si";

function Skills() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 style={{marginTop: "20%", fontSize:"40px", fontWeight: "900", letterSpacing: "2px"}}>Redux</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 style={{marginTop: "20%", fontSize:"40px", fontWeight: "900", letterSpacing: "2px"}}>HTML</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 style={{marginTop: "20%", fontSize:"40px", fontWeight: "900", letterSpacing: "2px"}}>CSS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 style={{marginTop: "20%", fontSize:"40px", fontWeight: "900", letterSpacing: "2px"}}>SQL</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h1 style={{marginTop: "15%", fontSize:"60px", fontWeight: "900"}}>C</h1>
      </Col>
    </Row>
  );
}

export default Skills;
