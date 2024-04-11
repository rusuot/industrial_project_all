//file developed for shopping cart actions such as: add, remove, increase quantity, reduce quantity
//Add to cart
const AddToCart = (data) => {
    return {
      type: "ADD_TO_CART",
      data: data,
    };

  };
//remove from cart
  const RemoveCart = (id) => {
    return {
      type: "REMOVE_FROM_CART",
      id: id,
    };
  };
//increase product quantity
  const IncreaseQuantity = (id) => {
    return {
      type: "INCREASE_QUANTITY",
      id: id,
    };
  };
//decrease product quantity
  const DecreaseQuantity = (id) => {
    return {
      type: "DECREASE_QUANTITY",
      id: id,
    };
  };
  

//exports
  export { AddToCart, RemoveCart, IncreaseQuantity, DecreaseQuantity };
  