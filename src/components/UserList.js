import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  console.log(users);
  return (
    <>
      {users.map((user) => (
        <div
          className="flex bg-gray-600 text-white w-80 h-10 mx-auto justify-between items-center mt-4"
          key={user.id}
        >
          <p className="pl-3">{user.user}</p>
          <div>
            <Link
              to={`/edit/${user.id}`}
              className="bg-orange-400 hover:bg-orange-700 rounded px-1"
            >
              Edit
            </Link>
            <button
              className="bg-red-500 hover:bg-red-700 rounded mx-2 px-1"
              onClick={() => {
                removeUser(user.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserList;
