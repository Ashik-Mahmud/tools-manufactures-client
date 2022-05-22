import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
const Payment = () => {
  const { paymentId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center min-h-[80vh] px-3">
      <div className="card shadow p-3 rounded w-full md:w-1/3">
        <div className="card-body ">
          <div className="flex items-center gap-3">
            <MdArrowBackIos
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            />
            <h3 className="text-xl font-semibold">Product Name Goes here</h3>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yM8W73QZ_kfxfNUZbmcWKIISTgMFLk7Tx7IzV_LDdfO_gT0kSukrDQL5h_K4MVCD6VI&usqp=CAU"
            alt="stiper"
            className="border rounded w-full my-3"
          />
          <ul className="flex flex-wrap gap-2 items-center my-4">
            <li>
              Order Quantity - <strong>232pcs</strong>
            </li>
            <li>
              Name - <strong>Ashik Mahmud</strong>
            </li>
            <li>
              Email - <strong>ashik@gmail.com</strong>
            </li>
          </ul>
          <div className="payment-option">
            <button className="btn btn-primary">Pay $3435</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
