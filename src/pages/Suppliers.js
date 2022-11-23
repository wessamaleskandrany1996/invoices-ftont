import React from "react";
import SideBar from "../components/SideBar";
import { BsThreeDots } from "react-icons/bs";

const Suppliers = () => {
  return (
    <div className="grid grid-cols-12">
      <SideBar />
      <div className="col-span-8 bg-gray-50 ">
        <p className=" h-fit ml-4 pt-2 font-semibold text-2xl">Suppliers</p>
        <div className="bg-white rounded m-4">
          <p className="p-3 font-semibold text-2xl">Search</p>
          <input
            className="border border-gray-400 rounded p-2 m-3 w-80"
            type="text"
            placeholder="Supplier name"
          />
        </div>
        <div className=" rounded m-4 text-xl ">
          <table className="table-auto w-full  text-gray-600">
            <thead className="bg-blue-200 items-center">
              <tr className="rounded">
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-blue-50 text-center">
              <tr>
                <td>1</td>
                <td>Wish Group</td>
                <td>example1@gmail.com</td>
                <td>01201101055</td>
                <td>
                  <BsThreeDots className="hover:bg-blue-300 rounded m-auto" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>ibrahim adel</td>
                <td>example2@gmail.com</td>
                <td>01201101056</td>
                <td>
                  <BsThreeDots className="hover:bg-blue-300 rounded m-auto" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>wessam ali</td>
                <td>example13@gmail.com</td>
                <td>01201101057</td>
                <td>
                  <BsThreeDots className="hover:bg-blue-300 rounded m-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
