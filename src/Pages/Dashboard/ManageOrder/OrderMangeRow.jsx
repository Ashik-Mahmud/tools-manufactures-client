import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { RiDeleteBack2Line } from "react-icons/ri";
import Swal from "sweetalert2";
import auth from "../../../Firebase/Firebase.config";

const OrderMangeRow = ({
  author,
  productInfo,
  address,
  paid,
  transactionId,
  refetch,
  createdAt,
  _id,
  shipped,
  serialize,
}) => {
  /* Handle Shipped Order */
  const handleShipped = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Shipped it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tools-manufactures.onrender.com/orders/shipped?uid=${auth?.currentUser?.uid}&&shippedId=${id}`,
          {
            method: "PATCH",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "content-type": "application/json",
            },
            body: JSON.stringify({ shipped: true }),
          }
        )
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.success) {
              refetch();
              Swal.fire("Yeah!", "Your Product is shipped.", "success");
            }
          });
      }
    });
  };

  /* Handle Delete Order by Admin */
  const handleOrderDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://tools-manufactures.onrender.com/orders?uid=${auth?.currentUser?.uid}&&deleteId=${id}`,
          {
            method: "DELETE",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <tr>
      <th>{serialize + 1}</th>
      <td title={createdAt}>
        <BsCalendarDate className="cursor-pointer" />
      </td>
      <td>{author?.name}</td>
      <td>{author?.email}</td>
      <td>{address?.phone}</td>
      <td>{productInfo?.productName}</td>
      <td>{productInfo?.price}$</td>
      <td>{productInfo?.orderQty}pcs</td>
      <td>{Number(productInfo?.price) * Number(productInfo?.orderQty)}$</td>
      <td>
        <img
          src={productInfo?.image}
          alt={productInfo?.productName}
          width={60}
          className="rounded shadow-sm bg-base-300 border p-1"
        />
      </td>
      <td>
        <button
          className={`${
            paid ? (shipped ? "btn-primary" : "btn-success") : "btn-error"
          } btn btn-xs`}
        >
          {paid ? (shipped ? "Delivered" : "Pending") : "Unpaid"}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleShipped(_id)}
          disabled={!paid || (shipped && true)}
          className="btn-secondary btn btn-xs"
        >
          Shipped
        </button>
      </td>
      <td>
        <button
          disabled={shipped && true}
          onClick={() => handleOrderDelete(_id)}
          className="btn-error btn btn-xs"
        >
          <RiDeleteBack2Line />
        </button>
      </td>
    </tr>
  );
};

export default OrderMangeRow;
