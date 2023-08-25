import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addProduct } from "../Actions/productActions";

export const addProduct =  (product) =>(dispatch) => {
    try {
        const response = axios.post("http://localhost:5000/admin/add-products", product)
        dispatch({ type: "ADD_PRODUCT", payload: response.data});
        console.log("Product added successfully:", response.data);
    } catch (error) {
        console.log("Error adding product:", response.data);
    }
}

const AddProducts = () => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        quantity: "",
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProduct(product));
        setProduct({
            id: "",
            name: "",
            description: "",
            price: "",
            quantity: "",
        });
    };

    return (
        <div>
            <h2>Add Products</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id">ID:</label>
                    <input type="text" name="id" value={product.id} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="name">Description:</label>
                    <input type="text" name="name" value={product.description} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Quantity:</label>
                    <input type="text" name="price" value={product.quantity} onChange={handleChange} />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;