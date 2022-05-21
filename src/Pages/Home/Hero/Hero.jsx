import React from "react";
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section
      className="bg-base-200 body-font py-40"
      style={{ clipPath: `ellipse(300% 100% at 237.5% 0%)` }}
    >
      <div className="hero  pb-40 bg-base-200">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <div className="md:w-2/5 rounded shadow-2xl overflow-hidden cursor-grab">
            <Slider {...settings}>
              <div className="outline-none">
                <img
                  src="https://media.istockphoto.com/photos/many-tools-picture-id492201907?k=20&m=492201907&s=612x612&w=0&h=IQ1-Uwst23ASNY1fxjIuJ28P42NTKKLRj9BP7yD0D4w="
                  alt=""
                  className="max-w-lg rounded-lg "
                />
              </div>
              <div className="outline-none">
                <img
                  src="https://media.istockphoto.com/photos/many-tools-picture-id492201907?k=20&m=492201907&s=612x612&w=0&h=IQ1-Uwst23ASNY1fxjIuJ28P42NTKKLRj9BP7yD0D4w="
                  className="max-w-lg rounded-lg "
                  alt=""
                />
              </div>
              <div className="outline-none">
                <img
                  src="https://media.istockphoto.com/photos/many-tools-picture-id492201907?k=20&m=492201907&s=612x612&w=0&h=IQ1-Uwst23ASNY1fxjIuJ28P42NTKKLRj9BP7yD0D4w="
                  className="max-w-lg rounded-lg "
                  alt=""
                />
              </div>
            </Slider>
          </div>

          <div className="lg:w-2/4">
            <span className="text-lg">
              We are <strong>Tools House</strong>.
            </span>
            <h1 className="text-5xl font-bold leading-tight">
              We are the best Tools Manufacturer Company in the world.
            </h1>
            <p className="py-6">
              We are most famous tools seller in the world. We already sold 59
              Countries around the world and give them satisfied customers. If
              you need any tools you will contact us.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
