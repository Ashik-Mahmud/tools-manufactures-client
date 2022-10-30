import React from "react";
import { toast } from "react-hot-toast";
import auth from "../../../Firebase/Firebase.config";
const addBlog = () => {
  /*   Handle Create Brand New Post For Users */
  const handleCreatePostForm = async (event) => {
    event.preventDefault();
    const title = event.target.title.value.trim();
    const category = event.target.category.value.trim();
    const description = event.target.description.value.trim();
    const blogData = {
      title: title,
      category: category,
      description: description,
      createAt: new Date().toDateString(),
      author: {
        name: auth?.currentUser?.displayName,
        uid: auth?.currentUser?.uid,
      },
    };

    await fetch(
      `https://tools-manufactures-server-production.up.railway.app/blogs`,
      {
        method: "POST",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success(result.message);
          event.target.reset();
        }
      });
  };
  return (
    <div className="p-4 m-4">
      <h3 className="text-2xl font-semibold my-2">Add Blogs</h3>
      <form
        onSubmit={handleCreatePostForm}
        action=""
        className="shadow p-10 rounded flex flex-col gap-4"
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Title"
            id="title"
            required
            name="title"
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Category"
            name="category"
            id="category"
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            className="textarea textarea-bordered w-full"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary my-2">Save</button>
        </div>
      </form>
    </div>
  );
};

export default addBlog;
