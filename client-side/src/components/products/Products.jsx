import React, { useEffect } from 'react'
import { useState } from 'react';
import './Products.css'
import { Icon } from '@iconify/react';
import Collapsible from 'react-collapsible';
import { Navigate, useNavigate } from 'react-router-dom';
import {Navbar} from "../navbar/Navbar"

function shuffle(array) {
   
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

function Products() {
    const [shuffleArray, setShuffleArray] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [prevData, setPrevData] = useState([]);
    const Navigate = useNavigate()
    
    var arr = new Array(4).fill(-1);
    const getData = ()=>{
      fetch("http://localhost:4500/data").then(res=>res.json()).then(data=>{
        // setShuffleArray(data.res)
        // shuffle(data.res);
        setProductsData(data.res)
        console.log("productsData")
    });
    }
    useEffect(()=>{
      getData();
    }, [])
  
  const handleCard = (id) => {
    Navigate(`/productDetails/${id}`);
  }

  const sort = (str) =>{
    // console.log(str);
    var temp = productsData;
    if(str == "HtL")
    {
      temp = temp.sort((a,b)=>{
        return b.price-a.price;
      })
    }
    else if(str == "LtH")
    {
      temp = temp.sort((a,b)=>{
        return a.price-b.price;
      })
    }
    else
    {
      fetch("http://localhost:4500/data").then(res=>res.json()).then(data=>{
        setProductsData(data.res)
        temp = productsData;
    });
    }
    var tempArr = []
    for(var x of temp)
    {
      tempArr.push(x);
    }
    setProductsData(tempArr)
  }


  return (
    <>
    <Navbar />
    <div className="container">
      <div className="path"> Home / Men / Clothing / Jeans </div>
      <div className="main-wrapper">
        <div className="side-bar">
        <Collapsible className="collapseBox" trigger="Gender">
      <div>
        <input type='checkbox' /> Men
      </div>
      <div>
        <input type='checkbox' /> UniSex
      </div>
      <div>
        <input type='checkbox' /> Women
      </div>
      </Collapsible>
     <Collapsible className="collapseBox" trigger="Size">
     <div>
     <input type='checkbox' /> Apparel
      </div>
      <div>
        <input type='checkbox' /> Apparel-Pants
      </div>
      
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Category">
     <div>
     <input type='checkbox' /> Joggers
      </div>
      <div>
        <input type='checkbox' /> Jeans
      </div>
      <div>
     <input type='checkbox' /> Jacket
      </div>
      <div>
        <input type='checkbox' /> Leggings
      </div>
      <div>
     <input type='checkbox' /> Sweaters
      </div>
      <div>
        <input type='checkbox' /> Tank
      </div>
      <div>
     <input type='checkbox' /> T-Shirt
      </div>
      
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Category">
     <div>
     <input type='checkbox' /> Joggers
      </div>
      <div>
        <input type='checkbox' /> Jeans
      </div>
      <div>
     <input type='checkbox' /> Jacket
      </div>
      <div>
        <input type='checkbox' /> Leggings
      </div>
      <div>
     <input type='checkbox' /> Sweaters
      </div>
      <div>
        <input type='checkbox' /> Tank
      </div>
      <div>
     <input type='checkbox' /> T-Shirt
      </div>
      
     </Collapsible>
          <Collapsible className="collapseBox" trigger="Brand">
     <div>
     <input type='checkbox' /> Adidas
      </div>
      <div>
        <input type='checkbox' /> Alo
      </div>
      <div>
     <input type='checkbox' /> Canada-Goose
      </div>
      <div>
        <input type='checkbox' /> Nike
      </div>
      <div>
     <input type='checkbox' /> Vuori
      </div>
      <div>
        <input type='checkbox' /> Zella
      </div>
      
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Length">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Material">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Neck Style">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
    <Collapsible className="collapseBox" trigger="Occasion">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Price">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Sale">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Sleeve Length">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
     <Collapsible className="collapseBox" trigger="Style">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
     </Collapsible>
        </div>
        <div className="right-section">
          <div className="gray-container">
            <div>
              <div className="tag1">
                <b>The Denim</b> Lockdown
              </div>
              <div className="tag2">
                Double down on the season's hottest trends.
              </div>
              <br />
              <a>Slim Fit</a>
              <br />
              <a>Slim Straight Fit</a>
              <br />
              <a>Skinny Fit</a>
              <br />
              <a>Straight Fit</a>
              <br />
              <a>Relaxed Fit</a>
              <br />
            </div>
          </div>
          <div className="nav-links">
            <p>Men's Jeans &amp; Denim</p>
            <div>
              <div>All Clothing</div>
              <div>Activewear</div>
              <div>Blazzer &amp; Sport Coats</div>
              <div>Coats &amp; Jackets</div>
              <div className="selected">Jeans</div>
              <div>Men's jeans Fit Guide</div>
              <div>Jogger &amp; Sweatpants</div>
            </div>
          </div>
          <div className="sort-bar">
            <div className="totalProducts">{productsData.length} items</div>
            <div className="totalProducts">
              <select onChange={(e)=>{sort(e.target.value)}}>
                <option value="default">Sort By Featured</option>
                <option  value="HtL">Sort By Price: Hight to Low</option>
                <option value="LtH">Sort By Price: Low to Hight</option>
              </select>
            </div>
          </div>
          <div className="cards-container">
            {productsData.map((el) => {
              // var rating = Math.floor(Math.random() * (100 - 1) + 1);
              var img = el.images[0];
              var img2 = el.images[1];
              return (
                <div key={el._id}
                  onClick={() => {
                    handleCard(el._id);
                  }}
                  className="card"
                >
                  <div className="proImg">
                    <img className="img1" src={img} />
                    <img className="img2" src={img2} />
                  </div>
                  <p className="brand">{el.brand}</p>
                  <p className="title">{el.title}</p>
                  {el.discount == 0 ? (
                    <p className="withoutDiscount">INR {el.price.toFixed(2)}</p>
                  ) : (
                    <div>
                      <p className="sale-amount">
                        Now: INR{" "}
                        {el.price - ((el.discount * el.price) / 100).toFixed(2)}
                      </p>
                      <p className="wasAmount">
                        Was: INR {el.price.toFixed(2)} &nbsp; {el.discount}% off
                      </p>
                    </div>
                  )}
                  {/* {
                                arr.map(el=>{
                                    return <Icon icon="emojione-monotone:star" />
                                })
                            } */}
                  <div className="star-flex">
                    <Icon icon="carbon:star-filled" />
                    <Icon icon="carbon:star-filled" />
                    <Icon icon="carbon:star-filled" />
                    <Icon icon="carbon:star-filled" />
                    <Icon icon="carbon:star-filled" />
                  </div>
                  {/* {Math.floor(Math.random())%3 == 0 ? <Icon icon="emojione-monotone:star" /> : <Icon icon="fluent:star-half-16-filled" />} */}
                  {/* &nbsp; ({Math.floor(Math.random() * (100 - 1) + 1)}) */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Products
