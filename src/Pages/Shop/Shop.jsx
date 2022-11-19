import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useProduct from "../../Hooks/useProduct";
import useTitle from "../../Hooks/useTitle";
import CardTool from "../Home/Tools/CardTool";
const Shop = () => {
  useTitle("shops");
  const [products, loading, setProducts] = useProduct();
  /* Handle Search Option */
  const [searchLoading, setSearchLoading] = useState(false);
  const HandleSearchProduct = async (event) => {
    event.preventDefault();
    const searchText = event.target.search.value;
    if (!searchText) return toast.error(`Search field is required.`);
    await fetch(
      `https://tools-manufactures.onrender.com/products/search?q=${searchText}`
    )
      .then((res) => res.json())
      .then((result) => {
        setProducts(result?.searchedResult);
        setSearchLoading(true);
      });
  };

  return (
    <section id="shops">
      <div className="breadcrumb text-center py-20 bg-base-200">
        <div className="container mx-auto px-3">
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
            onSubmit={HandleSearchProduct}
            action=""
            className="search flex items-stretch p-2 px-4 bg-base-100 rounded-md w-full md:w-5/12 mx-auto my-2"
          >
            <input
              type="search"
              placeholder="Search Product..."
              className="p-4 outline-none w-full"
              name="search"
            />
            <button className="px-6 bg-primary text-white rounded-md">
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      <Fade bottom distance="30px">
        <div className="container mx-auto py-20 px-6">
          {loading || searchLoading ? (
            products.length > 0 ? (
              <div className="shop-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <CardTool key={product._id} {...product} />
                ))}
              </div>
            ) : (
              "No Product found."
            )
          ) : (
            <Loader />
          )}
        </div>
      </Fade>
    </section>
  );
};

export default Shop;
