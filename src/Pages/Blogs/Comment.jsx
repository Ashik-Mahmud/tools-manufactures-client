import React from "react";
import { BiTrash } from "react-icons/bi";
import auth from "../../Firebase/Firebase.config";

const Comment = ({ comment, author, createdAt }) => {
  return (
    <div className="comment flex gap-8 bg-base-200 p-2 rounded-md">
      <div className="avatar w-28 h-20 grid place-items-center text-4xl font-semibold lg:w-20 border rounded overflow-hidden">
        {author?.photo ? (
          <img src={author?.photo} alt={author?.name} />
        ) : (
          author.name.slice(0, 1)
        )}
      </div>
      <div className="details w-11/12">
        <div className="info flex items-center justify-between flex-wrap">
          <h3 className="text-md font-semibold">{author?.name}</h3>
          <div className="date">{createdAt}</div>
        </div>
        <p className="text-sm py-1">{comment}</p>
      </div>
      {auth?.currentUser?.uid === author.uid && (
        <div className="delete-btn cursor-pointer text-error">
          <BiTrash />
        </div>
      )}
    </div>
  );
};

export default Comment;
