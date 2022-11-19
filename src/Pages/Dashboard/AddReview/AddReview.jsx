import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ReactStars from "react-stars";
import auth from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
const AddReview = () => {
  useTitle("Add Review");
  const [rating, setRating] = useState(0);

  /* Handle Add Review */
  const handleAddReview = async (event) => {
    event.preventDefault();
    const reviewText = event.target.reviewText.value;
    const reviewData = {
      reviewText,
      rating,
      reviewDate: new Date().toDateString(),
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
        photo: auth?.currentUser?.photoURL,
      },
    };
    if (rating && reviewText) {
      await fetch(
        `https://tools-manufactures.onrender.com/reviews?uid=${auth?.currentUser?.uid}`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            toast.success(result.message);
            event.target.reset();
          }
        });
    } else {
      toast.error(`Provide Valid Information`);
    }
  };

  /* Handle Review Text Limit */
  const [reviewError, setReviewError] = useState("");
  const handleReviewTextLimit = (e) => {
    const reviewText = e.target.value;
    if (reviewText.length === 250) {
      setReviewError(`Stop! Enough`);
    } else {
      setReviewError(null);
    }
  };

  return (
    <div className="p-5">
      <div className="title">
        <h2 className="text-xl font-semibold">Add Review</h2>
      </div>
      <form
        onSubmit={handleAddReview}
        action=""
        className="p-4 md:p-10 shadow rounded mt-4"
      >
        <div>
          <textarea
            className={`textarea textarea-bordered w-full ${
              reviewError &&
              "border-error outline-error shadow-error focus:outline-error"
            }`}
            placeholder="Review Description"
            name="reviewText"
            maxLength={250}
            onChange={handleReviewTextLimit}
          ></textarea>
          {reviewError && (
            <small className="block text-error">{reviewError}</small>
          )}
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
