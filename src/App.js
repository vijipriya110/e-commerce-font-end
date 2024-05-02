
// import { Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Homee from './Components/Homee.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails.js';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart.js';
// import { Route } from 'react-router-dom';
// import Search from './Components/Search.js';/

// import Homee from './Components/Homee.js';


function App() {
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme='dark' position='top-center'/>
          <Header cartItems={cartItems}/>
          <Routes>
          
           <Route path="/" element={<Homee/>} />
           <Route path="/search" element={<Homee/>} />
           <Route path="/product/:id" element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} />} />
           <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          
          
          </Routes>


        </div>

      </Router>
      <Footer />

    </div>


  );
}

export default App;
