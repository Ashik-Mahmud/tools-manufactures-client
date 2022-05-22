import React from "react";
import ProductRow from "./ProductRow";

const ManageProduct = () => {
  return (
    <div className="p-4">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Products</h3>
        <span>you can manage all the product which one ordered users</span>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Available Quantity</th>
              <th>Maximum Order Quantity</th>
              <th>Price</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <ProductRow />
            <ProductRow />
            <ProductRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProduct;
