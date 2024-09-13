
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Layout/Navbar/Navbar"
import Footer from "./Layout/Footer/Footer"
import Home from "./components/Home/Home"
import Shop from "./components/Shop/Shop"
import Product from "./components/Product/Product"
import Contact from "./components/Contact/Contact"
import Cart from "./components/Cart/Cart"

function App() {

  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
