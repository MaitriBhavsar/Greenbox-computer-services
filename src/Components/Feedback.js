import React, { Component }  from 'react';

const Feedback = () => {
    return (
        <div className="section padding_layout_1 light_silver gross_layout right_gross_layout">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="main_heading text_align_right">
                                <h2>Our Feedback</h2>
                                <p className="large">Easy and effective way to get your device repaired.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row counter">
                    <div className="col-md-4"> </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                                <div className="text_align_right"><i className="fa fa-smile-o"></i></div>
                                <div className="text_align_right">
                                    <p className="counter-heading text_align_right">Happy Customers</p>
                                </div>
                                <h5 className="counter-count">2150</h5>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                                <div className="text_align_right"><i className="fa fa-laptop"></i></div>
                                <div className="text_align_right">
                                    <p className="counter-heading text_align_right">Laptop Repaired</p>
                                </div>
                                <h5 className="counter-count">1280</h5>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                                <div className="text_align_right"><i className="fa fa-desktop"></i></div>
                                <div className="text_align_right">
                                    <p className="counter-heading">Computer Repaired</p>
                                </div>
                                <h5 className="counter-count">848</h5>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 margin_bottom_50">
                                <div className="text_align_right"><i className="fa fa-windows"></i></div>
                                <div className="text_align_right">
                                    <p className="counter-heading">OS Installed</p>
                                </div>
                                <h5 className="counter-count">450</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;