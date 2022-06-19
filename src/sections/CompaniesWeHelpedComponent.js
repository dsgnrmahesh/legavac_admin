import React from "react";
import { Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";

export default function CompaniesWeHelpedComponent() {
  return (
    <>
      <section className="app__section border-bottom">
        <Container fluid>
          <SectionTitle
            title="Companies We've Helped"
            subTitle="Some of the companies we've helped recruit excellent applicants over the years."
          />
          <div className="app__compWeHelpd">
            <div className="app__comp-img">
              <a href="/">
                <img src="images/resource/cc1.jpg" alt="" />
              </a>
            </div>
            <div className="app__comp-img">
              <a href="/">
                <img src="images/resource/cc2.jpg" alt="" />
              </a>
            </div>
            <div className="app__comp-img">
              <a href="/">
                <img src="images/resource/cc3.jpg" alt="" />
              </a>
            </div>
            <div className="app__comp-img">
              <a href="/">
                <img src="images/resource/cc4.jpg" alt="" />
              </a>
            </div>
            <div className="app__comp-img">
              <a href="/">
                <img src="images/resource/cc5.jpg" alt="" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
