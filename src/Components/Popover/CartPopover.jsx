import React, { useState, useRef, useEffect } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    removeFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
} from "../Reducers/cartReducer";
import Scrollbars from "react-scrollbars-custom";

import "./CartPopover.css";

const CartPopover = () => {
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const popoverRef = useRef(null);
    const [isScrollable, setIsScrollable] = useState(false);
    

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const handleDecreaseCartItemQuantity = (productId) => {
        dispatch(decreaseCartItemQuantity(productId));
    };

    const handleIncreaseCartItemQuantity = (productId) => {
        dispatch(increaseCartItemQuantity(productId));
    };

    const calculateTotals = () => {
        let totalQuantity = 0;
        let totalAmount = 0;

        cartItems.forEach((item) => {
            if (!isNaN(item.cartQuantity) && !isNaN(item.price)) {
                totalQuantity += item.cartQuantity;
                totalAmount += item.price * item.cartQuantity;
            }
        });

        return { totalQuantity, totalAmount };
    };

    const renderCartItems = () => {
        return cartItems.map((item) => (
            <div key={item._id} className="cart-item">
                <div className="cart-item-details">
                    <p>{item.name}</p>
                    <div className="quantity-selector">
                        <button
                            className="quantity-selector__button"
                            onClick={() => handleDecreaseCartItemQuantity(item._id)}
                        >
                            -
                        </button>
                        <span className="quantity">{item.cartQuantity}</span>
                        <button
                            className="quantity-selector__button"
                            onClick={() => handleIncreaseCartItemQuantity(item._id)}
                        >
                            +
                        </button>
                    </div>
                </div>
                <Link
                    to="#"
                    className="remove-link"
                    onClick={() => handleRemoveFromCart(item._id)}
                >
                    Remove
                </Link>
            </div>
        ));
    };

    const { totalQuantity, totalAmount } = calculateTotals();

    useEffect(() => {
        popoverRef.current = document.getElementById("cart-popover");
    }, []);

    const handleViewCart = () => {
        popoverRef.current.hide();
    };

    const handleCheckout = () => {
        popoverRef.current.hide();
    };

    return (
        <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
                <Popover
                    id="cart-popover"
                    ref={popoverRef}
                    style={{
                        maxWidth: "400px",
                        minWidth: "400px",
                        borderRadius: "8px",
                        height: "500px",
                        marginTop: "10px",
                    }}
                    
                >
                    <Scrollbars
                        style={{
                            maxWidth: "500px",
                            minWidth: "400px",
                            borderRadius: "8px",
                            height: "450px",
                            marginTop: "10px",
                            display: "flex",
                        }}
                        className={isScrollable ? "scrollable" : ""}
                    >
                        {cartItems.length > 0 ? (
                            <>
                                {renderCartItems()}
                                <hr />
                                <p>Total Quantity: {totalQuantity}</p>
                                <p>Total Amount: ₦{totalAmount.toFixed(2)}</p>
                                <div className="btn-group" role="group" aria-label="Cart actions">
                                    <Link to="#" className="btn btn-primary" onClick={handleViewCart}>
                                        View Cart
                                    </Link>
                                    <Link
                                        to="/checkout"
                                        className="btn btn-secondary"
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <p
                                    style={{
                                        fontSize: "20px",
                                        marginBottom: "20px",
                                        marginLeft: "80px",
                                        marginTop: "50px",
                                    }}
                                >
                                    Your Cart is empty
                                </p>
                                <FontAwesomeIcon
                                    icon={faShoppingCart}
                                    style={{ marginLeft: "150px", fontSize: "30px" }}
                                />
                            </>
                        )}
                    </Scrollbars>
                </Popover>
            }
        >
            <button type="button" className="custom-cart-button">
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="cart-count">{cartItems.length}</span>
            </button>
        </OverlayTrigger>
    );
};

export default CartPopover;