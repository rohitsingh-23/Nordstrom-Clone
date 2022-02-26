import { Navbar } from './components/navbar/Navbar';
import './App.css';
import {LandingPage} from "./components/Landing Page/Landing-Page"
import { Footer } from './components/footer/Footer';
import Products from './components/products/Products'
import { Checkout } from './components/Checkoutandpayment/Checkout';

function App() {
  return (
    <>
      {/* <Navbar />
      <LandingPage />
      <Footer/> */}
      {/* <Products /> */}
      <Checkout/>
    </>
  );
}

export default App;
