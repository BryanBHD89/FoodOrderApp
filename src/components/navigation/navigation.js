import "./navigation.css";

const Navigation = (props) => {
  const modalOpenHandler = () => {
    props.setModalOpen(!props.modalOpen);
  };

  return (
    <div className="nav-container">
      <nav className="navigation">
        <h1 className="nav-title">ReactMeals</h1>
        <button onClick={modalOpenHandler} className="cart-Button">
          Your Cart
        </button>
      </nav>
    </div>
  );
};

export default Navigation;
