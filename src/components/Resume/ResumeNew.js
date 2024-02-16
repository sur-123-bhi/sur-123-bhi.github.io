import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/surbhi-haldar-resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew({ forwardedRef }) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" ref={forwardedRef}>
        <Particle />


        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* <Button
            variant="primary"
            href={pdf}
            download="surbhi-haldar-resume.pdf" // Add this attribute to specify the filename
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button> */}

          <h1 style={{ color: "white", fontWeight: "900", marginBottom: "2%" }}>Get my Resume from here</h1>
        </Row>

        {/* <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 500 ? 1.7 : 0.6} />
          </Document>
        </Row> */}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            download="surbhi-haldar-resume.pdf" // Add this attribute to specify the filename
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <div style={{ height: "20vh" }}></div>
      </Container>
    </div>
  );
}

export default ResumeNew;
