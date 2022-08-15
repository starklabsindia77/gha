import React from 'react'
import AboutBreadcrumb from '../components/AboutComponent/AboutBreadcrumb'
import AboutCounterUp from '../components/AboutComponent/AboutCounterUp'
import AboutTestimonial from '../components/AboutComponent/AboutTestimonial'
import Aboutus from '../components/AboutComponent/Aboutus'
import CTA from '../components/AboutComponent/CTA'
import WhyChooseUs from '../components/AboutComponent/WhyChooseUs'
import HomeHeader from '../components/Header/HomeHeader'
import Footer from '../components/HomeComponent/Footer'
import Team from '../components/HomeComponent/Team'
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      {/* <PreLoader /> */}
      <div id="main-wrapper" className="main-wrapper">
        <HomeHeader/>
        <AboutBreadcrumb/>
        <Aboutus />
        <AboutCounterUp />
        <WhyChooseUs />
        <CTA />
        <Team />
        <AboutTestimonial />
        <Footer />
      </div>
    </div>
  )
}

export default About