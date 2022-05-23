import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../Components/Loader/Loader";
import TItle from "../../../Components/TItle/TItle";
import CardTool from "./CardTool";
const Tools = () => {
  const { data, isLoading } = useQuery("products", () =>
    fetch(`http://localhost:5000/products/all`).then((res) => res.json())
  );

  const productData = data?.result;
  console.log(data);
  if (isLoading) return <Loader />;
  return (
    <section id="tools" className="px-8 sm:px-0">
      <div className="container mx-auto">
        <TItle
          title="Best Seller Tools"
          subTitle="you will see the all best seller tools here"
        />

        <div className="tools-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
          {productData?.slice(0, 4).map((product) => (
            <CardTool key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
