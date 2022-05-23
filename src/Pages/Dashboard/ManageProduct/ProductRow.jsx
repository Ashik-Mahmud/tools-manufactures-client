import React from "react";
import { BsTrash } from "react-icons/bs";

const ProductRow = ({
  productName,
  availableQty,
  orderQty,
  price,
  image,
  serialize,
}) => {
  return (
    <tr>
      <th>{serialize + 1}</th>
      <td>{productName}</td>
      <td>{availableQty}pcs</td>
      <td>{orderQty}pcs</td>
      <td>{price}$</td>
      <td>
        <img
          src={image}
          alt={productName}
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
