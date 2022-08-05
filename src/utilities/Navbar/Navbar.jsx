import React from "react";
import logo from "../../../public/static/images/logo.png";
import "./Navbar.scss";
import Cart from "../../Icons/Cart";
import {Outlet,Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-start">
          <img src={logo} alt="Sabka Bazaar Homepage." className="logo"></img>
          <div className="navigation_links">
          <Link to="" className="home">Home</Link>
          <Link to="plp" className="products">Products</Link>
          </div>
        </div>
        <div className="navbar_end">
          <div className="authentication_links">
            <Link to="login" className="sign_in">
              Sign In
            </Link>
            <Link to="register" className="register">
              Register
            </Link>
          </div>
          <div className="button-container">
            <button className="add_to_cart">
              <Cart fill="#e91e63" className="cart_image" />
              <span className="">0 Items</span>
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
