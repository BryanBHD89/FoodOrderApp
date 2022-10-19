import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import meals from "./meals.jpg";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import { DUMMY_MEALS } from "./dummy-meals";
import Cart from "./components/cart/cart";
import { useEffect } from "react";
import OrderModal from "./components/orderModal/orderModal";

function App() {
  const [menu, setMenu] = useState(DUMMY_MEALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  useEffect(() => {
    let newMenu = menu.map((item) => {
      return { ...item, amount: 0 };
    });
    setMenu(newMenu);
  }, []);

  return (
    <div className="app-container">
      <Navigation setModalOpen={setModalOpen} modalOpen={modalOpen} />
      <img className="background-image" src={meals}></img>
      <div className="header">
        <Header />
      </div>
      <div>
        <Menu
          setCartItems={setCartItems}
          cartItems={cartItems}
          menu={menu}
          total={cartTotal}
          setTotal={setCartTotal}
        />
      </div>
      <div>
        <Cart
          total={cartTotal}
          setCartTotal={setCartTotal}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setCartItems={setCartItems}
          cartitems={cartItems}
          setOrderModalOpen={setOrderModalOpen}
        />
      </div>
      <div>
        <OrderModal
          setCartTotal={setCartTotal}
          setCartItems={setCartItems}
          orderModalOpen={orderModalOpen}
          setOrderModalOpen={setOrderModalOpen}
          submitModalOpen={submitModalOpen}
          setSubmitModalOpen={setSubmitModalOpen}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      </div>
    </div>
  );
}

export default App;
