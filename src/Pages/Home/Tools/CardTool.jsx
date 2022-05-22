import React from "react";
import { useNavigate } from "react-router-dom";

const CardTool = () => {
  const navigate = useNavigate();
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yM8W73QZ_kfxfNUZbmcWKIISTgMFLk7Tx7IzV_LDdfO_gT0kSukrDQL5h_K4MVCD6VI&usqp=CAU"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Wire Stripper with Strip Clip
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            <span title="Minimum Order Quantity">MOQ</span>- 100pcs
          </div>
          <div className="badge badge-outline">Available- 1000pcs</div>
          <div className="badge badge-outline">115$</div>
        </div>
        <div class="card-actions justify-end mt-2">
          <button
            onClick={() => navigate(`/purchase/1`)}
            class="btn btn-primary"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTool;
