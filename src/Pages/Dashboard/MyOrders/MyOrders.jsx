import React from "react";
import OrderRow from "./OrderRow";
const MyOrders = () => {
  return (
    <section className="my-orders">
      <div className="title my-5">
        <h2 className="text-2xl">My Orders</h2>
        <span>Here you will get all the orders.</span>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Order Quantity</th>
              <th>Prices (per)</th>
              <th>Address</th>
              <th>Phone</th>
              <th>TransactionID</th>
              <th>Status</th>
              <th>Pay</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <OrderRow />
            <OrderRow />
            <OrderRow />
            <OrderRow />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MyOrders;
