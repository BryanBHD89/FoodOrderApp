import "./cart.css";
import { useEffect } from "react";

const Cart = (props) => {
  const modalCloseHandler = () => {
    props.setModalOpen(!props.modalOpen);
  };

  const amountHandlerMinus = (item) => {
    let newCartArray = props.cartitems.map((cartItem) => {
      if (cartItem.id == item.id) {
        if (item.amount !== 1) {
          props.setCartTotal(props.total - item.price);
          return { ...cartItem, amount: item.amount - 1 };
        } else {
          return { ...cartItem };
        }
      } else {
        return { ...cartItem };
      }
    });
    props.setCartItems((prevCartArray) => {
      return [...newCartArray];
    });
  };

  const removeItemHandler = (item) => {
    let deletedItemArray = props.cartitems.filter((cartItem) => {
      return cartItem.id !== item.id;
    });
    props.setCartTotal(props.total - item.price * item.amount);
    props.setCartItems(deletedItemArray);
  };

  const amountHandlerPlus = (item) => {
    let newCartArray = props.cartitems.map((cartItem) => {
      if (cartItem.id == item.id) {
        if (item.amount !== 0) {
          props.setCartTotal(props.total + item.price);
          return { ...cartItem, amount: item.amount + 1 };
        } else {
          return { ...cartItem };
        }
      } else {
        return { ...cartItem };
      }
    });
    props.setCartItems((prevCartArray) => {
      return [...newCartArray];
    });
  };

  const orderHandler = () => {
    props.setOrderModalOpen(true);
  };

  return (
    <div>
      {props.modalOpen ? (
        <div className="modal-bg">
          <div className="modal-container">
            <button className="modal-close" onClick={modalCloseHandler}>
              x
            </button>
            {props.cartitems.map((item) => {
              return (
                <div key={item.id} className="cartItem-container">
                  <h2>{item.name}</h2>
                  <div>
                    <p>Price: {item.price}</p>
                    <div className="amount-container">
                      <p>Amount: {item.amount}</p>
                      <button
                        onClick={() => amountHandlerMinus(item)}
                        className="amount-button"
                      >
                        -
                      </button>
                      <button
                        onClick={() => amountHandlerPlus(item)}
                        className="amount-button"
                      >
                        +
                      </button>
                      <button
                        className="delete-item-cart"
                        onClick={() => removeItemHandler(item)}
                      >
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="cart-total">
              <h3>Total: {props.total.toFixed(2)}</h3>
              <button className="orderNow" onClick={orderHandler}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
