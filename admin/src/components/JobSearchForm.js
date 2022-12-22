import React from "react";
import Icon from "@mdi/react";
import { mdiChevronDown, mdiMagnify, mdiMapMarkerOutline } from "@mdi/js";
import { Row, Col } from "react-bootstrap";
import AutoSearchInput from "../Commons/AutoSearchInput";
export default function JobSearchForm() {
  return (
    <>
      <form className="app__search-form" action="/jobs">
        <Row className="app__search-feilds">
          <Col lg={4} md={4} sm={12} xs={12} className="app__search-input">
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
          <Col lg={4} md={4} sm={12} xs={12} className="app__search-input">
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
          <Col lg={3} md={3} sm={12} xs={12} className="app__search-select">
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
          <Col lg={1} md={2} sm={12} xs={12} className="app__search-button">
            <button className="app__button">
              <Icon path={mdiMagnify} />
            </button>
          </Col>
        </Row>
      </form>
    </>
  );
}
