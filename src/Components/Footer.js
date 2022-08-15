import React, { Component } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

    let navigate = useNavigate();

    function changeLocation(placeToGo){
        navigate(placeToGo, { replace: true });
        window.location.reload();
    }

    return (
        <footer className="footer_style_2">
            <div className="container-fuild">
                <div className="row">
                    {/* <div className="map_section">
                        <div id="map"></div>
                    </div> */}
                    <div className="footer_blog">
                        <div className="row" style={{ float: "left", width: "182%" }}>
                            <div className="col-md-3">
                                <div className="main-heading left_text">
                                    <h2>GreenBox Services</h2>
                                </div>
                                <p>New & refurbished Computer/laptop Computer/laptop Reparing Network & server solution Data backup/recovery solution Cctv camera solution All IT product All type of IT solutions</p>
                                <ul className="social_icons">
                                    <li className="social-icon fb"><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li className="social-icon tw"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li className="social-icon gp"><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="main-heading left_text">
                                    <h2>Additional links</h2>
                                </div>
                                <ul className="footer-menu">
                                    <li>
                                        <Link to="/about-us" onClick={() => changeLocation('/about-us')}><i className="fa fa-angle-right"></i> About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-conditions" onClick={() => changeLocation('/terms-conditions')}><i className="fa fa-angle-right"></i> Terms and conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy" onClick={() => changeLocation('/privacy-policy')}><i className="fa fa-angle-right"></i> Privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={() => changeLocation('/contact')}><i className="fa fa-angle-right"></i> Contact us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="main-heading left_text">
                                    <h2>Services</h2>
                                </div>
                                <ul className="footer-menu">
                                    <li><a href="it_data_recovery.html"><i className="fa fa-angle-right"></i> Data recovery</a></li>
                                    <li><a href="it_computer_repair.html"><i className="fa fa-angle-right"></i> Computer repair</a></li>
                                    {/* <li><a href="it_mobile_service.html"><i className="fa fa-angle-right"></i> Mobile service</a></li> */}
                                    <li><a href="it_network_solution.html"><i className="fa fa-angle-right"></i> Network solutions</a></li>
                                    <li><a href="it_techn_support.html"><i className="fa fa-angle-right"></i> Technical support</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <div className="main-heading left_text">
                                    <h2>Contact us</h2>
                                </div>
                                <p>201/Akbar Apartment,<br />
                                    Near Vishala Circle, Maktampura,<br />
                                    Ahmedabad, Gujarat 380055<br />
                                    <span style={{ fontSize: "18px" }}><a href="tel:+9876543210">+987 654 3210</a></span></p>
                                <div className="footer_mail-section">
                                    <form>
                                        <fieldset>
                                            <div className="field" style={{ display: "inline-flex" }}>
                                                <input placeholder="Email" type="text" />
                                                <button className="button_custom"><i className="fa fa-envelope" aria-hidden="true"></i></button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cprt">
                        <p>Green Box Services © Copyrights 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer