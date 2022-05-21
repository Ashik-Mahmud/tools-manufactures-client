import React from "react";
import GetInTouch from "../GetInTouch/GetInTouch";
import Hero from "../Hero/Hero";
import Reviews from "../Reviews/Reviews";
import Statistic from "../Statistic/Statistic";
import Teams from "../Teams/Teams";
import Tools from "../Tools/Tools";

const Home = () => {
  return (
    <section>
      <Hero />
      <Statistic />
      <Tools />
      <Teams />
      <Reviews />
      <GetInTouch />
    </section>
  );
};

export default Home;
