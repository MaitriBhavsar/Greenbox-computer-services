import React, { useState, Component } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {

    const links = ['', 'about-us', 'contact', 'service'];
    const navBarLinks = [
        { id: 1, name: "HOME", to: "/" },
        { id: 2, name: "About", to: "/about-us" },
        { id: 3, name: "Service", to: "/service" },
        { id: 4, name: "Contact", to: "/contact" },
    ]
    const [active, setActive] = useState(null);

    let navigate = useNavigate();

    function changeLocation(placeToGo) {
        navigate(placeToGo, { replace: true });
        window.location.reload();
    }

    return (
        <>
            <header id="default_header" className="header_style_1">
                <div class="header_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="header-full">
                                    <div class="topbar-left">
                                        <ul class="list-inline">
                                            {/* <li> <span class="topbar-label"><i class="fa  fa-home"></i></span> <span class="topbar-hightlight">540 Lorem Ipsum New York, AB 90218</span> </li> */}
                                            <li> <span class="topbar-label"><i class="fa fa-envelope-o"></i></span> <span class="topbar-hightlight"><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></span> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 right_section_header_top">
                                <div class="float-left">
                                    <div class="social_icon">
                                        <ul class="list-inline">
                                            <li><a class="fa fa-facebook" href="https://www.facebook.com/" title="Facebook" target="_blank"></a></li>
                                            <li><a class="fa fa-google-plus" href="https://plus.google.com/" title="Google+" target="_blank"></a></li>
                                            <li><a class="fa fa-twitter" href="https://twitter.com" title="Twitter" target="_blank"></a></li>
                                            <li><a class="fa fa-linkedin" href="https://www.linkedin.com" title="LinkedIn" target="_blank"></a></li>
                                            <li><a class="fa fa-instagram" href="https://www.instagram.com" title="Instagram" target="_blank"></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="float-right">
                                    <div class="make_appo"> <a class="btn white_btn" href="make_appointment.html">Make Appointment</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                <div className="logo"> <Link to='/' onClick="/"><img src="images/logos/Logo-high-q_500x300.jpg" alt="logo" /></Link> </div>
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                <div className="menu_side">
                                    <div id="navbar_menu">
                                        <ul className="first-ul">
                                            {navBarLinks.map((link) => (
                                                <li key={link.name}>
                                                    {/* <Link onClick={() => changeLocation(link.to)} className={active == link.name ? "active" : ''}  >{link.name}</Link> */}
                                                    {/* <Link onClick={() => setActive(link.name)} className={active == link.name ? "active" : ''} to={link.to} >{link.name}</Link> */}

                                                    <Link to={link.to} onClick={() => changeLocation(link.to)} className={active == link.name ? "active" : ''}>{link.name}</Link>
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