import React from 'react'
import ConactForm from '../components/ContactComponent/ConactForm'
import ContactBreadcrumb from '../components/ContactComponent/ContactBreadcrumb'
import GoogleMap from '../components/ContactComponent/GoogleMap'
import HomeHeader from "../components/Header/HomeHeader"
import Footer from '../components/HomeComponent/Footer'
import { Link } from "react-router-dom";
function Contact() {
  return (
    <div>
      {/* <PreLoader /> */}
      <div id="main-wrapper" className="main-wrapper">
        <HomeHeader/>
        <ContactBreadcrumb />
        <ConactForm />
        <GoogleMap />
        <Footer />
      </div>
    </div>
  )
}

export default Contact