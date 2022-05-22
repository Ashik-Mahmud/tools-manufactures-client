import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
const CardTeam = ({ image, name, designation }) => {
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 relative ">
        <img src={image} alt={name} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title mb-0 pb-0">{name}</h2>
        <p className="mb-0 text-sm uppercase text-gray-400">{designation}</p>
        <div className="card-actions">
          <div className="flex items-center gap-2">
            <button className="btn btn-square btn-sm">
              <BsFacebook />
            </button>
            <button className="btn btn-square btn-sm">
              <BsTwitter />
            </button>
            <button className="btn btn-square btn-sm">
              <BsLinkedin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
