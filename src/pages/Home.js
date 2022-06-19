import React from "react";
import BrowseJobsByLocationComponent from "../sections/BrowseJobsByLocationComponent";
import CompaniesWeHelpedComponent from "../sections/CompaniesWeHelpedComponent";
import FeaturedJobsComponent from "../sections/FeaturedJobsComponent";
import MainSearchComponent from "../sections/MainSearchComponent";
import ReviewsSlidesComponent from "../sections/ReviewsSlidesComponent";

export default function Home() {
  return (
    <>
      <MainSearchComponent />
      <CompaniesWeHelpedComponent />
      <BrowseJobsByLocationComponent />
      <FeaturedJobsComponent />
      <ReviewsSlidesComponent />
    </>
  );
}
