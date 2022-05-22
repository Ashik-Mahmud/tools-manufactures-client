import React from "react";
import Company from "../Company/Company";
import GetInTouch from "../GetInTouch/GetInTouch";
import Hero from "../Hero/Hero";
import OrderStep from "../OrderStep/OrderStep";
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
      <OrderStep />
      <Company />
      <GetInTouch />
    </section>
  );
};

export default Home;
