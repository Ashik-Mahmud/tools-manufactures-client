import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
const Purchase = () => {
  const [error, setError] = useState("");
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
  if (isLoading) return <Loader />;

  const {
    image,
    productName,
    productDescription,
    price,
    availableQty,
    orderQty,
  } = data?.result;

  /* Handle Place Order Form */
  const handlePlaceOrderForm = async (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const orderQty = event.target.orderQty.value;
    if (!phone) return toast.error(`Phone field is required`);
    if (!/[0-9]/.test(phone))
      return toast.error(`Phone number must need number value`);
    if (!address) return toast.error(`Address field is required`);
    if (!orderQty) return toast.error(`Order Quantity field is required`);
    const orderData = {
      productInfo: {
        productName,
        image,
        price,
        orderQty,
      },
      address: {
        address,
        phone,
      },
      author: {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
      },
      createdAt:
        new Date().toDateString() + "-" + new Date().toLocaleTimeString(),
    };
    sendOrderData(orderData);
  };

  /* Send Order data into Server */
  const sendOrderData = async (data) => {
    await fetch(`http://localhost:5000/orders?uid=${auth?.currentUser?.uid}`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  /* Validate Order quantity */

  const handleOrderQty = (event) => {
    const value = Number(event.target.value);
    const orderQtyValue = Number(orderQty);
    const totalStock = Number(availableQty);
    if (value > totalStock) {
      setError(`Your order quantity should be in ${totalStock}`);
    } else if (value < orderQtyValue) {
      setError(`Quantity must be greater than ${orderQtyValue}`);
    } else {
      setError("");
    }
  };

  return (
    <section className="p-4 md:p-10">
      <div className="container mx-auto">
        <div className="purchase-content shadow my-5 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <MdArrowBackIos
                onClick={() => navigate("/")}
                className="cursor-pointer"
              />
              <h3 className="text-2xl">{productName}</h3>
            </div>
            <img
              src={image}
              alt={productName}
              className="w-full h-80 object-contain"
            />
            <ul className="flex flex-wrap items-center gap-3">
              <li>
                Maximum Order Quantity -<strong>{orderQty}pcs</strong>
              </li>
              <li>
                Available Quantity -<strong>{availableQty}pcs</strong>
              </li>
              <li>
                Per Unit Prices - <strong>{price}$</strong>
              </li>
            </ul>
            <div className="desc my-4 text-sm text-slate-500 font-montserrat">
              {productDescription}
            </div>
          </div>
          <div>
            <form onSubmit={handlePlaceOrderForm} action="">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={auth?.currentUser?.displayName}
                  readOnly
                  className="bg-base-200 p-3 rounded outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="name">Email</label>
                <input
                  type="text"
                  value={auth?.currentUser?.email}
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
                  name="phone"
                />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="address">Shipping Address</label>
                <textarea
                  type="text"
                  className="border p-3 rounded outline-none"
                  id="address"
                  name="address"
                  placeholder="Address"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label htmlFor="orderQty">Order Quantity</label>
                <input
                  type="number"
                  className={`border p-3 rounded outline-none ${
                    error && "border-error"
                  }`}
                  name="orderQty"
                  id="orderQty"
                  onChange={handleOrderQty}
                  defaultValue={orderQty}
                />
                {error && <small className="text-error">{error}</small>}
              </div>
              <div className="my-3">
                <button
                  className="btn btn-primary px-10"
                  disabled={error && true}
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
