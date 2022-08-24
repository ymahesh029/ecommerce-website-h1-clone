import React from "react";
import "./Home.css";
import Card from "../components/Cards";
import data from "../backend/data";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container-fluid py-20px">
      <p className="text-info text-center mt-5 text-uppercase">Home</p>
      <div className="container py-4">
        <div className="row">
          {data.products.map((item, index) => {
            return (
              <Card
                id={item.id}
                item={item}
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default Home;
