import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
import useTitle from "../../Hooks/useTitle";
const Purchase = () => {
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { purchaseId } = useParams();

  const { data, isLoading } = useQuery("products", () =>
    fetch(
      `https://tools-manufactures.herokuapp.com/products/one?uid=${auth?.currentUser?.uid}&&purchaseId=${purchaseId}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  /*  set Default value  */

  const [orderQtyField, setOrderQtyField] = useState(0);
  useTitle(data?.result.productName);
  if (isLoading) return <Loader />;

  const {
    _id,
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
    if (orderQty > availableQty)
      return toast.error(`Not Enough Stock this product.`);
    const orderData = {
      productInfo: {
        productName,
        image,
        price,
        orderQty,
        productId: _id,
      },
      address: {
        address,
        phone,
      },
      author: {
        name: auth?.currentUser?.displayName,
        email: auth?.currentUser?.email,
        uid: auth?.currentUser?.uid,
      },
      createdAt:
        new Date().toDateString() + "-" + new Date().toLocaleTimeString(),
    };
    sendOrderData(orderData);
  };

  /* Send Order data into Server */
  const sendOrderData = async (data) => {
    await fetch(
      `https://tools-manufactures.herokuapp.com/orders?uid=${auth?.currentUser?.uid}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success(result?.message);
          formRef.current.reset();
          navigate(`/dashboard/my-orders`);
        } else {
          toast.error(result?.message);
        }
      });
  };

  /* Validate Order quantity */

  const handleOrderQty = (event) => {
    setOrderQtyField(event.target.value);
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
                onClick={() => navigate(-1)}
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
                Minimum Order Quantity -<strong>{orderQty}pcs</strong>
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
            <form ref={formRef} onSubmit={handlePlaceOrderForm} action="">
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
                  value={orderQtyField || orderQty}
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
