import React from "react";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="bg-gray-50 col-span-2">
      <button className="bg-blue-500 text-white w-full text-2xl h-14 mt-14  rounded hover:bg-blue-600">
        Add New Invoice
      </button>
      <button className="bg-blue-500 text-white w-full text-2xl h-14 mt-3  rounded hover:bg-blue-600">
        Pay Bill
      </button>
      <button className="bg-blue-500 text-white w-full text-2xl h-14 mt-3  rounded hover:bg-blue-600">
        Add New User
      </button>
    </div>
  );
};

export default RightSide;
