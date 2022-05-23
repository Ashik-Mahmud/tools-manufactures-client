import React from "react";

const AdminRow = ({ uid, serialize, email }) => {
  /* Handle Make Admin  */
  const handleMakeAdmin = async (id) => {
    await fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role: "admin" }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <tr>
      <th>{serialize + 1}</th>
      <td>{uid}</td>
      <td>{email}</td>
      <td>
        <button className="badge badge-success">User</button>
      </td>
      <td>
        <button
          onClick={() => handleMakeAdmin(uid)}
          className="btn btn-primary btn-sm"
        >
          Make Admin
        </button>
      </td>
    </tr>
  );
};

export default AdminRow;
