import React from "react";
import { BiSend } from "react-icons/bi";
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useBlog from "../../Hooks/useBlog";
import Comment from "./Comment";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blogs, loading] = useBlog();
  if (!loading) return <Loader />;

  const singleBlog = blogs.find((blog) => blog._id === blogId);

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
              <h3 className="text-xl font-semibold">Comments</h3>
              <div className="commentBox flex items-stretch border my-5 p-2">
                <input
                  type="text"
                  placeholder="Type Comment..."
                  className="w-full p-5 outline-none"
                />
                <button className="bg-base-300 px-6">
                  <BiSend />
                </button>
              </div>

              <div className="user-comments flex flex-col gap-4">
                <Comment />
                <Comment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
