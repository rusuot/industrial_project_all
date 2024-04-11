// File Path: Components/Category
// All js files from this path are simiar: differences are only in function name & export and of course the API fetched. that's it.; hence the similarities between them

import { React, useEffect, useState } from "react";
import "../deals.css";
import Add from "./Img/heart.png";
import Added from "./Img/red-heart.png";
import rating from "./Img/rating.png";
import { AddItem, RemoveItem } from "../../action/List";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer";
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner";
import LowerNav from "../LowerNav";
import { getFirestore, collection, addDoc, setDoc, doc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../Firebase";

function Electronics() {
  const [AllProducts, setAllProducts] = useState([]);
  const [AllProducts2, setAllProducts2] = useState([]);
  const [loading, setLoading] = useState(true); // add loading state
  const [AddedIds, setAddedIds] = useState([]);

  const ListItems = useSelector((state) => state.ItemsAdded.ListItems);
  const ListItems2 = useSelector((state) => state.ItemsAdded.ListItems2);
  const dispatch = useDispatch();

  const auth = getAuth(app);
  const db = getFirestore(app);

    
  // let response = [];
  // const test = db.collection("Testing").where("category","==","electronics").get()
  // test.forEach(doc => {
  //   response.push(doc.data());
  // });





      // useEffect(() => {
      //   const GetProducts = async () => {
      //     let result = await db.collection('products').get(); //TODO: add query if needed
      //     let response = [];
            
      //     result.forEach(doc => {
      //           response.push(doc.data());
      //         });
      //     const new_data = await response.json();
      //     setLoading(false);
      //     setAllProducts(new_data);
      //     // Add a review number property to each item object
      //     const productsWithReviewNumber = new_data.map((item) => ({
      //       ...item,
      //       reviewNumber: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
      //     }));
      //     setAllProducts(productsWithReviewNumber);
      //   };
    
      //   GetProducts();
    

    
      // }, []);














  useEffect(() => {
    const GetProducts = async () => {
      const data = await fetch(
        "https://fakestoreapi.com/products/category/electronics"
      );
      const new_data = await data.json();
      setLoading(false);
      setAllProducts(new_data);
      // Add a review number property to each item object
      const productsWithReviewNumber = new_data.map((item) => ({
        ...item,
        reviewNumber: Math.floor(Math.random() * (150 - 50 + 1)) + 50,
      }));
      setAllProducts(productsWithReviewNumber);
    };

    GetProducts();

// NOTES:
// In here somehow, the list of JSON files added in Firebase DB should be collected filtered by category, but I didn't succeed. 
// Same would be applicable for all the other categories (look into Jewelary.js ... and so on, as these pages are very similar)


  }, []);


  useEffect(() => {
    // Update the added ids whenever the list items change
    const ids = ListItems.map((item) => item.id);
    setAddedIds(ids);
  }, [ListItems]);



  const isAdded = (itemId) => {
    // Check if the item id is in the added ids
    return AddedIds.includes(itemId);
  };

  return (
    <div className="Deals">
      <p className="deals-head">Electronics</p>
      {loading && <Spinner />}
      <div className="deal-items">
        {AllProducts &&
          AllProducts.map((items) => {
            return (
              <div className="card" key={items.id}>
                <div className="card-img-data">
                  <img src={items.image} className="card-img" />
                  <img
                    onClick={() => {
                      if (!isAdded(items.id)) {
                        dispatch(AddItem(items));
                      } else {
                        dispatch(RemoveItem(items.id));
                      }
                    }}
                    src={isAdded(items.id) ? Added : Add}
                    className="add-list"
                  />

                  <NavLink to={`/product/${items.id}`} key={items.id}>
                    <button className="view">View product</button>
                  </NavLink>
                </div>
                <div className="card-data">
                  <p className="card-title">
                    {items.title.length >= 32
                      ? items.title.slice(0, 32) + ".."
                      : items.title}
                  </p>
                  <div className="category-rating">
                    <p className="card-category">{items.category}</p>
                    <div className="rating">
                      <img src={rating} className="rating-img" />
                      <img src={rating} className="rating-img" />
                      <img src={rating} className="rating-img" />
                      <img src={rating} className="rating-img" />
                      <img src={rating} className="rating-img" />
                      <p className="rating-text">
                        {"5 " + "(" + items.reviewNumber + " reviews)"}
                      </p>
                    </div>
                  </div>
                  <div className="card-price">
                    <p className="discount">${items.price}</p>
                    <p className="mrp">${Math.round(items.price * 1.66)}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="lowerNav">
        <LowerNav />
      </div>
      <Footer />
    </div>
  );
}

export default Electronics;
