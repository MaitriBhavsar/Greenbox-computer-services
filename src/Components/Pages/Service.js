import React, { Component } from 'react';
import ServiceProcess from '../ServiceProcess';
import StaffMembers from '../Staff';
import { Helmet } from "react-helmet";

function Service() {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GreenBox Services | Service</title>
            </Helmet>
            <div id="inner_banner" className="section inner_banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="title-holder">
                                    <div className="title-holder-cell text-left">
                                        <h1 className="page-title">Services</h1>
                                        <ol className="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li className="active">Services</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceProcess />

            <div className="section padding_layout_1 light_silver service_list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 service_blog">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/post-01.jpg" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Data backup and recovery</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/post-02.jpg" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Computer repair</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 service_blog">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/post-03.jpg" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Biometric and security systems</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 service_blog">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/post-03.jpg" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">CCTV and networking solutions</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 service_blog">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/post-03.jpg" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Computer & laptop sells and service</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 service_blog">
                            <div className="full">
                                <div className="service_img"> <img className="img-responsive" src="images/it_service/post-03.jpg" alt="#" /> </div>
                                <div className="service_cont">
                                    <h3 className="service_head">Malware and virus removal</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StaffMembers />
        </>
    )
}

export default Service