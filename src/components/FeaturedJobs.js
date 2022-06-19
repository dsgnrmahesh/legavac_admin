import React from "react";
import Icon from "@mdi/react";
import { mdiHeartOutline, mdiMapMarkerOutline } from "@mdi/js";

export default function FeaturedJobs({
  title,
  companyName,
  companyLogo,
  location,
  jobType,
}) {
  return (
    <>
      <div className="app__featuredJobs-item">
        <div className="app__featuredJobs-title">
          <div className="app__featuredJobs-logo">
            <img src={companyLogo} alt="" />
          </div>
          <h3>
            <a href="/" title="">
              {title}
            </a>
          </h3>
          <span>{companyName}</span>
        </div>
        <span className="app__featuredJobs-lctn">
          <Icon path={mdiMapMarkerOutline} />
          {location}
        </span>
        <span className="app__featuredJobs-job">
          <Icon path={mdiHeartOutline} />
        </span>
        <span className="app__featuredJobs-is ft">{jobType}</span>
      </div>
    </>
  );
}
