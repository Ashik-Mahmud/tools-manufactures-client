import React from "react";
import { BsTrash } from "react-icons/bs";

const ProductRow = () => {
  return (
    <tr>
      <th>1</th>
      <td>Cy Ganderton</td>
      <td>1000pcs</td>
      <td>100pcs</td>
      <td>100$</td>
      <td>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yM8W73QZ_kfxfNUZbmcWKIISTgMFLk7Tx7IzV_LDdfO_gT0kSukrDQL5h_K4MVCD6VI&usqp=CAU"
          alt="avatar"
          width={60}
          className="rounded shadow-sm bg-base-300 border p-1"
        />
      </td>
      <td>
        <button className="btn btn-error btn-sm">
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
