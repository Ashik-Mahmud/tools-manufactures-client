import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
const ManageBlog = () => {
  useTitle("Manage Blogs");

  /* call to get all the added blogs for particular users */
  const { data, isLoading } = useQuery("blogs", () =>
    fetch(`http://localhost:5000/blogs?uid=${auth?.currentUser?.uid}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) return <Loader />;
  console.log(data);
  const blogsData = data?.result;
  return (
    <div>
      <h3 className="text-3xl font-semibold">Manage Blog</h3>
      <div className="overflow-x-auto my-4">
        {blogsData.length > 0 ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Category</th>
                <th>Views</th>
                <th>Comments</th>
                <th>Edit</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogsData.map((blog, ind) => (
                <tr key={blog._id}>
                  <th>{ind + 1}</th>
                  <td>{blog?.title}</td>
                  <td>{blog?.category}</td>
                  <td>{blog?.views ? blog.views : 0}</td>
                  <td>{blog?.comments ? blog.comments : 0}</td>
                  <td>
                    <button className="btn btn-xs btn-success">
                      <AiFillEdit />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-xs btn-error">
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold">No Blog created yet.</h2>
              <Link className="btn btn-primary my-6" to="/dashboard/add-blog">
                Add Blog
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ManageBlog;
