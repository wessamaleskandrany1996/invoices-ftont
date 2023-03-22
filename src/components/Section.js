import React from "react";
import { FcSalesPerformance, FcDocument, FcBusinessman } from "react-icons/fc";
import { FaProductHunt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Section = () => {
  return (
    <div className="bg-gray-50 grid grid-cols-2 col-span-9 gap-3 rounded">
      <p className="col-span-2 h-fit ml-4 pt-2 font-semibold text-2xl">
        Dashboard
      </p>
      <div className="bg-white rounded ml-3 h-fit">
        <h4 className="p-4 font-thin">Total Balance</h4>
        <div className="flex justify-between items-center pl-4">
          <FcSalesPerformance className="text-8xl" />
          <h4 className="relative  pr-3 text-2xl">0$</h4>
        </div>
      </div>
      <div className="mr-3 bg-white rounded ml-3 h-fit">
        <h4 className="p-4 font-thin">Total Products</h4>
        <div className="flex justify-between items-center pl-4">
          <FaProductHunt className="text-8xl text-blue-300" />
          <h4 className="relative  pr-3 text-2xl">0</h4>
        </div>
      </div>
      <div className="bg-white rounded ml-3 h-fit">
        <h4 className="p-4 font-thin">Total Invoice</h4>
        <div className="flex justify-between items-center pl-4">
          <FcDocument className="text-8xl" />
          <h4 className="relative  pr-3 text-2xl">0</h4>
        </div>
      </div>
      <div className="mr-3 bg-white rounded ml-3 h-fit">
        <h4 className="p-4 font-thin">Total Client</h4>
        <div className="flex justify-between items-center pl-4">
          <FcBusinessman className="text-8xl" />
          <h4 className="relative  pr-3 text-2xl">0</h4>
        </div>
      </div>
      <p className="col-span-2 h-fit ml-4 pt-2 font-semibold text-2xl">
        Invoices
      </p>
      <button className="bg-blue-400 w-fit ml-4 rounded px-3 h-10 hover:bg-blue-500 text-white font-medium">
        Add New Invoice
      </button>
      <table className="table-auto col-span-2 mx-3 text-gray-600">
        <thead className="bg-blue-200 items-center">
          <tr className="rounded">
            <th>Invoice NO</th>
            <th>Client Name</th>
            <th>Status</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-blue-50 text-center ">
          <tr>
            <td>1</td>
            <td>Wish Group</td>
            <td>Paid</td>
            <td>example1@gmail.com</td>
            <td>01201101055</td>
            <td>
              <BsThreeDots className="hover:bg-blue-300 rounded m-auto" />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>ibrahim adel</td>
            <td>Unpaid</td>
            <td>example2@gmail.com</td>
            <td>01201101056</td>
            <td>
              <BsThreeDots className="hover:bg-blue-300 rounded m-auto" />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>wessam ali</td>
            <td>Paid</td>
            <td>example3@gmail.com</td>
            <td>01201101054</td>
            <td>
              <BsThreeDots className="hover:bg-blue-300 rounded m-auto" />
            </td>
          </tr>
        </tbody>
      </table>
      <p className="col-span-2 h-fit ml-4 pt-2 font-semibold text-2xl">
        Clients
      </p>
      <button className="bg-blue-400 w-fit ml-4 rounded px-3 h-10 hover:bg-blue-500 text-white font-medium">
        Add New Client
      </button>
      <table className="table-auto col-span-2 mx-3 text-gray-600">
        <thead className="bg-blue-200 items-center">
          <tr className="rounded">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="bg-blue-50 text-center">
          <tr>
            <td>Wish Group</td>
            <td>example1@gmail.com</td>
            <td>01201101055</td>
          </tr>
          <tr>
            <td>ibrahim adel</td>
            <td>example2@gmail.com</td>
            <td>01201101056</td>
          </tr>
          <tr>
            <td>wessam ali</td>
            <td>example3@gmail.com</td>
            <td>01201101054</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Section;
