import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

const OrderMangeRow = ({
  author,
  productInfo,
  address,
  paid,
  transactionId,
  _id,
}) => {
  /* Handle Shipped Order */
  const handleShipped = async (id) => {
    console.log(id);
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
