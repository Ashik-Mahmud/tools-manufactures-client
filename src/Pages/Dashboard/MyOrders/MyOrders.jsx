import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";
import OrderRow from "./OrderRow";
const MyOrders = () => {
  const { data, isLoading } = useQuery("Orders", () =>
    fetch(`http://localhost:5000/orders?uid=${auth?.currentUser?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loader />;
  const orderData = data?.result;
  return (
    <section className="my-orders">
      <div className="title my-5">
        <h2 className="text-2xl">My Orders</h2>
        <span>Here you will get all the orders.</span>
      </div>
      <div className="overflow-x-auto">
        {orderData.length > 0 ? (
          <table className="table w-full">
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
              {orderData.map((order) => (
                <OrderRow key={order._id} {...order} />
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h2 className="text-2xl py-3 font-semibold text-center">
              Not Order Placed yet.
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default MyOrders;
