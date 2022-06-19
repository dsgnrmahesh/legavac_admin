import React from "react";
import JobsSearchComponent from "../sections/JobsSearchComponent";

export default function Jobs() {
  return (
    <>
      <div className="app__spacer"></div>
      <section className="app__section py-5">
        <JobsSearchComponent />
      </section>
    </>
  );
}
