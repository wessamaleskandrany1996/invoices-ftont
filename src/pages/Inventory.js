import React from "react";
import SideBar from "../components/SideBar";
import { FaProductHunt } from "react-icons/fa";

const Inventory = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar />
      <div className="grid grid-cols-2 col-span-8 bg-gray-50">
        <div className="bg-white w-72 h-36 m-5 rounded-full text-center  ">
          <p>Products</p>
          <FaProductHunt className="m-auto my-" />
        </div>
        <div className="bg-blue-200">asd</div>
        {/* <div className="bg-blue-200">asd</div>
        <div className="bg-blue-200">asd</div>
        <div className="bg-blue-200">asd</div>
        <div className="bg-blue-200">asd</div>
        <div className="bg-blue-200">asd</div> */}
      </div>
    </div>
  );
};

export default Inventory;
