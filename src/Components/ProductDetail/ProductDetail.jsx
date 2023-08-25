import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Ratings from "../Product/Ratings";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";
import "./ProductDetail.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

const ProductDetail = () => {
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState({});
    const [quantity, setQuantity] = useState(1); 
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProductDetails(id);
    }, [id]);

    const fetchProductDetails = async (productId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/find/${productId}`);
            const data = await response.json();
            setProductDetails(data);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };

    const breadcrumbsLinks = [
        { label: "Home", to: "/" },
        { label: "Products", to: "/products" },
        { label: productDetails.name }, 
    ];

    const addToCartHandler = () => {
        const productWithQuantity = {
            ...productDetails,
            quantity: quantity,
        };
        dispatch(addToCart(productWithQuantity)); 
    };

    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };

    return (
        <div className="product-detail-container">
            <Breadcrumbs links={breadcrumbsLinks} />
            <div className="product-grid">
                <div className="product-image-container">
                    {productDetails.imageUrl && (
                        <img
                            src={productDetails.imageUrl}
                            alt={productDetails.name}
                            className="product-image"
                        />
                    )}
                </div>
                <div className="product-details">
                    <h2 className="product-name styled-heading">{productDetails.name}</h2>
                    <Ratings rating={productDetails?.ratings} />
                    <div className="product-price">
                        <span>₦{productDetails.originalPrice}</span>
                    </div>
                    <div className="quantity-selector">
                        <label htmlFor="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            min="1"
                            max="10"
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <button className="add-to-cart-button" onClick={addToCartHandler}>
                        Add to Cart
                        <AiOutlineShoppingCart size={20} className="cart-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
