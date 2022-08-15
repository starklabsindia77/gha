import React from 'react'
import CourseBreadcrumb from '../components/CourseComponent/CourseBreadcrumb'
import CoursesMain from '../components/CourseComponent/CoursesMain'
import HomeHeader from '../components/Header/HomeHeader'
import Footer from '../components/HomeComponent/Footer'
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div>
      {/* <PreLoader /> */}
      <div id="main-wrapper" className="main-wrapper">
        <HomeHeader/>
        <CourseBreadcrumb />
        <CoursesMain />
        <Footer />
      </div>
    </div>
  )
}

export default Courses