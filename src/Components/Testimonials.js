import React, { Component }  from 'react';

const Testimonials = () => {
    return (
        <div className="section padding_layout_1 testmonial_section white_fonts">
           <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="main_heading text_align_left">
                                <h2 style={{textTransform: "none"}}>What Clients Say?</h2>
                                <p className="large">Here are testimonials from clients..</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-7">
                        <div className="full">
                            <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                                {/* <!-- Indicators --> */}
                                <ul className="carousel-indicators">
                                    <li data-target="#testimonial_slider" data-slide-to="0" className="active"></li>
                                    <li data-target="#testimonial_slider" data-slide-to="1"></li>
                                    <li data-target="#testimonial_slider" data-slide-to="2"></li>
                                </ul>
                                {/* <!-- The slideshow --> */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="testimonial-container">
                                            <div className="testimonial-content"> You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.
                                                I am really satisfied with my first laptop service. </div>
                                            <div className="testimonial-photo"> <img src="images/it_service/client1.jpg" className="img-responsive" alt="#" width="150" height="150" /> </div>
                                            <div className="testimonial-meta">
                                                <h4>Maria Anderson</h4>
                                                <span className="testimonial-position">CFO, Tech NY</span> </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial-container">
                                            <div className="testimonial-content"> You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.
                                                I am really satisfied with my first laptop service. </div>
                                            <div className="testimonial-photo"> <img src="images/it_service/client2.jpg" className="img-responsive" alt="#" width="150" height="150" /> </div>
                                            <div className="testimonial-meta">
                                                <h4>Maria Anderson</h4>
                                                <span className="testimonial-position">CFO, Tech NY</span> </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="testimonial-container">
                                            <div className="testimonial-content"> You guys rock! Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first.
                                                I am really satisfied with my first laptop service. </div>
                                            <div className="testimonial-photo"> 
                                            <img src="images/it_service/client3.jpg" className="img-responsive" alt="#" width="150" height="150" /> </div>
                                            <div className="testimonial-meta">
                                                <h4>Maria Anderson</h4>
                                                <span className="testimonial-position">CFO, Tech NY</span> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="full"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;