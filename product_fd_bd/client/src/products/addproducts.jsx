import React,{useState,useEffect} from "react";
import axios from "axios";

const AddProduct = () => {
    const [productName,setProductName]=useState("");
    const [price,setPrice]=useState("");
    const [message,setMessage]=useState("");
    const [products,setProducts]=useState([]);
    useEffect(() => {
        fetchProducts();
    },[]);
    const handleSubmit = async(e) => {
        e.preventDefault();
        const data={productName,price};
        try{
            const res=await axios.post("http://localhost:5000/products", data);
            setMessage(res.data);
            const ifAlreadyExists=products.some(
                (p) => p.productName.toLowerCase() === productName.toLowerCase() && 
                Number(p.price) === Number(price)
            );
            if(!ifAlreadyExists){
                setProducts([...products,data]);
            }
            setProductName("");
            setPrice("");
        }
        catch(err){
            setMessage("Error Saving Product");
            console.log(err);
        }
    };
    const fetchProducts = async() => {
        try{
            const res=await axios.get("http://localhost:5000/products");
            setProducts(res.data);
        }
        catch(err){
            console.log("Error fetching products", err);
        }
    };

    return(
        <div style={{ margin: "20px" }}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label>Product Name: </label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
                </div>
                <br />
                <div>
                <label>Price: </label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                </div>
                <br />
                <button type="submit">Save Product</button>
            </form>
            {message && <p>{message}</p>}
            <h3>Saved Products</h3>
            <ul>
                {products.map((p, index) => (
                <li key={index}>
                    {p.productName} - ₹{p.price}
                </li>
                ))}
            </ul>
        </div>
    )
};

export default AddProduct;