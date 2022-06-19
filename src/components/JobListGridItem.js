import { mdiHeartOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { Col } from "react-bootstrap";

export default function JobListGridItem({
  companyLogo,
  companyName,
  designation,
  location,
}) {
  return (
    <Col sm={12} md={4} lg={4} className="app__jobList">
      <div className="job-grid border">
        <div className="job-title-sec">
          <div className="c-logo">
            <img src={companyLogo} alt="" />
          </div>
          <h3>
            <a href="/job" title={designation}>
              {designation}
            </a>
          </h3>
          <span>Massimo Artemisis</span>
          <span className="fav-job">
            <Icon path={mdiHeartOutline} />
          </span>
        </div>
        <span className="job-lctn">{location}</span>
        <a href="/job" title="">
          APPLY NOW
        </a>
      </div>
    </Col>
  );
}
