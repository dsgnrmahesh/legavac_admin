import React from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import SectionTitle from "../Commons/SectionTitle";

import ReviewSlideSingle from "../components/ReviewSlideSingle";

export default function ReviewsSlidesComponent() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    slide: "div",
    fade: false,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          centerMode: false,
          centerPadding: "0px",
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          vertical: false,
          centerMode: true,
          centerPadding: "0px",
          dots: true,
        },
      },
    ],
  };
  const reviews = [
    {
      image: "/images/resource/r1.jpg",
      name: "Ali Tufan",
      designation: "Web designer",
      description: `Without LegaVac i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service`,
    },
    {
      image: "/images/resource/r2.jpg",
      name: "Augusta Silva",
      designation: "Web designer",
      description: `Without LegaVac i’d be homeless, they found me a job and got me sorted out quickly with everything!  Can’t quite believe the service`,
    },
  ];
  const renderSlides = reviews.map((review, index) => (
    <ReviewSlideSingle review={review} key={index} />
  ));
  return (
    <>
      <section
        className="app__section app__section-bgImg"
        style={{
          backgroundImage: "url(images/parallax2.jpg)",
        }}
      >
        <Container fluid>
          <SectionTitle
            title="Kind Words From Happy Candidates"
            subTitle="What other people thought about the service provided by LegaVac"
          />
          <div className="app__reviews">
            <Slider {...settings}>
              {renderSlides}
              {renderSlides}
              {renderSlides}
              {renderSlides}
              {renderSlides}
              {renderSlides}
              {renderSlides}
              {renderSlides}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}
