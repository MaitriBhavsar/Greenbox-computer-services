import React, { Component }  from 'react';

const Brand = () => {
    return (
        <div className="section padding_layout_1" style={{padding: "50px 0"}}>
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
              {/* <Link className='btn dark_gray_bt' to="/contact">Contact us</Link>  */}
              </div>
            </div>
          </div>
        {/* </div>/ */}
                    {/* <div className="col-md-12"> */}
                        {/* <div className="full">
                            <ul className="brand_list">
                                <li><img src="images/it_service/brand_icon1.png" alt="#" /></li>
                                <li><img src="images/it_service/brand_icon2.png" alt="#" /></li>
                                <li><img src="images/it_service/brand_icon3.png" alt="#" /></li>
                                <li><img src="images/it_service/brand_icon4.png" alt="#" /></li>
                                <li><img src="images/it_service/brand_icon5.png" alt="#" /></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Brand