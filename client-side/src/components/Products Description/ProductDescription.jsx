import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.css";
import { MdWork } from "react-icons/md";

import axios from "axios";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";
function ProductDescription() {
  const [productData, setProductData] = useState([]);

  const handleGo = () => {
    alert("Product is successfully added to cart!");
  };

  const id = useParams();
  // console.log(id)
  function getData() {
    fetch(`http://localhost:4500/product/${id.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.res);
        // console.log(productData)
      });
  }
  getData();
  return (
    <div>
      <Navbar />
      {productData.map((e) => {
        return (
          <>
            <div className="mainDiiv">
              <div className="productImage">
                <div className="productImages">
                  <div>
                    <img src={e.images[0]} alt="" />
                  </div>
                  <div>
                    <img src={e.images[1]} alt="" />
                  </div>
                  <div>
                    <img src={e.images[2]} alt="" />
                  </div>
                  <div>
                    <img src={e.images[3]} alt="" />
                  </div>
                  <div>
                    <img src={e.images[4]} alt="" />
                  </div>
                </div>
                <div className="productD">
                  <div className="productDescription">
                    <div>
                      <h3>SIZE INFO</h3>
                      <ul className="ulDetails">
                        <li>True to Size</li>
                        <li>
                          Considered a Regular fit; cut with a little extra room
                          through the chest and body for comfort.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4>Details & Care</h4>
                      <p className="ulDetails">{e.details_and_care[0]}</p>
                      <ul className="ulDetails">
                        <li>{e.details_and_care[1]}</li>
                        <li>{e.details_and_care[2]}</li>
                        <li>{e.details_and_care[3]}</li>
                        <li>{e.details_and_care[4]}</li>
                        <li>{e.details_and_care[5]}</li>
                        <li>{e.details_and_care[6]}</li>
                        <li>{e.details_and_care[7]}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="gift">
                    <h3 id="giftHeading">GIFT OPTIONS</h3>
                    <p>
                      Choose your gift options at Checkout. Some items may not
                      be eligible for all gift options.
                    </p>

                    <h3>Free Pickup </h3>
                    <p>Printed gift message (free)</p>
                    <p>DIY Nordstrom gift box (free)</p>
                    <p>Nordstrom gift box (free)</p>
                    <h3>Delivery</h3>
                    <p>Email gift message (free)</p>
                    <p>Printed gift message (free)</p>
                    <p>DIY Nordstrom gift box ($3)</p>
                    <p>Nordstrom gift box ($5)</p>
                    <h5>
                      Need help finding the perfect gift? We've got you covered.
                    </h5>
                    <button className="shopGiftBtn">Shop Gifts</button>
                    <br />
                    <h3>{e.brand}</h3>
                    <p>
                      Deeply rooted in America's pioneering spirit and hard-work
                      ethic, Levi's is one of the world's most iconic and
                      revered apparel brands, worn and loved by generations of
                      intensely loyal fans who value its craftsmanship, quality,
                      utility and style. How many other labels can boast that in
                      its more than 150 years of existence, it has never gone
                      out of style?
                    </p>
                  </div>
                </div>
              </div>

              <div className="productDetails">
                <div className="newproductD">
                  <p className="productName">{e.title}</p>
                  <p className="productBrand">{e.brand}</p>
                  <p className="productPrice">
                    <sup>INR</sup>
                    {e.price}
                  </p>
                  <p className="priceDesc">
                    Price varies with currency exchange rates and may be
                    different than in store.
                  </p>
                  <p className="productDesc">{e.description}</p>
                  <p className="productSize">
                    Fit: <span className="productBrand">True to size</span>{" "}
                  </p>

                  <div className="sizeDiv">
                    <select className="selectSize sizeDiv" name="size" id="">
                      <option value="">Size </option>
                      <option value="">Small</option>
                      <option value="">Medium</option>
                      <option value="">Large</option>
                      <option value="">X-Large</option>
                    </select>
                  </div>
                  <div>
                    <select className="selectSize sizeDiv" name="size" id="">
                      <option value="">Choose a color </option>
                      <option value="">Blackberry/White</option>
                      <option value="">Indigo/Black</option>
                      <option value="">Heather Light Blue</option>
                    </select>
                  </div>
                  <div>
                    <button className="btnDiv" onClick={handleGo}>
                      <MdWork className="bagIcon" />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
      <Footer />
    </div>
  );
}

export default ProductDescription;
