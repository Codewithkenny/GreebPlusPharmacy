import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./Components/cartContext"; 
import Home from "./Pages/Home/Homepage";
import About from "./Pages/About/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import ProductPage from "./Components/Product/ProductPage";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import "./index.css";
import SignUp from "./Pages/SignUp/SignUp";
import Admin from "./Components/Admin/Admin";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import CheckoutSummary from "./Components/CheckoutSummary/CheckoutSummary";
import Payment from "./Components/Payment/Payment";
import CustomerDashboard from "./Pages/Dashboard/CustomerDashboard";
import AccountSettings from "./Components/AccountSettings/AccountSettings";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import AccountOverview from "./Components/AccountSettings/AccountOverview";
import Contact from "./Pages/Contact/Contact";


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact-us" element={<Contact /> } />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkoutsummary" element={<CheckoutSummary />} />
          <Route path="payment" element={<Payment/>} />
          <Route path="customer-dashboard" element={<CustomerDashboard/>} />
          <Route path="account-settings" element={<AccountSettings/>} />
          <Route path="account-overview" element={<AccountOverview/>} />
          <Route path="register" element={<RegisterForm/>} />
          <Route path="admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
