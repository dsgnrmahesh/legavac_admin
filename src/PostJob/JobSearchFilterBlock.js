import React from "react";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";

export default function JobSearchFilterBlock({  name,
  title,
  classname,
  items,
  handlechange, }) {
  const rendersearchLocations = items.map((location, index) => (
    <li className="search-filters-item" key={index}>
      <input
        type="checkbox"
        className={classname}
        name="refineSearchLocationItem"
        data-title={name}
        value={location.id}
        id={
          "recruter-search-" +
          title.replace("'", " ").split(" ").join("-") +
          "-" +
          index
        }
        onChange={handlechange}
      />
      <label
        htmlFor={
          "recruter-search-" +
          title.replace("'", " ").split(" ").join("-") +
          "-" +
          index
        }
      >
        <i> {location.name}</i>
        {/* <span>({location.count})</span> */}
      </label>
    </li>
  ));
  return (
    <>
      <div className="search-filter">
        <input
          type="checkbox"
          name="refineSearchLocation"
          id={"recruter-search-" + title.replace("'", " ").split(" ").join("-")}
        />
        <label
          className="search-filter-heading"
          htmlFor={
            "recruter-search-" + title.replace("'", " ").split(" ").join("-")
          }
        >
          <Icon path={mdiMenuDown} />
          <span>{title}</span>
        </label>
        <div className="search-filter-content">
          <ul className="search-filters-items">{rendersearchLocations}</ul>
        </div>
      </div>
    </>
  );
}
