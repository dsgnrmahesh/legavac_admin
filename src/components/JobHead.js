import React from "react";
import Icon from "@mdi/react";
import { mdiEmailOutline, mdiLinkVariant, mdiPhoneOutline } from "@mdi/js";

export default function JobHead() {
  return (
    <>
      <div className="jobDetailsBox">
        <div className="jobDetailsBoxInner">
          <div className="jobThumLogo">
            <img src="images/resource/sj.png" alt="" />
          </div>
          <div className="jobHeadDetails">
            <h4>Tix Dog</h4>
            <span>274 Seven Sisters Road, London, N4 2HY</span>
            <p>
              <Icon path={mdiLinkVariant} /> www.legavac.com
            </p>
            <p>
              <Icon path={mdiPhoneOutline} /> +91 9087 654 321
            </p>
            <p>
              <Icon path={mdiEmailOutline} /> ali.tufan@legavac.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
