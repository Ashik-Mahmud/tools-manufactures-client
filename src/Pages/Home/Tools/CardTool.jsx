import React from "react";
import { useNavigate } from "react-router-dom";

const CardTool = ({
  image,
  productName,
  productDescription,
  availableQty,
  orderQty,
  price,
  _id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="h-52" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {productName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{productDescription.slice(0, 60)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-ghost">
            <span title="Minimum Order Quantity">MOQ</span>- {orderQty}pcs
          </div>
          <div className="badge badge-ghost">Available- {availableQty}pcs</div>
          <div className="badge badge-ghost">{price}$</div>
        </div>
        <div className="card-actions justify-end mt-2">
          <button
            onClick={() => navigate(`/purchase/${_id}`)}
            className="btn btn-primary"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTool;
