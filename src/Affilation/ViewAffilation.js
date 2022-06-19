import React from "react";
import Icon from "@mdi/react";
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";

export default function ViewAffilation({ data }) {
  return (
    <>
      <div className="contentScroll">
        <div className="contentHeader border-start">
          <div className="contentActions">
            <button className="edit">
              <Icon path={mdiPencilOutline} />
            </button>
            <button className="del">
              <Icon path={mdiTrashCanOutline} />
            </button>
          </div>
          <div className="contentInfo">
            <h4>{data.Title}</h4>
            <label>Sep 14 2021 12:09 PM</label>
          </div>
        </div>
      </div>
    </>
  );
}
