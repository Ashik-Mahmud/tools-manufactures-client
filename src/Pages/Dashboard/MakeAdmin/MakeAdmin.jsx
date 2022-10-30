import React from "react";
import { useQuery } from "react-query";
import Loader from "../../../Components/Loader/Loader";
import auth from "../../../Firebase/Firebase.config";
import useTitle from "../../../Hooks/useTitle";
import AdminRow from "./AdminRow";
const MakeAdmin = () => {
  useTitle("Make Admin");
  const { data, isLoading, refetch } = useQuery("Users", () =>
    fetch(
      `https://tools-manufactures-server-production.up.railway.app/users/all?uid=${auth?.currentUser.uid}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );

  const usersData = data?.result;

  return (
    <div className="p-4">
      <div className="title py-3">
        <h3 className="text-2xl font-semibold">Sign Up Users</h3>
        <span>all the user can see here</span>
      </div>

      <div className="overflow-x-auto">
        {!isLoading ? (
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User Id</th>
                <th>Email</th>
                <th>Role</th>
                <th>isLogin</th>
                <th>Action</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, ind) => (
                <AdminRow
                  key={user._id}
                  {...user}
                  serialize={ind}
                  refetch={refetch}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
