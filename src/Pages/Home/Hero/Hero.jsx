import React from "react";
const Hero = () => {
  return (
    <section
      className="bg-base-200 body-font py-40"
      style={{ clipPath: `ellipse(300% 100% at 210.5% 0%)` }}
    >
      <div className="hero pb-80 md:pb-40 bg-base-200">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <div className="w-full lg:w-2/5  rounded shadow-2xl overflow-hidden cursor-grab">
            <div className="outline-none h-full">
              <img
                src="https://thearchitectsdiary.com/wp-content/uploads/2019/05/toolset-1000x550.jpg"
                className="md:rounded-lg h-full w-full"
                alt=""
              />
            </div>
          </div>

          <div className="lg:w-2/4">
            <span className="text-lg">
              We are <strong>Tools House</strong>.
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              We are the best Tools Manufacturer Company in the world.
            </h1>
            <p className="py-6">
              We are most famous tools seller in the world. We already sold 59
              Countries around the world and give them satisfied customers. If
              you need any tools you will contact us.
            </p>
            <a href="#tools" className="btn btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
