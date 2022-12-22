import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";
import FeaturedJobs from "../components/FeaturedJobs";

export default function FeaturedJobsComponent() {
  return (
    <>
      <section className="app__section">
        <Container fluid>
          <SectionTitle
            title="Featured Jobs"
            subTitle="Leading Employers already using job and talent."
          />
          <div className="app__featuredJobs-items">
            <FeaturedJobs
              title="Web Designer / Developer"
              companyName="Massimo Artemisis"
              companyLogo="images/resource/l1.png"
              location="pune, maharashtra"
              jobType="full time"
            />
            <FeaturedJobs
              title="Marketing Director"
              companyName="Tix Dog"
              companyLogo="images/resource/l2.png"
              location="pune, maharashtra"
              jobType="part time"
            />
            <FeaturedJobs
              title="C Developer (Senior) C .Net"
              companyName="StarHealth"
              companyLogo="images/resource/l3.png"
              location="pune, maharashtra"
              jobType="full time"
            />
            <FeaturedJobs
              title="Application Developer For Android"
              companyName="Altes Bank"
              companyLogo="images/resource/l4.png"
              location="pune, maharashtra"
              jobType="freelance"
            />
            <FeaturedJobs
              title="Regional Sales Manager South east Asia"
              companyName="Vincent"
              companyLogo="images/resource/l5.png"
              location="pune, maharashtra"
              jobType="temporary"
            />
            <FeaturedJobs
              title="Social Media and Public Relation Executive "
              companyName="MediaLab"
              companyLogo="images/resource/l6.png"
              location="pune, maharashtra"
              jobType="full time"
            />
          </div>
          <div className="app__loadMore">
            <a href="/" className="app__button-outline">
              Load more listings
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
