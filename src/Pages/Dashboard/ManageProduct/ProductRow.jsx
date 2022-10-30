import React from "react";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
import auth from "../../../Firebase/Firebase.config";

const ProductRow = ({
  productName,
  availableQty,
  orderQty,
  price,
  image,
  serialize,
  _id,
  refetch,
  creator,
  setModalProduct,
}) => {
  /* Handle Product Delete */
  const handleProductDelete = async (id) => {
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
          `https://tools-manufactures-server-production.up.railway.app/products?uid=${auth?.currentUser?.uid}&&deleteId=${id}`,
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
      <td>{productName}</td>
      <td>{creator?.name}</td>
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
        <label
          type="button"
          htmlFor="my-modal-3"
          className="btn btn-sm btn-success modal-button"
          onClick={() => setModalProduct({ _id, productName })}
        >
          Stock
        </label>
      </td>
      <td>
        <button
          onClick={() => handleProductDelete(_id)}
          className="btn btn-error btn-sm"
        >
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
