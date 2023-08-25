import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";
import Ratings from "../Ratings/Ratings";
import "./FeaturedProducts.css";
import axios from "axios";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]); 
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    fetchfeaturedProducts();
  }, []);

  const fetchfeaturedProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/featured-products");
      console.log("API Response Data:", response.data);
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
      dispatch(addToCart(product));
      alert("Item added to cart successfully!");
    }
  };
   
  return (
    <div className="latest-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {featuredProducts.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <Ratings rating={product.ratings} />
                <p>Price:  ₦{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
