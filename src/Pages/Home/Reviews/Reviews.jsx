import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import Slider from "react-slick";
import Loader from "../../../Components/Loader/Loader";
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

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://tools-manufactures.onrender.com/reviews`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setReviews(result?.result);
      });
  }, []);

  return (
    <section className="reviews py-20 px-6 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Testimonial by Customer"
          subTitle="What Customer say about us?"
        />
        <Fade bottom distance="30px">
          {loading ? (
            <div className="reviews-content">
              <Slider {...settings}>
                {reviews.map((review) => (
                  <CardReview key={review._id} {...review} />
                ))}
              </Slider>
            </div>
          ) : (
            <Loader />
          )}
        </Fade>
      </div>
    </section>
  );
};

export default Reviews;
