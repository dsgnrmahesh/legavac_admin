import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import JobButtons from "../components/JobButtons";
import JobDetails from "../components/JobDetails";
import JobHead from "../components/JobHead";

export default function JobComponent() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} md={10}>
            <JobHead />
            <JobDetails />
            <JobButtons />
          </Col>
        </Row>
      </Container>
    </>
  );
}
