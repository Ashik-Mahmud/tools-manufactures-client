import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiSend } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import BeatLoader from "react-spinners/BeatLoader";
import Loader from "../../Components/Loader/Loader";
import auth from "../../Firebase/Firebase.config";
import useBlog from "../../Hooks/useBlog";
import Comment from "./Comment";
const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blogs, loading] = useBlog();
  const [commentText, setCommentText] = useState("");

  /* Get Real Time Comment for Each POST */
  const { data, isLoading, refetch } = useQuery(["comments", blogId], () =>
    fetch(
      `https://tools-manufactures.herokuapp.com/blogs/comments?postId=${blogId}`
    ).then((res) => res.json())
  );

  if (!loading) return <Loader />;

  const singleBlog = blogs.find((blog) => blog._id === blogId);

  /* Handle Comments */
  const handleSendComment = async () => {
    if (!commentText) return toast.error(`Comment field is required.`);
    const commentData = {
      comment: commentText,
      postId: blogId,
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
        photo: auth?.currentUser?.photoURL,
      },
      createdAt:
        new Date().toDateString() + " at " + new Date().toLocaleTimeString(),
    };
    await fetch(
      `https://tools-manufactures.herokuapp.com/blogs/comment?uid=${auth?.currentUser?.uid}`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(commentData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setCommentText("");
          refetch();
          commentCount();
        }
      });
  };

  const commentCount = async () => {
    await fetch(
      `https://tools-manufactures.herokuapp.com/blogs/commentCount?postId=${blogId}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ comment: 1 }),
      }
    ).then((res) => res.json());
  };

  return (
    <div className="blog-details py-10">
      <div className="container mx-auto shadow  rounded">
        <div className="card p-4 md:p-10">
          <div className="card-body">
            <div className="title flex items-center gap-3 my-3">
              <MdArrowBackIos
                onClick={() => navigate(-1)}
                className="cursor-pointer"
              />
              <h2 className="text-2xl font-semibold">{singleBlog?.title}</h2>
            </div>

            <div className="image h-52 w-full rounded-lg bg-base-300 grid place-items-center">
              Image Not Loaded
            </div>
            <ul className="meta flex items-center gap-4 my-2 flex-wrap">
              <li>
                Category - <strong>{singleBlog?.category}</strong>
              </li>
              <li>
                CreateAt - <strong>{singleBlog?.createAt}</strong>
              </li>
              <li>
                Author - <strong>{singleBlog?.author?.name}</strong>
              </li>
            </ul>
            <p className="desc text-slate-500 leading-7 my-5 text-md">
              {singleBlog?.description}
            </p>
          </div>
          <div className="card-footer">
            <hr />
            <div className="comments-area pt-5">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Comments</h3>
                <div className="flex items-center gap-3">
                  <FacebookShareButton url={window.location.href}>
                    <FacebookIcon size={40} round={true} />
                  </FacebookShareButton>
                  <TwitterShareButton url={window.location.href}>
                    <TwitterIcon size={40} round={true} />
                  </TwitterShareButton>
                  <WhatsappShareButton url={window.location.href}>
                    <WhatsappIcon size={40} round={true} />
                  </WhatsappShareButton>
                  <LinkedinShareButton url={window.location.href}>
                    <LinkedinIcon size={40} round={true} />
                  </LinkedinShareButton>
                </div>
              </div>
              <div className="commentBox flex items-stretch border my-5 p-2">
                <input
                  type="text"
                  placeholder="Type Comment..."
                  className="w-full p-5 outline-none"
                  value={commentText}
                  onChange={(event) => setCommentText(event.target.value)}
                />
                {auth?.currentUser ? (
                  <button
                    onClick={handleSendComment}
                    className="bg-base-300 px-6"
                  >
                    <BiSend />
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="bg-base-300 px-6"
                  >
                    <BiSend />
                  </button>
                )}
              </div>

              <div className="user-comments flex flex-col gap-4">
                {isLoading ? (
                  <div className="text-center py-3">
                    <BeatLoader color={"#1c95f8"} loading={loading} size={20} />
                  </div>
                ) : data?.result?.length > 0 ? (
                  data?.result.map((comment) => (
                    <Comment refetch={refetch} key={comment._id} {...comment} />
                  ))
                ) : (
                  <div className="text-center py-5">
                    <span className="text-xl font-semibold">
                      No Comments found yet.
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
