import React from "react";
import "./Cart.css";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    items,
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center py-5"> My cart is Empty</h1>;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* <button type="button" class="btn btn-primary position-relative">
            Inbox
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span class="visually-hidden">unread messages</span>
            </span>
          </button> */}
          <p>mycart</p>
          <h4 className="position-relative text-title">
            {" "}
            cart
            <span className=" position-absolute fw-bolder tranlate-middle rounded-pill badge bg-danger myBadge mx-2">
              ({totalUniqueItems})
            </span>
          </h4>
          <p>
            total Item
            <span className=" position-absolute fw-bolder tranlate-middle rounded-pill badge bg-danger myBadge mx-2">
              ({totalItems})
            </span>
          </p>
        </div>
      </div>
      <div>
        <table className="table table-primary table-hover m-0">
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={item.img} alt={item.title} />
                  </td>
                  <td> {item.title}</td>
                  <td>{item.price}</td>

                  <td> quantity:{item.quantity}</td>
                  <td>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className="btn btn-outline-dark ms-1"
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="btn btn-outline-dark ms-1"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn btn-outline-danger ms-4 "
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
