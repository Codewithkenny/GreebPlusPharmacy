import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./TopButton.css";

const TopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {showButton && (
                <button
                    type="button"
                    className="btn-back-to-top"
                    onClick={handleClick}
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default TopButton;
