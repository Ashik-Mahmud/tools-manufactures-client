import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(
      `http://localhost:5000/payment/history?uid=${auth?.currentUser?.uid}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setPayments(result?.data);
      });
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Payment History</h2>
      <div className="overflow-x-auto my-5">
        {loading ? (
          payments.length > 0 ? (
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Order Quantity</th>
                  <th>TransactionID</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, ind) => (
                  <tr key={payment._id}>
                    <th>{ind + 1}</th>
                    <th>
                      <img
                        src={payment?.productInfo?.image}
                        alt={payment?.productInfo?.name}
                        width={60}
                        className="rounded shadow-sm bg-base-300 border p-1"
                      />
                    </th>
                    <td>{payment?.productInfo?.name}</td>
                    <td>{payment?.productInfo?.price}$</td>
                    <td>{payment?.productInfo?.orderQty} pcs</td>
                    <td>{payment?.transactionId}</td>
                    <td>
                      <button className="btn btn-xs btn-success">Paid</button>
                    </td>
                    <td>{payment?.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "No Order Found Yet."
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
