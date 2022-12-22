import React from "react";

export default function SectionTitle({ title, subTitle }) {
  return (
    <>
      <div className="app__section_title">
        <h2>{title}</h2>
        <span>{subTitle}</span>
      </div>
    </>
  );
}
