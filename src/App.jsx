import Cart from "./components/Cart/Cart";
import Modal from "./utilities/Modal/Modal";
import "./styles.scss";
import React, { useEffect, useState } from "react";
import Footer from "./utilities/Footer/Footer";
import Navbar from "./utilities/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Login-Form/Login";
import Register from "./components/Registration-Form/Register";
import ProductsListing from "./components/ProductsListing-Page/ProductsListing";
import { CategoryContext } from "./context/Contexts";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryData, setCategoryData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3010/categories`)
      .then((res) => res.json())
      .then((data) => {
        data.sort(function (a, b) {
          return a.order - b.order;
        });
        setCategoryData(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="app">
      <Navbar />
      <CategoryContext.Provider value={{ categoryData, setCategoryData }}>
        <Routes>
          <Route path="/plp" element={<ProductsListing />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/*<Route path="cart" element={<Cart/>} />*/}
        </Routes>
      </CategoryContext.Provider>
      <Footer />
      {/*<Modal open={isOpen}><Cart setIsOpen={setIsOpen}/></Modal>*/}
    </div>
  );
};

export default App;
