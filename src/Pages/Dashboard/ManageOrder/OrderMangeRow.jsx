import React from "react";

const OrderMangeRow = () => {
  return (
    <tr>
      <th>1</th>
      <td>Ashik Mahmud</td>
      <td>ashik@gmail.com</td>
      <td>01874548745</td>
      <td>Striper</td>
      <td>128$</td>
      <td>100pcs</td>
      <td>5454$</td>
      <td>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yM8W73QZ_kfxfNUZbmcWKIISTgMFLk7Tx7IzV_LDdfO_gT0kSukrDQL5h_K4MVCD6VI&usqp=CAU"
          alt="avatar"
          width={60}
          className="rounded shadow-sm bg-base-300 border p-1"
        />
      </td>
      <td>
        <button className="btn-success btn btn-sm">PENDING..</button>
      </td>
      <td>
        <button className="btn-error btn btn-sm">Cancel</button>
      </td>
    </tr>
  );
};

export default OrderMangeRow;
