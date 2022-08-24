import React from "react";
import { NavItem } from "react-bootstrap";
import dats from "../backend/data";
// import { useCart } from "react-use-cart";
import { CartProvider, useCart } from "react-use-cart";

const Card = (props) => {
  const { addItem, cartId } = useCart();
  return (
    <>
      {/* card */}
      <div className="col-12 col-sm-12 col-lg-4 col-md-6 col-xl-3 col-xxl-3">
        <div className="card h-100 shadow">
          <img src={props.img} alt="" className="card-img-top img-fluid" />
          <div className="card-body">
            <div className="d-flex justify-content-between ">
              <h5 className="card-title">{props.title}</h5>
              <span className="fw-bolder">${props.price}</span>
            </div>
            <div className="row">
              <p className="cart-text">{props.desc}</p>
              {props.id}
            </div>
            <div className=" d-grid justify-content-end mt-4">
              {" "}
              <button
                className="btn btn-sm btn-outline-success"
                onClick={() => addItem(props.item)}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* card */}
    </>
  );
};

export default Card;
