import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  return (

    <Container fluid >
      <div style={{height:"30vh"}}></div>
      <Row>
        <Col md="12" className="contact-body" style={{color: "white", height: "61vh", fontSize:"150%"}}>
          
        <h2 style={{fontSize:"200%", marginBottom:"3%", color: "#c770f0"}}>Contact Information</h2>
           <p>
             Feel free to reach out to me via email or phone. You can also find me on GitHub and LinkedIn.
           </p>
           <ul className="list-unstyled">
             <li>
               <strong>Email:</strong> <span style={{color: "#c770f0"}}>haldarsurbhi@gmail.com</span>
             </li>
             <li>
               <strong>Phone:</strong> <span style={{color: "#c770f0"}}>91-8982691730</span>
             </li>
           </ul>
       
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/sur-123-bhi"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub style={{padding:"10px", fontSize:"50px", color: "black", borderRadius:"10px", backgroundColor: "#c770f0"}}/>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/surbhi-haldar/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{padding:"10px", fontSize:"50px", color: "black", borderRadius:"10px", backgroundColor: "#c770f0"}}/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
