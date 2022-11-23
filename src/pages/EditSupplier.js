import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"; 

export default function EditSupplier() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        fetchSupplier();
      }, []);
    
      const fetchSupplier = async () => {
        await axios.get(`https://fakestoreapi.com/users/${id}`).then(({ data }) => {
          setUserName(data.username);
          setEmail(data.email);
          setPhone(data.phone);
        });
      };

      const updateSupplier = async (e) => {
        e.preventDefault();
        let result = await fetch(`https://fakestoreapi.com/users/${id}`, {
          method: "put",
          body: JSON.stringify({ userName, email, phone}),
          headers: {
            "Content-Type": "Application/json",
          },
        });
        await result.json();
        navigate("/suppliers");
      };

      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-6 col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title"> Edit Supplier</h3>
                  <hr></hr>
                  <div className="from-wrapper">
                    <form onSubmit={updateSupplier}>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={userName}
                          onChange={(e) => {
                            setUserName(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                          type="phone"
                          className="form-control"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-primary w-25 mb-3">{" "}
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}