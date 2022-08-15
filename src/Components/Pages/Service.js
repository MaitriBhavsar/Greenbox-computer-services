import React, { Component }  from 'react';
import ServiceProcess from '../ServiceProcess';
import StaffMembers from '../Staff';

function Service() {
    return (
        <>
            <div id="inner_banner" class="section inner_banner_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="full">
                                <div class="title-holder">
                                    <div class="title-holder-cell text-left">
                                        <h1 class="page-title">Services</h1>
                                        <ol class="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li class="active">Services</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceProcess />
           
            <div class="section padding_layout_1 light_silver service_list">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 service_blog">
                            <div class="full">
                                <div class="service_img"> <img class="img-responsive" src="images/it_service/post-01.jpg" alt="#" /> </div>
                                <div class="service_cont">
                                    <h3 class="service_head">Data recovery</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div class="bt_cont"> <a class="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 service_blog">
                            <div class="full">
                                <div class="service_img"> <img class="img-responsive" src="images/it_service/post-02.jpg" alt="#" /> </div>
                                <div class="service_cont">
                                    <h3 class="service_head">Computer repair</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div class="bt_cont"> <a class="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 service_blog">
                            <div class="full">
                                <div class="service_img"> <img class="img-responsive" src="images/it_service/post-03.jpg" alt="#" /> </div>
                                <div class="service_cont">
                                    <h3 class="service_head">Network solutions</h3>
                                    <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                                    <div class="bt_cont"> <a class="btn sqaure_bt" href="it_service_detail.html">View Service</a> </div>
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