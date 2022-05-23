import React from "react";
import { BsTrash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const OrderRow = ({ author, productInfo, address }) => {
  const navigate = useNavigate();
  const { productName, price, orderQty, image } = productInfo;
  return (
    <tr>
      <th>1</th>
      <td>
        <img
          src={image}
          alt={productName}
          width={60}
          className="rounded shadow-sm bg-base-300 border p-1"
        />
      </td>
      <td>{productName} </td>
      <td>{orderQty}pcs</td>
      <td>{price}$</td>
      <td>{address?.address}</td>
      <td>{address?.phone}</td>
      <td>
        <small>Not Available yet.</small>
      </td>
      <td>
        <button className="btn btn-accent btn-sm">UNPAID</button>
      </td>
      <td>
        <button
          onClick={() => navigate(`/dashboard/payment/1`)}
          className="btn-sm btn btn-primary"
        >
          Pay 184$
        </button>
      </td>
      <td>
        <button className="btn btn-error btn-sm">
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
