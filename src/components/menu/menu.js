import { createContext } from "react";
import "./menu.css";

const Menu = (props) => {
  const addToCartHandler = (item) => {
    props.setTotal(props.total + item.price);

    let newArrayCart = props.cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, amount: cartItem.amount++ };
      } else {
        return { ...cartItem };
      }
    });

    if (
      newArrayCart.some((cartItem) => {
        return cartItem.id === item.id;
      })
    ) {
      props.setCartItems((prevCartItems) => {
        return [...prevCartItems];
      });
    } else {
      props.setCartItems((prevCartItems) => {
        return [...prevCartItems, { ...item, amount: 1 }];
      });
    }
  };

  return (
    <div className="menu-container">
      {props.menu.map((item) => {
        return (
          <div key={item.id} className="flex-container">
            <div className="description-container">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <h2>
                {item.price.toString().slice(-1) === "5"
                  ? item.price.toString() + "0"
                  : item.price}
              </h2>
            </div>
            <div>
              <button
                onClick={() => addToCartHandler(item)}
                className="menu-button-container"
              >
                +Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
