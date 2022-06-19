import React from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiMagnify, mdiMapMarkerOutline } from "@mdi/js";
import { Col, Container, Row } from "react-bootstrap";
import AutoSearchInput from "../Commons/AutoSearchInput";

export default function MainSearchComponent() {
  return (
    <>
      <section
        className="app__mainSearch"
        style={{ backgroundImage: "url(/images/parallax1.jpg)" }}
      >
        <Container>
          <div className="app__mainSearch_inner">
            <div className="app__mainSearch_content">
              <h1>The Easiest Way to Get Your New Job</h1>
              <span className="app__mainSearch_content-mutedText">
                Find Jobs, Employment &amp; Career Opportunities
              </span>
              <form style={{ clear: "both" }} action="/jobs">
                <Row className="app__mainSearch_from">
                  <Col
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    className="app__mainSearch_from-input"
                  >
                    <AutoSearchInput
                      options={[
                        "Trainee Engineer",
                        "Software Engineer",
                        "System Analyst",
                        "PHP developer",
                        "Android developer",
                        "Project Manager",
                        "General Manager",
                        "Business Development Manager",
                        "Internet Marketing Head",
                        "Content Writter",
                        "System Administrator",
                        "Web Developer",
                        "UI / UX Developer",
                      ]}
                      placeholder="Job title, keywords or company name"
                      name="k"
                    />
                    <Icon path={mdiMagnify} />
                  </Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    className="app__mainSearch_from-input"
                  >
                    <AutoSearchInput
                      options={[
                        "Pune, Maharashtra",
                        "Thane, Maharashtra",
                        "Kalyan, Maharashtra",
                        "Andheri, Maharashtra",
                        "Kharghar, Maharashtra",
                        "Vikhroli, Maharashtra",
                        "Nagpur, Maharashtra",
                        "Nashik, Maharashtra",
                      ]}
                      placeholder="City, state, or pin code"
                      name="l"
                    />
                    <Icon path={mdiMapMarkerOutline} />
                  </Col>
                  <Col
                    lg={3}
                    md={3}
                    sm={12}
                    xs={12}
                    className="app__mainSearch_from-select"
                  >
                    <select name="e">
                      <option>exprience</option>
                      <option>1 year</option>
                      <option>2 years</option>
                      <option>3 years</option>
                      <option>4 years</option>
                      <option>5 years</option>
                    </select>
                    <Icon path={mdiChevronDown} />
                  </Col>
                  <Col
                    lg={1}
                    md={1}
                    sm={12}
                    xs={12}
                    className="app__mainSearch_from-button"
                  >
                    <button className="app__button">
                      <Icon path={mdiMagnify} />
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
