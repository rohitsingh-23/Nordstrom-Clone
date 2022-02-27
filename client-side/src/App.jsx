import { Navbar } from "./components/navbar/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/Landing Page/Landing-Page";
import { Footer } from "./components/footer/Footer";
import Products from "./components/products/Products";
import { Checkout } from "./components/Checkoutandpayment/Checkout";
import { SignIn } from "./components/Auth/SIgnIn/SignIn";
import { Signup } from "./components/Auth/Signup/Signup";
import { Bag } from "./components/ShoppingBag/Bag";
import { Payment } from "./components/Checkoutandpayment/Payment";
// import { ProductDetail } from "./components/productDetails/ProductDetail";

function App() {
  return (
    <>
      {/* <Navbar />
    // <LandingPage />
    //   <Footer/> */}
      <Routes>
        <Route path="/" element={<Products />}></Route>
        {/* <Route path="/productDetails" element={<ProductDetail/>}></Route> */}
      </Routes>
      {/* <Checkout/> */}
      {/* <Payment/> */}
    </>

    // <Routes>
    //   <Route exact path="/signin" element={<SignIn />}></Route>
    //   <Route path="/register" element={<Signup />}></Route>
    //   <Route path="/bag" element={<Bag />}></Route>
    // </Routes>
  );
}

export default App;
