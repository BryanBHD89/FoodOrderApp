import "./orderModal.css";

const orderModal = (props) => {
  const closeOrderModalHandler = () => {
    props.setOrderModalOpen(false);
  };

  const submitHandler = () => {
    props.setOrderModalOpen(false);
    props.setSubmitModalOpen(true);
  };

  const returnHandler = () => {
    props.setCartItems([]);
    props.setCartTotal(0);
    props.setModalOpen(false);
    props.setSubmitModalOpen(false);
  };

  return (
    <div className="order-form">
      {props.orderModalOpen ? (
        <div className="orderModalBg">
          <form className="orderModal">
            <button
              className="closeOrderModal"
              onClick={closeOrderModalHandler}
            >
              X
            </button>
            <label htmlFor="name">Name:</label>
            <input name="name" type="text"></input>
            <label htmlFor="phone">Phone Number:</label>
            <input name="phone" type="number"></input>
            <label htmlFor="address">Address</label>
            <input name="address" type="text"></input>
            <button className="submitOrder" onClick={submitHandler}>
              Submit Order
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      {props.submitModalOpen ? (
        <div className="order-form">
          <div className="orderModalBg">
            <div className="orderModal">
              <h1 className="orderPlaced">Your Order Has Been Placed</h1>
              <button className="submitOrder" onClick={returnHandler}>
                Return to Menu
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

export default orderModal;
