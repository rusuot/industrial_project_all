//file developed for orders: add an order
const AddOrder = (data) => {
    return {
      type: "ADD_ORDER",
      data: data,
    };

  };
  
  export { AddOrder};


  // developed for manual product import: add a product
const AddProduct = (data) => {
  return {
    type: "ADD_PRODUCT",
    data: data,
  };

};

export { AddProduct};
  