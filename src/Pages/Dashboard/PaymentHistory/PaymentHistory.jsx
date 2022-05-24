import React from "react";

const PaymentHistory = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">Payment History</h2>
      <div className="overflow-x-auto my-5">
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
            <tr>
              <th>1</th>
              <th>
                <img
                  src={""}
                  alt={"productName"}
                  width={60}
                  className="rounded shadow-sm bg-base-300 border p-1"
                />
              </th>
              <td>Product Name</td>
              <td>12$</td>
              <td>14 pcs</td>
              <td>reerdads345534</td>
              <td>
                <button className="btn btn-xs btn-success">Paid</button>
              </td>
              <td>23 Jan, 2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
