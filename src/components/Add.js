import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
const Add = () => {
  const [name, setName] = useState("");
  console.log(name);

  const navigate = useNavigate();
  const { addUser } = useContext(GlobalContext);
  const onClick = () => {
    const newUser = {
      id: uuid(),
      user: name,
    };
    addUser(newUser);
    navigate("/");
  };

  //   console.log(props);
  return (
    <div className="">
      <div className="App">
        <div className="w-full max-w-xs mx-auto">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
            onSubmit={onClick}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="user name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            {/* <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="********"
              />
            </div> */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add
              </button>
              <Link
                to="/"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
