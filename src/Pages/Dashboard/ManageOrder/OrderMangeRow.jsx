import React from "react";
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
  _id,
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
          `http://localhost:5000/orders/shipped?uid=${auth?.currentUser?.uid}&&shippedId=${id}`,
          {
            method: "PATCH",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              "content-type": "application/json",
            },
            body: JSON.string({ shipped: true }),
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

  return (
    <tr>
      <th>1</th>
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
        <button className={`${paid ? "btn-success" : "btn-error"} btn btn-xs`}>
          {paid ? "Pending..." : "Unpaid"}
        </button>
      </td>
      <td>
        <button
          onClick={() => handleShipped(_id)}
          disabled={!paid && true}
          className="btn-secondary btn btn-xs"
        >
          Shipped
        </button>
      </td>
      <td>
        <button className="btn-error btn btn-xs">
          <RiDeleteBack2Line />
        </button>
      </td>
    </tr>
  );
};

export default OrderMangeRow;
