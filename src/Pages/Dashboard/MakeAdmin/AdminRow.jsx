import React from "react";
import { toast } from "react-hot-toast";
const AdminRow = ({ uid, serialize, email, role, refetch }) => {
  /* Handle Make Admin  */
  const handleMakeAdmin = async (id) => {
    await fetch(`http://localhost:5000/users/admin?uid=${id}`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          toast.success(result?.message);
          refetch();
        }
      });
  };

  return (
    <tr>
      <th>{serialize + 1}</th>
      <td>{uid}</td>
      <td>{email}</td>
      <td>
        {role === "admin" ? (
          <button className="badge badge-primary">Admin</button>
        ) : (
          <button className="badge badge-success">User</button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleMakeAdmin(uid)}
          className="btn btn-primary btn-sm"
          disabled={role === "admin" && true}
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
