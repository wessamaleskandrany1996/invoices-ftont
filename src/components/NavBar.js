import React from "react";
// import { useNavigate } from "react-router-dom";

// import { BsArrowLeftCircle } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="bg-white grid grid-cols-10 h-14 items-center  text-gray-600 ">
      <h2 className="col-span-1  text-center  text-2xl">
        <button className="bg-blue-400 text-white font-extrabold rounded px-2 hover:bg-blue-600">
          A-Wish
        </button>
        System
      </h2>
      {/* <BsArrowLeftCircle className=" text-3xl text-gray-600 text-center mx-auto hover:bg-blue-400 hover:rounded-full " /> */}
    </div>
  );
};

export default NavBar;
