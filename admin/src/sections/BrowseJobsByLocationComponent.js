import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
export default function BrowseJobsByLocationComponent() {
  return (
    <>
      <section className="app__section border-bottom">
        <Container fluid>
          <SectionTitle
            title="Browse Jobs by Locations"
            subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          />
          <Row className="app__browseJobsLocation justify-content-center">
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Mumbai</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Pune</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Kolkata</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Ahmedabad</span>
              </a>
            </Col>
            <Col sm={6} md={2} className="app__browseJobsLocation-item">
              <a href="/">
                <img src="images/resource/gate.png" alt="" />
                <span>Jobs in Bengaluru</span>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
