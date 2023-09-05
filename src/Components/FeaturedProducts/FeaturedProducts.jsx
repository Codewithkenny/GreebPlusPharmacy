import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";
import Ratings from "../Ratings/Ratings";
import { toast } from "react-toastify";
import "./FeaturedProducts.css";
import axios from "axios";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [cart, setCart] = useState([]); // State for holding selected products
  const dispatch = useDispatch();

  useEffect(() => {
    fetchfeaturedProducts();
  }, []);

  const fetchfeaturedProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/featured-products");
      setFeaturedProducts(response.data);
    } catch (error) {
      console.error("Error fetching featured products:", error);
    }
  };

  const addToCartHandler = (product) => {
    const isItemExists = cart.find((item) => item._id === product._id);
    if (isItemExists) {
      alert("Item already in cart!");
    } else {
      setCart([...cart, product]); // Add product to cart state
      dispatch(addToCart(product)); // Dispatch action to update Redux cart
      toast.success("Item added to cart successfully!", { autoClose: 400 });
    }
  };

  return (
    <div className="featured-products">
      <h2 className="text-dark text-center">Featured Products</h2>
      <div className="product-list">
        {featuredProducts.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <Ratings rating={product.ratings} />
            <p className="product-price" style={{ color: 'black' }}>Price: ₦{product.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCartHandler(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
