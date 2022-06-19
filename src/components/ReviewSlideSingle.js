import React from "react";
import Icon from "@mdi/react";
import { mdiFormatQuoteCloseOutline } from "@mdi/js";

export default function ReviewSlideSingle({ review }) {
  return (
    <>
      <div className="app__review-item">
        <div className="app__review-content">
          <Icon path={mdiFormatQuoteCloseOutline} />
          <img src={review.image} alt="" />
          <h3>
            {review.name} <span>{review.designation}</span>
          </h3>
          <p>{review.description}</p>
        </div>
      </div>
    </>
  );
}
