import React, { Component }  from 'react';
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

function Home() {
    return (
        <>
            {/* <Header /> */}
            <MainSlider />
            <ChooseService />
            <ServiceProcess />
            <Products />
            <Feedback />
           
            {/* <Footer /> */}
        </>

    )
}

export default Home