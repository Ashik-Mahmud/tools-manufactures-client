import React from "react";
import TItle from "../../../Components/TItle/TItle";
import CardTool from "./CardTool";

const Tools = () => {
  return (
    <section id="tools">
      <div className="container mx-auto">
        <TItle
          title="Best Seller Tools"
          subTitle="you will see the all best seller tools here"
        />
        <div className="tools-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          <CardTool />
          <CardTool />
          <CardTool />
          <CardTool />
        </div>
      </div>
    </section>
  );
};

export default Tools;
