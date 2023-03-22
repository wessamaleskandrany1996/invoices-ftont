import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import swal from "sweetalert";

const Supplier = () => {
  const [supplier, setSupplier] = useState([]);
  const [searchSupplier, setSearchSupplier] = useState("");

  useEffect(() => {
    fetchSupplier();
  }, []);

  const fetchSupplier = async () => {
    await axios.get("https://fakestoreapi.com/users").then((data) => {
      setSupplier(data.data);
    });
  };
  const deleteSupplier = (id) => {
    swal.fire({
        title: `are you sure you want to delete this supplier ?`,
        showCancelButton: true
    }).then((data) =>{
        if(data.isConfirmed){
            axios.delete('https://fakestoreapi.com/users/' + id)
            .then(({ data }) => {
            console.log(data.message)
            fetchSupplier();
        }).catch(({ response: { data } }) => {
            console.log(data.message)
        })
        }
    })
}

  return (
      <div className="grid grid-cols-12">
        <SideBar />
        <div className="col-span-9 bg-gray-50 ">
          <p className=" h-fit ml-4 pt-2 font-semibold text-2xl">Suppliers</p>
          <div className="bg-white rounded m-4">
            <p className="p-3 font-semibold text-2xl">Search</p>
            <input
              className="border border-gray-400 rounded p-2 m-3 w-80"
              type="text"
              placeholder="supplier name"
              onChange={(e) => setSearchSupplier(e.target.value)}
            />
          </div>
        <div className=" rounded m-4 text-xl ">
          <table className="table-auto w-full  text-gray-600">
            <thead className="bg-blue-200 ">
              <tr className="rounded">
                <th className="text-start">Id</th>
                <th className="text-start">user Name</th>
                <th className="text-start">Email</th>
                <th className="text-start">Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {supplier &&
                supplier
                  .filter((value) => {
                    if (searchSupplier === "") {
                      return value;
                    } else if (
                      value.username
                        .toLowerCase()
                        .includes(searchSupplier.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((sup) => (
                    <tr key={sup.id}>
                      <td>{sup.id}</td>
                      <td>{sup.username}</td>
                      <td>{sup.email}</td>
                      <td>{sup.phone}</td>
                      <td>
                        <BsThreeDots className="hover:bg-blue-300 rounded mx-auto" />
                      </td>
                    </tr>
                    ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
