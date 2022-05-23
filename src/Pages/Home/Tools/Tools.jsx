import React from "react";
import Loader from "../../../Components/Loader/Loader";
import TItle from "../../../Components/TItle/TItle";
import useProduct from "../../../Hooks/useProduct";
import CardTool from "./CardTool";
const Tools = () => {
  const [products, loading] = useProduct();
  return (
    <section id="tools" className="px-8 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Best Seller Tools"
          subTitle="you will see the all best seller tools here"
        />
        {loading ? (
          <div className="tools-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
            {products?.slice(0, 4)?.map((product) => (
              <CardTool key={product._id} {...product} />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
};

export default Tools;
