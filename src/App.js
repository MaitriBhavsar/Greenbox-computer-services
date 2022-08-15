import React, { Component }  from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
import { Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Pages/Home';
import Testimonials from './Components/Testimonials';
import GetAQuote from './Components/GetAQuote';
import Brand from './Components/Brand';
import Footer from './Components/Footer';
import AboutUs from './Components/Pages/AboutUs';
import Contact from './Components/Pages/Contact';
import Service from './Components/Pages/Service';
import MakeAppointment from './Components/Pages/MakeAppointment';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about-us" exact element={<AboutUs />} />
        <Route path="contact" exact element={<Contact />} />
        <Route path="service" exact element={<Service />} />
        <Route path="make-appointment" exact element={<MakeAppointment />} />
      </Routes>
      <Testimonials />
      <GetAQuote />
      <Brand />
      <Footer />
    </>
  );
}

export default App;
