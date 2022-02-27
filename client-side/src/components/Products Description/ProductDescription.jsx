import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
// import

function ProductDescription() {

    const [productData, setProductData] = useState([]);

  const id = useParams()
  
  useEffect(()=>{getData()}, [])

    // console.log(id)
    function getData(){
        fetch(`http://localhost:4500/product/${id.id}`).then(res=>res.json()).then(data=>{
        setProductData(data.res)
        
    });
    }
  console.log(productData);
    // getData();
  return (
    <div>
     {productData.map((el)=>{
         return <h1>{el.title}</h1>
     })}
    </div>
  )
}

export default ProductDescription
