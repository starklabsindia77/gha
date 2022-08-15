import React from "react";
import { Link } from "react-router-dom";
// import PreLoader from "../components/PreLoader"
import HomeHeader from "../components/Header/HomeHeader"
import Banner from "../components/HomeComponent/Banner"
import Features from "../components/HomeComponent/Features";
import Category from "../components/HomeComponent/Category";
import AboutUs from "../components/HomeComponent/AboutUs";
import CourseArea from "../components/HomeComponent/CourseArea";
import CounterUp from "../components/HomeComponent/CounterUp";
import Testimonial from "../components/HomeComponent/Testimonial";
import HomeOne from "../components/HomeComponent/HomeOne";
import Team from "../components/HomeComponent/Team";
import BannerTwo from "../components/HomeComponent/BannerTwo";
import Brand from "../components/HomeComponent/Brand";
import Blog from "../components/HomeComponent/Blog";
import Footer from "../components/HomeComponent/Footer";

function Home() {
  return (
    <div>
      {/* <PreLoader /> */}
      <div id="main-wrapper" className="main-wrapper">
        <HomeHeader/>
        <Banner />
        <Features />
        <Category />
        <AboutUs />
        <CourseArea/>
        <CounterUp />
        <Testimonial />
        <HomeOne />
        <Team />
        <BannerTwo />
        <Brand />
        <Blog />
        <Footer />

      </div>
    </div>


  );
}

export default Home;
