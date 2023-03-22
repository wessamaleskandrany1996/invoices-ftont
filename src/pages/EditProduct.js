/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate ,useParams} from "react-router-dom";

export default function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState([]);
    const [option ,setOption] = useState('');

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then((data) => data.json())
        .then((val) => setCategory(val))
    },[])
    console.log(category);
    


    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        await axios.get(`http://localhost:9000/products/${id}`)
        .then(({ data }) => {
            setTitle(data.title)
            setPrice(data.price)
            setAmount(data.amount)
        }) 
    }

    const updateProduct =async(e)=>{
        e.preventDefault();
        let result =await fetch(`http://localhost:9000/products/${id}`, {
            method: 'put',
            body:JSON.stringify({title,price,amount,category:option}),
            headers:{
                'Content-Type':'Application/json'
            }
        });
        await result.json()
        navigate('/products')
    }

    return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 col-sm-6 col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title"> Edit Product</h3>
                            <hr></hr>
                            <div className="from-wrapper">
                            <form onSubmit={updateProduct}>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" 
                                        value={title}
                                        onChange={(e)=>{setTitle(e.target.value)}}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input type="float" min="1" className="form-control" 
                                            value={price}
                                            onChange={(e) => { setPrice(e.target.value) }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Amount</label>
                                        <input type="number" min="0" className="form-control" 
                                            value={amount}
                                            onChange={(e) => { setAmount(e.target.value) }}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Category</label>
                                        <select  className="form-select mb-3"
                                        value={option}
                                        onChange={(e)=>setOption(e.target.value)}
                                        >
                                            {
                                            category.map((opts,i) =>
                                                <option key={i}>{opts}</option>
                                            )
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary w-25 mb-3"> Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}