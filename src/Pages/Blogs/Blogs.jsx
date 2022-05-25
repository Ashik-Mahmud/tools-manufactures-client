import React from "react";
import { BsSearch } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import useBlog from "../../Hooks/useBlog";
import useTitle from "../../Hooks/useTitle";
import CardBlog from "./CardBlog";
const Blogs = () => {
  useTitle("Blogs");
  const [blogs, loading] = useBlog();
  if (!loading) return <Loader />;
  return (
    <section className="blogs">
      <div className="breadcrumb text-center py-20 bg-base-200">
        <div className="container mx-auto">
          <h2 className="text-3xl">Blogs Page</h2>
          <div className="text-md breadcrumbs ">
            <ul className="justify-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blogs </li>
            </ul>
          </div>
          <form
            action=""
            className="search flex items-stretch p-2 bg-base-100 rounded-md w-full md:w-5/12 mx-auto my-2"
          >
            <input
              type="search"
              placeholder="Search Blog..."
              className="p-4 outline-none w-full"
            />
            <button className="px-6 bg-primary text-white rounded-md">
              <BsSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto py-10">
        {blogs.length > 0 ? (
          <Fade bottom distance="30px">
            <div className="blogs-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
              {blogs.map((blog) => (
                <CardBlog key={blog._id} {...blog} />
              ))}
            </div>
          </Fade>
        ) : (
          <>
            <div className="text-center py-10">
              <h3 className="text-2xl font-semibold">No Blog posted yet.</h3>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blogs;
