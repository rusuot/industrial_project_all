import { React, useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./manualimport.css";
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import JSONExample from "../imgs/json_example.png";
import { getFirestore, setDoc, doc } from "firebase/firestore";

import { useDispatch } from "react-redux";
import swal from "sweetalert";
import LowerNav from "./LowerNav";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(app);
const db = getFirestore(app);

function ManualImport() {
  const [user, setUser] = useState([]);
  const [Manualimport, setManualimport] = useState("");



  // const { id, title, price, description, category, image, rate, count, rating } = body
  const [OrderID, setOrderID] = useState(0);
  const [isDisabled, setDisabled] = useState(false);

  const [ManualimportError, setManualimportError] = useState("");

  const [shippingDisplay, setshippingDisplay] = useState("block");
  const [cardDisplay, setcardDisplay] = useState("none");
  // const [currentDateTime, setCurrentDateTime] = useState("");

  document.title = "Manual Import section"

  const notify1 = () =>
    toast.error("Please fill-up the form correctly!", {
      position: "top-center",
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });


  const navigate = useNavigate();

  // MANUAL IMPORT DETAILS
  const handleManualimport = (event) => {
    setManualimport(event.target.value);
  };
 

  // VALIDATION


  const handleManualimportBlur = (event) => {
    if (event.target.value === "") {
      setManualimportError("Please enter your Manualimport's name.");
    } else {
      setManualimportError("");
    }
  };


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const AddUserData = async () => {
    
    try {
      const productRef = doc(db, 'Testing', JSON.parse(Manualimport).id);
      await setDoc(productRef, { 
        id: JSON.parse(Manualimport).id,
        title: JSON.parse(Manualimport).title,
        price: JSON.parse(Manualimport).price,
        description: JSON.parse(Manualimport).description,
        category: JSON.parse(Manualimport).category,
        image: JSON.parse(Manualimport).image,
        rating: {
          rate: JSON.parse(Manualimport).rating.rate,
          count: JSON.parse(Manualimport).rating.count
        }
        // country: JSON.parse(Country)
      }, { merge: true });

    } catch (e) {
      console.error(e);
    }
  };



  // VALIDATING CARD DETAILS


  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="payment-page">
        <div className="more-data">
          <div
            style={{ display: shippingDisplay }}
            className="shipping-data animate"
          >
            <div className="shipping-head">Manual Import details</div>
            <div className="user-data-form">
              <p className="order-id">JSON Example: </p>
              <img src={JSONExample} className="no-orders" />
              {/* <img src={OrderNow} className="no-orders" /> */}
              
              <div className="all-data-of-user">
                <div className="user-data1">
                  <div className="country">
                    <p className="country-name">Manualimport*</p>
                    <input
                      type="text"
                      placeholder="Please Respect JSON structure from image above"
                      onChange={handleManualimport}
                      onBlur={handleManualimportBlur}
                      value={Manualimport}
                      disabled={isDisabled}
                      required
                    />
                    {ManualimportError && (
                      <div className="error-message">{ManualimportError}</div>
                    )}
                  </div>

                </div>
              </div>
              <button
                onClick={() => {
                  if (

                    Manualimport.length !== 0 
                    
                  ) {
                    setDisabled(true);
                    setshippingDisplay("none");
                    setcardDisplay("block");
                  } else {
                    notify1();
                  }
                }}
                className="save-address"
              >
                Save
              </button>
            </div>
          </div>
          <div
            style={{ display: cardDisplay }}
            className="payment-data animate"
          >
            <div className="payment-option">
              <p className="payment-method">This action will insert your desired product into DB</p>
              <div className="choose-option">


              </div>
              <div className="paying-data"></div>
              <div className="total-amount">

              </div>
              <div className="order-place-btn">
                <button
                  onClick={() => {
                    {
                      AddUserData();
                      swal({
                        title: "Import successful!",
                        text: `Thanks for your product suggestion.`,
                        icon: "success",
                        buttons: "Ok",
                      }).then((willNavigate) => {
                        if (willNavigate) {
                          navigate("/home");
                          // window.location.reload();
                        }
                      });
                    }
                  }}
                  className="confirm_manual_import-btn"
                >
                  Import the product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lowerNav">
        <LowerNav />
      </div>
      <Footer />
    </>
  );
}

export default ManualImport;


