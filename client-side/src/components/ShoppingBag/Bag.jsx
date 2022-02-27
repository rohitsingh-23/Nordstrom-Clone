import React, { useState } from "react";
import "./Bag.css";
import axios from "axios";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Bag = () => {
  // const [cart, setCart] = useState({});
  // const fetchCart = () => {
  //   axios.get("/").then((res) => {});
  // };

  return (
    <div>
      <Navbar />
      <div className="contttainer">
        <div className="mainDiv">
          <div className="topButton">
            <button>Shopping Bag ()</button>
            <button>Save for Later ()</button>
          </div>
          <div className="titleDiv">
            <p>Shopping Bag</p>
            <p>
              Choose gift options when you check out. Items in your bag are not
              on hold.
            </p>
          </div>

          <div className="cartDiv">
            <hr />
            <div className="firstDiv">
              <div className="imgDiv">
                <img
                  src="https://n.nordstrommedia.com/id/sr3/e9737c84-c956-4a05-984f-a22a098d5ea5.jpeg?w=156&h=240"
                  alt=""
                />
              </div>
              <div className="prodDis">
                <p>PAIGE</p>
                <p>Transcend - Lennox Slim Fit Jeans</p>
                <p>Size: 29</p>
                <p>Color: SHELDON</p>
                <p>Item: 5700672</p>
                <p>
                  <p> Delivery</p>
                  <p>
                    International orders usually arrive within 5-13 <br />{" "}
                    business days. We'll give you delivery dates in <br />{" "}
                    checkout.
                  </p>
                </p>
                <button>Remove</button>
                <button>Save for later</button>
              </div>
              <select>
                <option value="">Qty 1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <div>
                <p>$157.20</p>
                <p>Now: $159.20</p>
                <p>Was: $199.00</p>
              </div>
            </div>

            <hr />
          </div>
          <div className="paymentDiv">
            <div className="firstpayDiv">
              <p>Accepted Payment Methods</p>
              <div className="payImgDiv">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                  alt=""
                />
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                  alt=""
                />
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                  alt=""
                />
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                  alt=""
                />
              </div>
              <p>Need help? Call 1.888.282.6060 or chat with us</p>
              <p>Shipping internationally?</p>
            </div>
            <div className="checkOutBtn">
              <div>
                <p>Subtotal</p>
                <p>$157.20</p>
              </div>
              <hr />
              <p>or 4 interest-free payments of $43.88 ⓘ</p>
              <button>Check Out</button>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="head">
            <p>People also viewed</p>
          </div>
          <div className="sliderr">
            <div>
              <img
                src="https://n.nordstrommedia.com/id/sr3/e9737c84-c956-4a05-984f-a22a098d5ea5.jpeg?w=156&h=240"
                alt=""
              />
            </div>
            <div>
              <p style={{ color: "red", fontWeight: "bold" }}>Price Matched</p>
              <p>PAIGE</p>
              <div className="smallDiv">
                <p style={{ color: "red", fontWeight: "bold" }}>INR 12999</p>
                <p>INR 12999</p>
                <p>20% off</p>
              </div>
              <p>Size 29 available</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
