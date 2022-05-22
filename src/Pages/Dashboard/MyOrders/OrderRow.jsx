import React from "react";
import { BsTrash } from "react-icons/bs";

const OrderRow = () => {
  return (
    <tr>
      <th>1</th>
      <td>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yM8W73QZ_kfxfNUZbmcWKIISTgMFLk7Tx7IzV_LDdfO_gT0kSukrDQL5h_K4MVCD6VI&usqp=CAU"
          alt="avatar"
          width={60}
          className="rounded shadow-sm bg-base-300 border p-1"
        />
      </td>
      <td>Stripper </td>
      <td>120pcs</td>
      <td>184$</td>
      <td>Dhaka, Bangladesh</td>
      <td>017845785487</td>
      <td>
        <button className="btn-sm btn btn-primary">Pay 184$</button>
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
