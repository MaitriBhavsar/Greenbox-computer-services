import React, { Component, useEffect } from 'react';
import MainSlider from '../MainSlider';
import ChooseService from '../ChooseService';
import ServiceProcess from '../ServiceProcess';
import Products from '../Products';
import Feedback from '../Feedback';
import Testimonials from '../Testimonials';
import GetAQuote from '../GetAQuote';
import Brand from '../Brand';
// import '../../../public/css/style.css';
// import '../../../build/css/style.css';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GreenBox Services | Home</title>
            </Helmet>
            {/* <Header /> */}
            <MainSlider />
            <ChooseService />
            <ServiceProcess />
            {/* <Products /> */}
            <Feedback />
            {/* <Footer /> */}
        </>

    )
}

export default Home