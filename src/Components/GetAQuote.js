import React, { Component }  from 'react';
import { Link } from "react-router-dom";

const GetAQuote = () => {
  return (
    <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="contact_us_section">
              <div className="call_icon"> <img src="images/it_service/phone_icon.png" alt="#" /> </div>
              <div className="inner_cont">
                <h2>REQUEST A FREE QUOTE</h2>
                <p>Get answers and advice from people you want it from.</p>
              </div>
              <div className="button_Section_cont"> 
              <Link className='btn dark_gray_bt' to="/contact">Contact us</Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
export default GetAQuote;   