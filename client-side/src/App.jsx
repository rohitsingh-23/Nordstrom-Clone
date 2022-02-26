import { Navbar } from './components/navbar/Navbar';
import './App.css';
import {LandingPage} from "./components/Landing Page/Landing-Page"
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer/>
    </div>
  );
}

export default App;
