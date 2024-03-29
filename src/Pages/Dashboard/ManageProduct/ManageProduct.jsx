import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
import ProductRow from "./ProductRow";
const ManageProduct = () => {
  useTitle("Manage Product");
  const [modalProduct, setModalProduct] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const { data, isLoading, refetch } = useQuery(["products", pageCount], () =>
    fetch(
      `https://tools-manufactures.onrender.com/products?uid=${auth?.currentUser?.uid}&&page=${pageCount}&&limit=6`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  const productData = data?.result;

  const pageNumber = Math.ceil(data?.count / 6);

  /* Handle Update Stock Product */
  const [stock, setStock] = useState("");

  const handleUpdateStock = async (event) => {
    event.preventDefault();
    await fetch(
      `https://tools-manufactures.onrender.com/products/update-stock?uid=${auth?.currentUser?.uid}`,
      {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({ productId: modalProduct?._id, stock }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success(result?.message);
          refetch();
          setModalProduct(null);
          setStock("");
        }
      });
  };

  return (
    <div className="p-4">
      <div className="title my-2 mb-6">
        <h3 className="text-2xl font-semibold">Manage Products</h3>
        <span>you can manage all the product which one ordered users</span>
      </div>
      <div className="overflow-x-auto">
        {isLoading ? (
          <Loader />
        ) : productData.length > 0 ? (
          <>
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Creator</th>
                  <th>Available Quantity</th>
                  <th>Maximum Order Quantity</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Stock Manage</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((product, ind) => (
                  <ProductRow
                    key={product._id}
                    {...product}
                    serialize={ind}
                    refetch={refetch}
                    setModalProduct={setModalProduct}
                  />
                ))}
              </tbody>
            </table>
            <div className="btn-group flex justify-end my-3 items-center">
              {[...Array(pageNumber).keys()].map((page) => (
                <button
                  onClick={() => setPageCount(page)}
                  className={`btn  btn-sm btn-outline ${
                    page === pageCount && "btn-active"
                  }`}
                  key={page}
                >
                  {page + 1}
                </button>
              ))}
            </div>
          </>
        ) : (
          "No product available yet."
        )}
      </div>
      {modalProduct && (
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">{modalProduct?.productName}</h3>
              <p>Here you can update this product stock as admin</p>
              <form onSubmit={handleUpdateStock} action="" className="my-2">
                <div className="my-4">
                  <label htmlFor="stock">Update Available Quantity</label>
                  <input
                    type="number"
                    placeholder="Put Your Quantity"
                    className="input input-bordered w-full my-3"
                    id="stock"
                    value={stock}
                    onChange={(event) => setStock(event.target.value)}
                    required
                  />
                </div>
                <div className="text-right">
                  <button className="btn">Update Stock</button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageProduct;
