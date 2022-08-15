import React, { Component } from 'react';
import { Helmet } from "react-helmet";

function Contact() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GreenBox Services | Contact</title>
            </Helmet>
            <div id="inner_banner" className="section inner_banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="title-holder">
                                    <div className="title-holder-cell text-left">
                                        <h1 className="page-title">Contact</h1>
                                        <ol className="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li className="active">Contact</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section padding_layout_1">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12"></div>
                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="full">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 adress_cont margin_bottom_30">
                                        <h4>Address</h4>
                                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod tempor.</p> */}
                                        <div className="information_bottom left-side margin_bottom_20_all">
                                            <div className="icon_bottom"> <i className="fa fa-road" aria-hidden="true"></i> </div>
                                            <div className="info_cont">
                                                <h4>201/akbar appartment, near vishala circle</h4>
                                                <p>Maktampura, Ahmedabad, Gujarat 380055</p>
                                            </div>
                                        </div>
                                        <div className="information_bottom left-side margin_bottom_20_all">
                                            <div className="icon_bottom"> <i className="fa fa-user" aria-hidden="true"></i> </div>
                                            <div className="info_cont">
                                                <h4>8128493817, 9099949499</h4>
                                                <p>Mon-Sun 9:00am-9:00pm</p>
                                            </div>
                                        </div>
                                        <div className="information_bottom left-side">
                                            <div className="icon_bottom"> <i className="fa fa-envelope" aria-hidden="true"></i> </div>
                                            <div className="info_cont">
                                                <h4>chiragbhavsar1994@gmail.com</h4>
                                                <h4>uv.mala@gmail.com</h4>
                                                <p>24/7 online support</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 contant_form">
                                        <h4>GET IN TOUCH</h4>
                                        <p>Our goal is to provide the best customer service and to answer all of your questions in a timely manner.</p>
                                        <div className="form_section">
                                            <form className="form_contant" action="index.html">
                                                <fieldset>
                                                    <div className="row">
                                                        {/* <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                      <input className="field_custom" placeholder="Websire URL" type="text" required />
                    </div> */}
                                                        <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <input className="field_custom" placeholder="Your name" type="text" required />
                                                        </div>
                                                        <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <input className="field_custom" placeholder="Email adress" type="email" required />
                                                        </div>
                                                        <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <input className="field_custom" placeholder="Phone number" type="text" required />
                                                        </div>
                                                        <div className="field col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                            <input className="field_custom" placeholder="Subject" type="text" required />
                                                        </div>
                                                        <div className="field col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <textarea className="field_custom" placeholder="Messager" required ></textarea>
                                                        </div>
                                                        <div className="center"><a className="btn main_bt" href="#">SUBMIT NOW</a></div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>



    )
}

export default Contact