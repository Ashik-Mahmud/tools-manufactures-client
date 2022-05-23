import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";
import ProductRow from "./ProductRow";
const ManageProduct = () => {
  const { data, isLoading, refetch } = useQuery("products", () =>
    fetch(`http://localhost:5000/products?uid=${auth?.currentUser?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const productData = data?.result;

  return (
    <div className="p-4">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Products</h3>
        <span>you can manage all the product which one ordered users</span>
      </div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : productData.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Creator</th>
                <th>Available Quantity</th>
                <th>Maximum Order Quantity</th>
                <th>Price</th>
                <th>Image</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, ind) => (
                <ProductRow
                  key={product._id}
                  {...product}
                  serialize={ind}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        ) : (
          "No product available yet."
        )}
      </div>
    </div>
  );
};

export default ManageProduct;
