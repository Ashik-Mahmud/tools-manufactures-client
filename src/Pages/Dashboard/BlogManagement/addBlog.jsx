import React from "react";

const addBlog = () => {
  return (
    <div className="p-4 m-4">
      <h3 className="text-2xl font-semibold my-2">Add Blogs</h3>
      <form action="" className="shadow p-10 rounded flex flex-col gap-4">
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Title"
            id="title"
          />
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Category"
            id="category"
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
