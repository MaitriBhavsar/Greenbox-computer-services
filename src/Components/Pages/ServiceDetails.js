import React from 'react'
import Staff from '../Staff';
import ServiceProcess from '../ServiceProcess';
import { Helmet } from "react-helmet";

const ServiceDetails = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GreenBox Services | Services Details</title>
            </Helmet>
            <div id="inner_banner" className="section inner_banner_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div className="title-holder">
                                    <div className="title-holder-cell text-left">
                                        <h1 className="page-title">Services Details</h1>
                                        <ol className="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li className="active">Services Details</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="section padding_layout_1 service_list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-12 service_blog margin_bottom_50">
                                    <div className="full">
                                        <div className="service_img"> <img className="img-responsive" src="images/it_service/post-02.jpg" alt="#" /> </div>
                                        <div className="service_cont">
                                            <h3 className="service_head">Data recovery</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                                                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br />
                                                <br />
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-6 service_blog margin_bottom_50">
                                    <div className="full">
                                        <div className="service_img"> <img className="img-responsive" src="images/it_service/post-03.jpg" alt="#" /> </div>
                                        <div className="service_cont">
                                            <h3 className="service_head">Computer repair</h3>
                                            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                            <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 service_blog margin_bottom_50">
                                    <div className="full">
                                        <div className="service_img"> <img className="img-responsive" src="images/it_service/post-04.jpg" alt="#" /> </div>
                                        <div className="service_cont">
                                            <h3 className="service_head">Data recovery</h3>
                                            <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                            <div className="bt_cont"> <a className="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>


                        </div>
                        <div className="col-md-3">
                            <div className="side_bar">
                                <div className="side_bar_blog">
                                    <h4>GET A QUOTE</h4>
                                    <p>An duo lorem altera gloriatur. No imperdiet adver sarium pro. No sit sumo lorem. Mei ea eius elitr consequ unturimperdiet.</p>
                                    <a className="btn sqaure_bt" href="it_service.html">View Service</a> </div>
                                <div className="side_bar_blog">
                                    <h4>OUR SERVICE</h4>
                                    <div className="categary">
                                        <ul>
                                            <li><a href="it_data_recovery.html"><i className="fa fa-angle-right"></i> Data backup and recovery</a></li>
                                            <li><a href="it_computer_repair.html"><i className="fa fa-angle-right"></i> Computer repair</a></li>
                                            <li><a href="it_mobile_service.html"><i className="fa fa-angle-right"></i> Biometric and security systems</a></li>
                                            <li><a href="it_network_solution.html"><i className="fa fa-angle-right"></i> CCTV and networking solutions</a></li>
                                            <li><a href="it_techn_support.html"><i className="fa fa-angle-right"></i> Computer & laptop sells and service</a></li>
                                            <li><a href="it_techn_support.html"><i className="fa fa-angle-right"></i> Malware and virus removal</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Staff /> */}
            <ServiceProcess />


        </>
    )
}

export default ServiceDetails