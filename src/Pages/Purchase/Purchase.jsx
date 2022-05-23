import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
const Purchase = () => {
  const navigate = useNavigate();
  const { purchaseId } = useParams();
  const { data, isLoading } = useQuery("products", () =>
    fetch(
      `http://localhost:5000/products/one?uid=${auth?.currentUser?.uid}&&purchaseId=${purchaseId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  const purchaseProduct = data?.result;

  if (isLoading) return <Loader />;
  return (
    <section className="p-4 md:p-10">
      <div className="container mx-auto">
        <div className="purchase-content shadow my-5 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <MdArrowBackIos
                onClick={() => navigate(-1)}
                className="cursor-pointer"
              />
              <h3 className="text-2xl">{purchaseProduct?.productName}</h3>
            </div>
            <img
              src={purchaseProduct?.image}
              alt={purchaseProduct?.productName}
              className="w-full h-80 object-contain"
            />
            <ul className="flex flex-wrap items-center gap-3">
              <li>
                Maximum Order Quantity -
                <strong>{purchaseProduct?.orderQty}pcs</strong>
              </li>
              <li>
                Available Quantity -
                <strong>{purchaseProduct?.availableQty}pcs</strong>
              </li>
              <li>
                Per Unit Prices - <strong>{purchaseProduct?.price}$</strong>
              </li>
            </ul>
            <div className="desc my-4 text-sm text-slate-500 font-montserrat">
              {purchaseProduct?.productDescription}
            </div>
          </div>
          <div>
            <form action="">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={"Ashik Mahmud"}
                  readOnly
                  className="bg-base-200 p-3 rounded outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  value={"ashikmahmud@gmail.com"}
                  readOnly
                  className="bg-base-200 p-3 rounded outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="address">Address</label>
                <textarea
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="address"
                  placeholder="Address"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="phone">Order Quantity</label>
                <input
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="phone"
                  placeholder="Phone Number"
                  defaultValue={100}
                />
              </div>
              <div className="my-3">
                <button className="btn btn-primary px-10">Place Order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
