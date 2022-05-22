import React from "react";
import Slider from "react-slick";

const Company = () => {
  var settings = {
    infinite: false,
    speed: 3000,
    slidesToShow: 9,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section className="brands py-10 px-6">
      <div className="container mx-auto">
        <Slider {...settings}>
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-01.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-02.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-03.png"
            alt="brand"
            width={50}
            className="w-16"
          />{" "}
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-04-1.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-01.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-05.png"
            alt="brand"
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-07.png"
            alt="brand"
            width={50}
            className="w-16"
          />{" "}
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-02.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-04-1.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-02.png"
            alt="brand"
            width={50}
            className="w-16"
          />
          <img
            src="http://webdesign-finder.com/rentiger/wp-content/uploads/2021/10/logo-08.png"
            alt="brand"
            width={50}
            className="w-16"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Company;
