import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1TGlIFKTQHETSiTvzqn7XB7QHqL6Gxa3GbqnLZvO1wVtSFdMdEZdEvVY5KhbRUvhyUeBYgvhFIjSKtWg808bal00uf2cj4Hg"
);

const Payment = () => {
  const { paymentId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useQuery("Orders", () =>
    fetch(
      `https://tools-manufactures.herokuapp.com/orders?uid=${auth?.currentUser?.uid}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  useTitle(
    data.result.find((order) => order._id === paymentId).productInfo
      ?.productName
  );

  if (isLoading) return <Loader />;

  const singleOrder = data.result.find((order) => order._id === paymentId);

  return (
    <div className="grid place-items-center min-h-[80vh] px-3">
      <div className="card shadow  rounded w-full md:w-1/3">
        <div className="card-body p-4">
          <div className="flex items-center gap-3">
            <MdArrowBackIos
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h3 className="text-xl font-semibold">
              {singleOrder?.productInfo?.productName}
            </h3>
          </div>
          <img
            src={singleOrder?.productInfo?.image}
            alt={singleOrder?.productInfo?.productName}
            className="border rounded w-full h-52 object-contain my-3"
          />
          <ul className="flex flex-wrap flex-col gap-2 items-start  my-4">
            <li className="flex items-center justify-between w-full">
              Order Quantity -{" "}
              <strong>{singleOrder?.productInfo?.orderQty}pcs</strong>
            </li>
            <li className="flex items-center justify-between w-full">
              Price
              <strong>{singleOrder?.productInfo?.price}$</strong>
            </li>
            <li className="flex items-center justify-between w-full">
              Name - <strong>{singleOrder?.author?.name}</strong>
            </li>
            <li className="flex items-center justify-between w-full">
              Email - <strong>{singleOrder?.author?.email}</strong>
            </li>
          </ul>
          <div className="payment-option">
            <Elements stripe={stripePromise}>
              <CheckoutForm singleOrder={singleOrder} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
