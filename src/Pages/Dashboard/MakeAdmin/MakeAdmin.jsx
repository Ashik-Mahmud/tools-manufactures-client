import React from "react";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  return (
    <div className="p-4">
      <div className="title py-3">
        <h3 className="text-2xl font-semibold">Sign Up Users</h3>
        <span>all the user can see here</span>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Id</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <AdminRow />
            <AdminRow />
            <AdminRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
