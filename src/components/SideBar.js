import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProductHunt, FaFileInvoice } from "react-icons/fa";
import { MdOutlineGroups, MdLogout, MdInventory } from "react-icons/md";
import { RiEmotionSadLine, RiEmotionLaughLine } from "react-icons/ri";

import { FcExpand } from "react-icons/fc";

const SideBar = () => {
  // const menu = [
  //   {
  //     title: "Dashboard",
  //     icon: "FaHome",
  //     path: "/",
  //   },
  //   {
  //     title: "Products",
  //     icon: "FaProductHunt",
  //     path: "/produts",
  //   },
  //   {
  //     title: "Invoices",
  //     icon: "FaFileInvoice",
  //     children: [
  //       {
  //         titel: "Purcheses",
  //         icon: "FaProductHunt",
  //         path: "/invoice/purcheses",
  //       },
  //       {
  //         titel: "Sales",
  //         icon: "FaProductHunt",
  //         path: "/invoice/sales",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Suppliers",
  //     icon: "MdOutlineGroups",
  //     path: "/suppliers",
  //   },
  //   {
  //     title: "Inventory",
  //     icon: "MdInventory",
  //     children: [
  //       {
  //         titel: "Products",
  //         icon: "FaProductHunt",
  //         path: "inventory/products",
  //       },
  //       {
  //         titel: "Transaction",
  //         icon: "FaProductHunt",
  //         path: "inventory/transaction",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Logout",
  //     icon: "MdLogout",
  //     path: "/login",
  //   },
  // ];
  const [subMenu, setsubMenu] = useState(false);
  const [subMenu2, setsubMenu2] = useState(false);
  return (
    <div className="px-3  text-xl bg-white w-auto max-h-fit  col-span-2">
      <ul className="font-semibold">
        <Link
          to="/dashboard"
          className="py-4 px-4 text-gray-600  hover:bg-blue-100 hover:text-blue-400 rounded flex items-center"
        >
          <FaHome className="text-3xl " />
          <p className="px-4">DashBoard</p>
        </Link>
        <Link
          to="/products"
          className="py-4 px-4 text-gray-600 hover:bg-blue-100 hover:text-blue-400 rounded flex items-center "
        >
          <FaProductHunt className="text-3xl" />
          <p className="px-3 ">Products</p>
        </Link>
        <Link
          onClick={() => setsubMenu(!subMenu)}
          // to="/invoice"
          className="py-4 px-4 text-gray-600 hover:bg-blue-100 hover:text-blue-400 rounded flex items-center"
        >
          <FaFileInvoice className="text-3xl" />
          <p className="px-3">Invoices</p>
          <FcExpand className={`mx-auto ${subMenu && "rotate-180"} `} />
        </Link>
        {subMenu && (
          <div
            style={{}}
            className=" w-36 mx-5  rounded  text-gray-600 text-xl  "
          >
            <Link className="flex  py-2  hover:bg-blue-100 items-center  ">
              <RiEmotionLaughLine className="text-3xl" />
              Purcheses
            </Link>
            <Link className="flex py-2 hover:bg-blue-100 text-center items-center">
              <RiEmotionSadLine className="text-3xl" />
              Sales
            </Link>
          </div>
        )}
        <Link
          to="/suppliers"
          className="py-4 px-4 text-gray-600 hover:bg-blue-100 hover:text-blue-400 rounded flex items-center"
        >
          <MdOutlineGroups className="text-3xl" />
          <p className="px-3">Suppliers</p>
        </Link>
        <Link
          onClick={() => setsubMenu2(!subMenu2)}
          // to="/inventory"
          className="py-4 px-4 text-gray-600 hover:bg-blue-100 hover:text-blue-400 rounded flex items-center"
        >
          <MdInventory className="text-3xl" />
          <p className="px-3">Inventory</p>
          <FcExpand className={`mx-auto ${subMenu2 && "rotate-180"} `} />
        </Link>
        {subMenu2 && (
          <div
            style={{}}
            className=" w-36 mx-5  rounded  text-gray-600 text-xl  "
          >
            <Link className="flex  py-2  hover:bg-blue-100 items-center  ">
              <RiEmotionLaughLine className="text-3xl" />
              Products
            </Link>
            <Link className="flex py-2 hover:bg-blue-100 text-center items-center">
              <RiEmotionSadLine className="text-3xl" />
              Transaction
            </Link>
          </div>
        )}

        <Link
          to="/login"
          className="py-4 px-4 text-gray-600 hover:bg-blue-100 hover:text-blue-400 rounded flex items-center"
        >
          <MdLogout className="text-3xl" />
          <p className="px-3">Logout</p>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
