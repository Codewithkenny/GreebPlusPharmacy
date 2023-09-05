import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";
import Ratings from "../../Components/Ratings/Ratings";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductPage.css";

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const { cart } = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/products");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addToCartHandler = (id) => {
        const product = products.find((item) => item._id === id);
        if (!product) return;

        const isItemExists = cart && cart.find((item) => item._id === id);
        if (isItemExists) {
            toast.error("Item already in cart!", { autoClose: 400 });
        } else {
            dispatch(addToCart(product));
            toast.success("Item added to cart successfully!", { autoClose: 400 });
        }
    };

    return (
        <div className="product-list">
            {products.map((data) => (
                <div key={data._id} className="product-item">
                    <Link to={`/products/product-details/${data._id}`}> 
                        <img
                            src={data.imageUrl}
                            alt={data.name}
                            className="product-image"
                        />
                        <h4 className="product-name">
                            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
                        </h4>
                        <div className="product-ratings">
                            <Ratings rating={data?.ratings} />
                        </div>
                        <div className="product-price">
                            <span>₦{data.price}</span>
                        </div>
                    </Link>
                    <div className="product-actions">
                        <button
                            className="add-to-cart-button"
                            onClick={() => addToCartHandler(data._id)}
                        >
                            Add to Cart
                        </button>
                        {open && <ProductDetail setOpen={setOpen} data={data} />}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
