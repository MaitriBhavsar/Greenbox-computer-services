import React, { Component } from 'react';
import StaffMembers from '../Staff';
import { Helmet } from "react-helmet";

function AboutUs() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>GreenBox Services | About Us</title>
      </Helmet>
      <div id="inner_banner" className="section inner_banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="title-holder">
                  <div className="title-holder-cell text-left">
                    <h1 className="page-title">About Us</h1>
                    <ol className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li className="active">About Us</li>
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
            <div className="col-md-12">
              <div className="full">
                <div className="main_heading text_align_center">
                  <h2>We are Leading Company</h2>
                  <p className="large">Fastest repair service with best price!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row about_blog">
            <div className="col-lg-6 col-md-6 col-sm-12 about_cont_blog">
              <div className="full text_align_left">
                <h3>What we do</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown printer took a galley..</p>
                <ul>
                  <li><i className="fa fa-check-circle"></i>Persius appetere pro mea harum ridens</li>
                  <li><i className="fa fa-check-circle"></i>Instructior vis at causae legimus luptatum mel</li>
                  <li><i className="fa fa-check-circle"></i>Maluisset id persius appetere pro mea harum</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 about_feature_img padding_right_0">
              <div className="full text_align_center"> <img className="img-responsive" src="images/it_service/post-06.jpg" alt="#" /> </div>
            </div>
          </div>

          {/* <div className="row" style={{ marginTop: "35px" }}>
            <div className="col-md-8">
              <div className="full margin_bottom_30">
                <div className="accordion border_circle">
                  <div className="bs-example">
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><i className="fa fa-bar-chart" aria-hidden="true"></i> Complete Recovery from Local & External Drive<i className="fa fa-angle-down"></i></a> </p>
                        </div>
                        <div id="collapseOne" className="panel-collapse collapse in">
                          <div className="panel-body">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><i className="fa fa-plane"></i> Recovery Photo, Image, Video and Audio<i className="fa fa-angle-down"></i></a> </p>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><i className="fa fa-star"></i> Mobile Phone Recovery<i className="fa fa-angle-down"></i></a> </p>
                        </div>
                        <div id="collapseThree" className="panel-collapse collapse">
                          <div className="panel-body">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <p className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"><i className="fa fa-bar-chart" aria-hidden="true"></i> Complete Recovery from Local & External Drive<i className="fa fa-angle-down"></i></a> </p>
                        </div>
                        <div id="collapseFour" className="panel-collapse collapse in">
                          <div className="panel-body">
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                              consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="full" style={{ marginTop: "35px" }}>
                <h3>Need file recovery?</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt explicabo..</p>
                <p><a className="btn main_bt" href="#">Read More</a></p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="section padding_layout_1 light_silver gross_layout">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="full">
                <div className="main_heading text_align_left">
                  <h2>About Service</h2>
                  <p className="large">Easy and effective way to get your device repaired.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="full">
                    <div className="service_blog_inner2">
                      <div className="icon text_align_left"><i className="fa fa-wrench"></i></div>
                      <h4 className="service-heading">Honest Services</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium dolore mque.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="full">
                    <div className="service_blog_inner2">
                      <div className="icon text_align_left"><i className="fa fa-cog"></i></div>
                      <h4 className="service-heading">Secure payments</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium dolore mque.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="full">
                    <div className="service_blog_inner2">
                      <div className="icon text_align_left"><i className="fa fa-history"></i></div>
                      <h4 className="service-heading">Expert team</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium dolore mque.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="full">
                    <div className="service_blog_inner2">
                      <div className="icon text_align_left"><i className="fa fa-heart-o"></i></div>
                      <h4 className="service-heading">Affordable services</h4>
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium dolore mque.</p>
                    </div>
                  </div>
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

export default AboutUs