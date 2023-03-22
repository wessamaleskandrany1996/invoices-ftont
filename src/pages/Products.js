/** @format */

import React from "react";
import SideBar from "../components/SideBar";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get("http://fakestoreapi.com/products").then(({ data }) => {
      setProducts(data);
    });
  };

  const deleteProduct = (id) => {
    swal.fire({
      title: `are you sure you want to delete this product ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete("http://fakestoreapi.com/products/" + id)
          .then(({ data }) => {
            console.log(data.message);
            fetchProducts();
          })
          .catch(({ response: { data } }) => {
            console.log(data.message);
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-12">
      <SideBar />
      <div className="col-span-8 bg-gray-50 ">
        <p className=" h-fit ml-4 pt-2 font-semibold text-2xl">Products</p>
        <div className="bg-white rounded m-4">
          <p className="p-3 font-semibold text-2xl">Search</p>
          <input
            className="border border-gray-400 rounded p-2 m-3 w-80"
            type="text"
            placeholder="product name"
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
        <div className=" rounded m-4 text-xl ">
          <table className="table-auto w-full  text-gray-600">
            <thead className="bg-blue-200 items-center">
              <tr className="rounded">
                <th>Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="bg-blue-50 text-center">
              {products.length > 0 &&
                products
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (
                      value.title
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((row, key) => (
                    <tr key={key}>
                      <td>{row.id}</td>
                      <td>{row.title}</td>
                      <td>{row.price}</td>
                      <td>{row.amount}</td>
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

export default Products;
