//file developed for shopping cart actions such as: adding item, remove/delete item  from list
//Add item to shopper cart list
const AddItem = (data) => {
    return {
      type: "ADD",
      data: data,
    };

  };
//Delete/remove item from shopper cart list
  const RemoveItem = (id) => {
    return {
      type: "REMOVE",
      id: id,
    };
  };
  
  export { AddItem, RemoveItem };
  