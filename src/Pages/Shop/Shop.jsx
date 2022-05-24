import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useProduct from "../../Hooks/useProduct";
import CardTool from "../Home/Tools/CardTool";

const Shop = () => {
  const [products, loading] = useProduct();
  return (
    <section id="shops">
      <div className="breadcrumb text-center py-20 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-3xl">Shop Page</h2>
          <div className="text-md breadcrumbs ">
            <ul className="justify-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Shop </li>
            </ul>
          </div>
          <form
            action=""
            className="search flex items-stretch p-2 bg-base-100 rounded-md w-full md:w-5/12 mx-auto my-2"
          >
            <input
              type="search"
              placeholder="Search Product..."
              className="p-4 outline-none w-full"
            />
            <button className="px-6 bg-primary text-white rounded-md">
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto py-20">
        {loading ? (
          <div className="shop-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
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

export default Shop;
