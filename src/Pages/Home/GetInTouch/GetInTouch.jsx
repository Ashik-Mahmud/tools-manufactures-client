import React from "react";
import Slider from "react-slick";

const GetInTouch = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container mx-auto">
      {" "}
      <Slider {...settings}>
        <div>
          <img
            src="https://media.istockphoto.com/photos/many-tools-picture-id492201907?k=20&m=492201907&s=612x612&w=0&h=IQ1-Uwst23ASNY1fxjIuJ28P42NTKKLRj9BP7yD0D4w="
            alt=""
          />
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default GetInTouch;
