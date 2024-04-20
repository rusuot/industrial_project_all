import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./productpage.css";
import Rating from "../imgs/rating.png";
import added from "../imgs/icon_item_added_into_cart.png";
import add from "../imgs/icon_add_item_into_cart.png";
import { AddToCart, RemoveCart } from "../action/Cart_actions";
import { useSelector, useDispatch } from "react-redux";
import VanillaTilt from "vanilla-tilt";
import LowerNav from "./LowerNav";

import { collection, getDocs} from "firebase/firestore";
import { db } from "../Firebase";

function ProductPageManualImport() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [Size, setSize] = useState("");
  const [AddedIds, setAddedIds] = useState([]);
  const [reviews, setReviews] = useState(null);
  const Quantity = 1;

  const tiltRef = useRef(null);

  document.title = `${product ? product.title : "E-commerce"}`

  const CartItems = useSelector((state) => state.CartItemsAdded.CartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {

      // declare an empty list
      let products_list = []
      // from DB collection, retrieve all documents (data)
      const querySnapshot = await getDocs(collection(db, "Testing"));

      querySnapshot.docs.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        console.log(doc.data())
        products_list.push(doc.data())

        console.log(doc.id);
      
      });
      // products_list represent the list of JSONs products retrieved from Firebase DB
      console.log(products_list);
      //filter results by ID. ID is in URL params console. For E.g: http://localhost:3000/importedproduct/1441. The id is 1441, so this will filtered products by 1441 ID and return its data.
      let filteredArrayValues = products_list.filter(item => item.id === id)
      console.log("Data for filtered products is")
      console.log(filteredArrayValues[0]);


      const new_data =  products_list;  
      // setProduct(new_data);
      setProduct(filteredArrayValues[0]);

    };

    const randomNumber = Math.floor(Math.random() * 81) + 20;
    setReviews(randomNumber);

    getProducts();
  }, [id]);
  console.log("test IDsid")
  console.log(id)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const ids = CartItems.map((item) => item.id);
    setAddedIds(ids);
  }, [CartItems]);
  console.log("test CartItems---->>>>>")
  console.log(CartItems)

  const isAdded = (itemId) => {
    return AddedIds.includes(itemId);
  };

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 100,
      transition: true,
      easing: "ease-out",
    });
  }, []);

  const handleAddToCart = () => {
    if (!isAdded(product.id)) {
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: Size,
        category: product.category,
        quantity: Quantity,
      };
      dispatch(AddToCart(item));
    } else {
      dispatch(RemoveCart(product.id));
    }
  };
  const handleAddToCart2 = () => {
    if (!isAdded(product.id)) {
      const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        size: Size,
        category: product.category,
        quantity: Quantity,
      };
      dispatch(AddToCart(item));
    } else {
    }
  };

  const limited = product && product.description;
  // const DescLimited = limited ? limited.slice(0, 200) + "." : "";

  return (
    <>
      <Navbar />
      <div
        style={product ? { height: "100%" } : { height: "100vh" }}
        className="product-page"
      >
        <div className={product ? `product-dataa animate` : `product-dataa`}>
          <div className="item-image">
            <img
              ref={tiltRef}
              src={product.image}
              alt=""
              className={`item-img ${product.image ? "img-style" : ""}`}
            />
          </div>
          <div className="product-details">
            <p className="item-title">{product.title}</p>
            <p className="item-desc">{product.description}</p>
            <div className="price-section">
              <div className="item-rating">
                <img src={product && Rating} className="rating-img" alt=""/>
                <img src={product && Rating} className="rating-img" alt=""/>
                <img src={product && Rating} className="rating-img" alt=""/>
                <img src={product && Rating} className="rating-img" alt=""/>
                <img src={product && Rating} className="rating-img" alt=""/>
                <p className="rating-no">{product ? `(${reviews})` : ""}</p>
              </div>
            </div>
            {product ? <hr className="horizontal" /> : ""}
            <div
              style={
                product.category === "men's clothing" ||
                product.category === "women's clothing"
                  ? { display: "block" }
                  : { display: "none" }
              }
              className="cloth-size"
            >
              <p className="choose">Choose a size</p>
              <div className="options">
                <p
                  onClick={() => setSize("S")}
                  className={`size ${Size === "S" ? "size-clicked" : ""}`}
                >
                  S
                </p>
                <p
                  onClick={() => setSize("M")}
                  className={`size ${Size === "M" ? "size-clicked" : ""}`}
                >
                  M
                </p>
                <p
                  onClick={() => setSize("L")}
                  className={`size ${Size === "L" ? "size-clicked" : ""}`}
                >
                  L
                </p>
                <p
                  onClick={() => setSize("XL")}
                  className={`size ${Size === "XL" ? "size-clicked" : ""}`}
                >
                  XL
                </p>
                <p
                  onClick={() => setSize("XXL")}
                  className={`size ${Size === "XXL" ? "size-clicked" : ""}`}
                >
                  XXL
                </p>
              </div>
            </div>
            {(product && product.category === "men's clothing") ||
            product.category === "women's clothing" ? (
              <hr className="horizontal" />
            ) : (
              ""
            )}
            {product ? (
              <div className="product-actual-price">
                <p className="price-one">Price:</p>
                <p className="price-two">${product.price}</p>
                <p className="mrp">${Math.round(product.price * 1.66)}</p>
              </div>
            ) : (
              ""
            )}

            <div
              style={product ? { display: "flex" } : { display: "none" }}
              className="buying-buttons"
            >
              <Link to="/cart">
                <button onClick={handleAddToCart2} className="buy-btn">
                  Buy Now
                </button>
              </Link>
              <button
                onClick={() => {
                  handleAddToCart();
                }}
                className="add-cart-btn"
              >
                <img
                  src={isAdded(product.id) ? added : add}
                  className="cart-img"
                />
                <p style={{ marginLeft: "8px" }} className="cart-text">
                  {isAdded(product.id) ? "Item product was added" : "Add"}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerNav">
        <LowerNav />
      </div>
      {product ? <Footer /> : ""}
    </>
  );
}

export default ProductPageManualImport;
