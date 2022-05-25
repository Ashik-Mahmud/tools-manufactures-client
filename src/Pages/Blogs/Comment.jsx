import React from "react";
import { BiTrash } from "react-icons/bi";

const Comment = () => {
  return (
    <div className="comment flex gap-8 bg-base-200 p-2 rounded-md">
      <div className="avatar w-28 lg:w-20 border rounded overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14GgJ3jEJ2pgW5pURY-Pzi3ayUjZPrbE82cPa8BBEZw=s96-c"
          alt="avatar"
        />
      </div>
      <div className="details w-11/12">
        <div className="info flex items-center justify-between flex-wrap">
          <h3 className="text-md font-semibold">Ashik Mahmud</h3>
          <div className="date">23 Jan, 2022 at 6:45PM</div>
        </div>
        <p className="text-sm py-1">This is awesome post really like</p>
      </div>
      <div className="delete-btn cursor-pointer text-error">
        <BiTrash />
      </div>
    </div>
  );
};

export default Comment;
