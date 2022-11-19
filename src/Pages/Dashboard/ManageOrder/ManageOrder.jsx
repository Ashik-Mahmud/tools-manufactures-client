import React from "react";
import { useQuery } from "react-query";
import auth from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
import Loader from "./../../../Components/Loader/Loader";
import OrderMangeRow from "./OrderMangeRow";
const ManageOrder = () => {
  useTitle("Manage Order");
  const { data, isLoading, refetch } = useQuery("orders", () =>
    fetch(
      `https://tools-manufactures.onrender.com/orders/all?uid=${auth?.currentUser?.uid}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  if (isLoading) return <Loader />;
  const orderData = data?.result;

  return (
    <div className="p-4">
      <div className="title my-4 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Manage Orders</h3>
          <span>you can manage all the orders from here</span>
        </div>
        <select className="select select-bordered ">
          <option>Select Option</option>
          <option>Pending</option>
          <option>Unpaid</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        {orderData.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Image</th>
                <th>Status</th>
                <th>Shipped</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order, ind) => (
                <OrderMangeRow
                  key={order._id}
                  {...order}
                  refetch={refetch}
                  serialize={ind}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <div className="py-10 text-center">
              <h3 className="text-3xl font-semibold">No Order Placed yet.</h3>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageOrder;
