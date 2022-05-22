import React from "react";
import Slider from "react-slick";
import TItle from "../../../Components/TItle/TItle";
import CardReview from "./CardReview";
const Reviews = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section className="reviews py-20 px-6 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Testimonial by Customer"
          subTitle="What Customer say about us?"
        />
        <div className="reviews-content">
          <Slider {...settings}>
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
