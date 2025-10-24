import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './LandingPage/Home/HomePage';
import SignUp from './LandingPage/Signup/SignUp';
import AboutPage from './LandingPage/About/AboutPage';
import ProductPage from './LandingPage/Product/ProductPage';
import PricePage from './LandingPage/Price/PricePage';
import SupportPage from './LandingPage/Support/SupportPage';

import Footer from './LandingPage/Footer';
import Navbar from './LandingPage/Navbar';

import Notfound from './LandingPage/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/Signup" element={<SignUp/>} />
      <Route path="/About" element={<AboutPage/>} />
      <Route path="/Products" element={<ProductPage/>} />
      <Route path="/Pricing" element={<PricePage/>} />
      <Route path="/Support" element={<SupportPage/>} />
      <Route path="*" element ={<Notfound/>} />
  </Routes>
 <Footer/>
  </BrowserRouter>
);

