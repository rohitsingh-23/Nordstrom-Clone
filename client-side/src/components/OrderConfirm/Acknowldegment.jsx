import CardGiftcardSharpIcon from '@mui/icons-material/CardGiftcardSharp';
import { useState, useEffect } from 'react';
import "./Acknowldegment.css";
import { LinearProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";


export const OrderConfirm = () => {
    // const [products, setProducts] = useState([]);

    

    // useEffect(() => {
    //     getData();
    //   }, []);

    // const getData = () => {
    //     fetch("http://localhost:4500/cart ")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setProducts(data);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // };

    return (
        <div>
                <div>
                    <Navbar/>
                    <div className='successContainer'>
                        <div className='sucLeftBox'>
                            <CardGiftcardSharpIcon />
                            <div className='titleOne'>Thank You!</div>
                            <div className='titleTwo'>Order confirmation has been sent to your mail.</div>
                            <a href="/" className='continueShpButton'>Continue Shopping</a>
                        </div>
                    
                        <div className='sucRightBox'>
                            <div>
                                {/* {products.map((e) => (
                                    <div className="confirmProductsBox">
                                        <img src={e.images[0]} alt="" />
                                        <div>
                                            <p className="prodtext1">{e.name}</p>
                                            <p className="prodtext2">₹{e.price}</p>
                                        </div>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            
            
        </div>
    )
};