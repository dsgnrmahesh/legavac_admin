import { mdiHeartOutline, mdiSendOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

export default function JobButtons() {
  return (
    <div
      className="d-flex justify-content-center border-top border-gray py-4"
      style={{ clear: "both", marginBottom: 40 }}
    >
      <a className="apply-thisjob" href="/" title="">
        Apply for job
        <Icon path={mdiSendOutline} />
      </a>
      <button className="save-thisjob">
        <Icon path={mdiHeartOutline} />
        Save this job
      </button>
    </div>
  );
}
