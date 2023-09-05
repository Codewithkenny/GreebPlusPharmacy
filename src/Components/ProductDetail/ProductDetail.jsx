import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import './ProductDetail.css';
import { addToCart } from '../../Redux/Actions/cartActions'; import axios from 'axios';

const ProductDetail = () => {
    const { id } = useParams();
    const { cartItems } = useSelector((state) => state.cart);
    const [productDetail, setProductDetail] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductDetail(id);
    }, [id]);

    const fetchProductDetail = async (productId) => {
        try {
        const response = await axios.get(`http://localhost:5000/api/products/product-details/${productId}`);
        setProductDetail(response.data)
        } catch (error){
            console.log("Error", error)}
        // if (!response.ok) {
        //     throw new Error("Error fetching product details");
        // }
        // const data = await response.json();
        // console.log(data);
    
    };

    const addToCartHandler = (productId) => {
        const productInCart = cartItems.find(item => item._id === productId);

        if (!productInCart) {
            dispatch(addToCart(productDetail)); // Dispatch the addToCart action
            toast.success("Item added to cart successfully!", { autoClose: 400 });
        } else {
            toast.error("Item already in cart!", { autoClose: 400 });
        }
    };


    if (!productDetail) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-details-container">
            <nav className="breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><span className="breadcrumb-arrow">{'>'}</span></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><span className="breadcrumb-arrow">{'>'}</span></li>
                    <li>{productDetail.name}</li>
                </ul>
            </nav>
            <div className="container">
                <div className="product-card">
                    <img src={productDetail.imageUrl} alt={productDetail.name} style={{ maxWidth: "100%" }} />
                </div>
                <div className="product-card product-details">
                    <h2 className="text-dark">{productDetail.name}</h2>
                    <p className="product-details-description" style={{ color: 'black' }}>{productDetail.description}</p>
                    <p className="product-details-price" style={{ color: 'black' }}>Price: ₦{productDetail.price.toFixed(2)}</p>
                    <p className="product-details-quantity">Quantity: {productDetail.quantity}</p>
                    <button className="add-to-cart-button" onClick={() => addToCartHandler(productDetail._id)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
