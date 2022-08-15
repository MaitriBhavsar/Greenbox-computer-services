import React, { useState, Component }  from 'react';
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    const links = ['', 'about-us', 'contact', 'service'];
    const navBarLinks = [
        { id: 1, name: "HOME", to: "/" },
        { id: 2, name: "About", to: "/about-us" },
        { id: 3, name: "Service", to: "/service" },
        { id: 4, name: "Contact", to: "/contact" },
    ]
    const [active, setActive] = useState(null);
    
    return (
        <>
            <header id="default_header" className="header_style_1">
                <div className="header_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="full">
                                    <div className="topbar-left">
                                        <ul className="list-inline">
                                            {/* <li> <span className="topbar-label"><i className="fa  fa-home"></i></span> <span className="topbar-hightlight">540 Lorem Ipsum New York, AB 90218</span> </li> */}
                                            <li> <span className="topbar-label"><i className="fa fa-envelope-o"></i></span> <span className="topbar-hightlight"><a href="mailto:info@greenboxservices.com">info@greenboxservices.com</a></span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 right_section_header_top">
                                <div className="float-left">
                                    <div className="social_icon">
                                        <ul className="list-inline">
                                            <li><a className="fa fa-facebook" href="https://www.facebook.com/" title="Facebook" target="_blank"></a></li>
                                            <li><a className="fa fa-google-plus" href="https://plus.google.com/" title="Google+" target="_blank"></a></li>
                                            <li><a className="fa fa-twitter" href="https://twitter.com" title="Twitter" target="_blank"></a></li>
                                            <li><a className="fa fa-linkedin" href="https://www.linkedin.com" title="LinkedIn" target="_blank"></a></li>
                                            <li><a className="fa fa-instagram" href="https://www.instagram.com" title="Instagram" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="float-right">
                                    <div className="make_appo">
                                    <Link className="btn white_btn" to="/make-appointment">Make Appointment</Link> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <div className="logo"> <a href="it_home.html"><img src="images/logos/FotoJet.png" alt="logo" /></a> </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <div className="menu_side">
                                    <div id="navbar_menu">
                                        <ul className="first-ul">
                                            {navBarLinks.map((link) => (
                                                <li >
                                                    <Link onClick={() => setActive(link.name)} class={active == link.name ? "active" : ''} to={link.to}>{link.name}</Link>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div id="slider" className="section main_slider">
                <div className="container-fuild">
                    <div className="row">
                        <div id="rev_slider_4_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="classNameicslider1" style={{ margin: "0px auto", backgroundColor: "transparent", padding: "0px", marginTop: "0px", marginBottom: "0px" }}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;