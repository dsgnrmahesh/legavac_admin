import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-js-pagination";
import FilterButtons from "../components/FilterButtons";
import JobListGridItem from "../components/JobListGridItem";
import JobSearchForm from "../components/JobSearchForm";
export default function JobsSearchComponent() {
  const [activePage, setActivePage] = useState(1);
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
  };
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={12} md={10}>
            <div className="app__search">
              <JobSearchForm />
            </div>
            <div className="app__search-filters">
              <FilterButtons />
              <FilterButtons />
              <FilterButtons />
              <FilterButtons />
              <FilterButtons />
              <FilterButtons />
              <FilterButtons />
            </div>
            <div className="app__search-wraper">
              <div className="app__search-rslt_top">
                <label>Web Developer Fresher jobs in Pune, Maharashtra</label>
                <ul className="app__search-rslt-list">
                  <li className="me-5">
                    <span>sort by : </span>
                    <a href="/jobs">relevance</a>-<b>date</b>
                  </li>
                  <li>
                    <label>Page 1 of 2 jobs</label>
                  </li>
                </ul>
              </div>
              <div style={{ maxWidth: "100%", flex: "1 0 100%" }}>
                <Row className="app__jobLists">
                  <JobListGridItem
                    companyLogo="images/resource/jg1.png"
                    companyName="Massimo Artemisis"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />
                  <JobListGridItem
                    companyLogo="images/resource/jg2.png"
                    companyName="Massimo Artemisis"
                    designation="Marketing Director"
                    location="Pune, Maharashtra"
                  />
                  <JobListGridItem
                    companyLogo="images/resource/jg3.png"
                    companyName="Altes Bank"
                    designation="Application Developer For Android"
                    location="Pune, Maharashtra"
                  />

                  <JobListGridItem
                    companyLogo="images/resource/jg4.png"
                    companyName="Massimo Artemisis"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />
                  <JobListGridItem
                    companyLogo="images/resource/jg5.png"
                    companyName="MediaLab"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />
                  <JobListGridItem
                    companyLogo="images/resource/jg6.png"
                    companyName="StarHealth"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />

                  <JobListGridItem
                    companyLogo="images/resource/jg7.png"
                    companyName="Massimo Artemisis"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />
                  <JobListGridItem
                    companyLogo="images/resource/jg8.png"
                    companyName="Massimo Artemisis"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />
                  <JobListGridItem
                    companyLogo="images/resource/jg9.png"
                    companyName="Massimo Artemisis"
                    designation="Web Designer / Developer"
                    location="Pune, Maharashtra"
                  />
                </Row>
                <Pagination
                  activePage={activePage}
                  itemsCountPerPage={9}
                  totalItemsCount={90}
                  pageRangeDisplayed={5}
                  onChange={handlePageChange.bind(this)}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
