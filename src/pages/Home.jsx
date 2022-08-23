import React from "react";
import "./Home.css";
import Cart from "../components/Cart";
const Home = () => {
  return (
    <div className="container-fluid py-20px">
      <p className="text-info text-center mt-5 text-uppercase">Home</p>
      <div className="container py-4">
        <div className="row">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default Home;
