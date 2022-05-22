import React from "react";
import OrderMangeRow from "./OrderMangeRow";

const ManageOrder = () => {
  return (
    <div className="p-4">
      <div className="title my-4">
        <h3 className="text-2xl font-semibold">Manage Orders</h3>
        <span>you can manage all the orders from here</span>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Product Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <OrderMangeRow />
            <OrderMangeRow />
            <OrderMangeRow />
            <OrderMangeRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
