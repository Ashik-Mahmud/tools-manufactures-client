import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import useTitle from "../../../Hooks/useTitle";

const ManageBlog = () => {
  useTitle("Manage Blogs");
  return (
    <div>
      <h3 className="text-3xl font-semibold">Manage Blog</h3>
      <div className="overflow-x-auto my-4">
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
            <tr>
              <th>1</th>
              <td>Cy Ganderton Quality Control Specialist</td>
              <td>Tech</td>
              <td>150</td>
              <td>6</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBlog;
