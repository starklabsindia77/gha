import React,{ useState, useEffect} from 'react'
import CourseBreadcrumb from '../components/CourseComponent/CourseBreadcrumb'
import CoursesMain from '../components/CourseComponent/CoursesMain'
import HomeHeader from '../components/Header/HomeHeader'
import Footer from '../components/HomeComponent/Footer'
import { Link } from "react-router-dom";
import {serverUrl} from "../data/config";
function Courses() {
  const [CoursesList, setCoursesList] = useState([]);
  const getCourses = () => {
      const options = {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json;charset=utf-8',
          },
      };

      fetch(`${serverUrl}/courses/public`, options)
          .then((response) => response.json())
          .then((d) => {
              // console.log('data', d);
              if (d.error) {
                  console.log('error msg', d.error);
              } else if (d.result.length > 0) {
                  const ss = d.result;
                  // console.log('result', ss);
                  setCoursesList(ss)

              }
          });
  }

  useEffect(() => {
      getCourses();
  }, []);
  return (
    <div>
      {/* <PreLoader /> */}
      <div id="main-wrapper" className="main-wrapper">
        <HomeHeader/>
        <CourseBreadcrumb />
        <CoursesMain data={CoursesList}/>
        <Footer />
      </div>
    </div>
  )
}

export default Courses