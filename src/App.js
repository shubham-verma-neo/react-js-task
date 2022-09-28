import Error from './components/404';
import Blog from './components/Blog';
import BlogSingle from './components/BlogSingle';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import ProductDetails from './components/ProductDetails';
import Shop from './components/Shop';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/404' element={<Error/> }></Route>
          <Route path='/blog' element={<Blog/> }></Route>
          <Route path='/blog-single' element={<BlogSingle/> }></Route>
          <Route path='/cart' element={<Cart/> }></Route>
          <Route path='/checkout' element={<Checkout/> }></Route>
          <Route path='/contact-us' element={<ContactUs/> }></Route>
          <Route path='/' element={<Home/> }></Route>
          <Route path='/login' element={<Login/> }></Route>
          <Route path='/product-details' element={<ProductDetails/> }></Route>
          <Route path='/shop' element={<Shop/> }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
