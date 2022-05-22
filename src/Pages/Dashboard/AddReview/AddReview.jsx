import React, { useState } from "react";
import ReactStars from "react-stars";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <div className="p-5">
      <div className="title">
        <h2 className="text-xl font-semibold">Add Review</h2>
      </div>
      <form action="" className="p-4 md:p-10 shadow rounded mt-4">
        <div>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Review Description"
          ></textarea>
        </div>
        <div>
          <ReactStars
            count={5}
            onChange={setRating}
            size={34}
            color2={"#0E71F9"}
          />
        </div>
        <button className="btn btn-primary my-3">Send Feedback</button>
      </form>
    </div>
  );
};

export default AddReview;
