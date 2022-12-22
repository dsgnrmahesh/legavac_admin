import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

export default function FilterButtons() {
  let cls = ["app__filter-item"];
  const handleButtonClick = () => {
    cls.push("app__filter-active");
  };
  return (
    <>
      <div className={cls.join(" ")}>
        <button
          className="app__filter-button"
          onClick={() => handleButtonClick}
        >
          <span>date posted</span>
          <Icon path={mdiChevronDown} />
        </button>
        <div className="app__filter-list">
          <div className="app__filter-list_item">
            <span>All</span>
          </div>
          <div className="app__filter-list_item">
            <span>Last Hour</span>
          </div>
          <div className="app__filter-list_item">
            <span>Last 24 hours</span>
          </div>
          <div className="app__filter-list_item">
            <span>Last 7 days</span>
          </div>
          <div className="app__filter-list_item">
            <span>Last 14 days</span>
          </div>
          <div className="app__filter-list_item">
            <span>Last 30 days</span>
          </div>
        </div>
      </div>
    </>
  );
}
