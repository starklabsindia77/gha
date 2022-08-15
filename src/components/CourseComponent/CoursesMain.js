import React, {useState, useEffect} from 'react'
import {serverUrl} from "../../data/config";
import CourseCard from "../courseCard/CourseCard";

function CoursesMain() {
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
                    console.log('result', ss);
                    setCoursesList(ss)

                }
            });
    }

    useEffect(() => {
        getCourses();
    }, []);
  return (
    <div className="edu-course-area course-area-1 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-3">
                        <div className="edu-course-sidebar">
                            <div className="edu-course-widget widget-category">
                                <div className="inner">
                                    <h5 className="widget-title">Filter by Categories</h5>
                                    <div className="content">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="cat-check1" checked/>
                                            <label for="cat-check1">Art &amp; Design <span>(7)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="cat-check2"/>
                                            <label for="cat-check2">Development <span>(2)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="cat-check3"/>
                                            <label for="cat-check3">Business <span>(3)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="cat-check4"/>
                                            <label for="cat-check4">Marketing <span>(6)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="cat-check5"/>
                                            <label for="cat-check5">Academics <span>(2)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="cat-check6"/>
                                            <label for="cat-check6">Data Science <span>(9)</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-course-widget widget-instructor">
                                <div className="inner">
                                    <h5 className="widget-title">Instructor</h5>
                                    <div className="content">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="inst-check1"/>
                                            <label for="inst-check1">Madge Alvarez <span>(2)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="inst-check2"/>
                                            <label for="inst-check2">Tyler Hardy <span>(14)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="inst-check3"/>
                                            <label for="inst-check3">Dabiv Matina <span>(10)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="inst-check4"/>
                                            <label for="inst-check4">Robbin Lee <span>(5)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="inst-check5"/>
                                            <label for="inst-check5">Donald Logan <span>(2)</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-course-widget widget-level">
                                <div className="inner">
                                    <h5 className="widget-title">Level</h5>
                                    <div className="content">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="level-check1"/>
                                            <label for="level-check1">All Levels <span>(23)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="level-check2"/>
                                            <label for="level-check2">Beginner <span>(7)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="level-check3"/>
                                            <label for="level-check3">High <span>(10)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="level-check4"/>
                                            <label for="level-check4">Intermediate <span>(13)</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-course-widget widget-language">
                                <div className="inner">
                                    <h5 className="widget-title">Language</h5>
                                    <div className="content">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="lang-check1"/>
                                            <label for="lang-check1">English <span>(12)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="lang-check2"/>
                                            <label for="lang-check2">Spanish <span>(7)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="lang-check3"/>
                                            <label for="lang-check3">German <span>(5)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="lang-check4"/>
                                            <label for="lang-check4">Russian <span>(3)</span></label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="lang-check5"/>
                                            <label for="lang-check5">Korean <span>(2)</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-course-widget widget-price">
                                <div className="inner">
                                    <h5 className="widget-title">Price</h5>
                                    <div className="content">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="price-check1"/>
                                            <label for="price-check1">All Price</label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="price-check2"/>
                                            <label for="price-check2">Free</label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="price-check3"/>
                                            <label for="price-check3">Low to High</label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="price-check4"/>
                                            <label for="price-check4">High to Low</label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="price-check5"/>
                                            <label for="price-check5">Paid</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edu-course-widget widget-rating">
                                <div className="inner">
                                    <h5 className="widget-title">Rating</h5>
                                    <div className="content">
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="rating-check1"/>
                                            <label for="rating-check1">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <span>(7)</span>
                                            </label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="rating-check2"/>
                                            <label for="rating-check2">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <span>(2)</span>
                                            </label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="rating-check3"/>
                                            <label for="rating-check3">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <span>(3)</span>
                                            </label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="rating-check4"/>
                                            <label for="rating-check4">
                                                <i className="icon-23"></i>
                                                <i className="icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <span>(6)</span>
                                            </label>
                                        </div>
                                        <div className="edu-form-check">
                                            <input type="checkbox" id="rating-check5"/>
                                            <label for="rating-check5">
                                                <i className="icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <i className="off icon-23"></i>
                                                <span>(2)</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-pl--35">
                        <div className="edu-sorting-area">
                            <div className="sorting-left">
                                <h6 className="showing-text">We found <span>71</span> courses available for you</h6>
                            </div>
                            <div className="sorting-right">
                                <div className="layout-switcher">
                                    <label>Grid</label>
                                    <ul className="switcher-btn">
                                        <li><a href="course-one.html" className=""><i className="icon-53"></i></a></li>
                                        <li><a href="course-four.html" className="active"><i className="icon-54"></i></a></li>
                                    </ul>
                                </div>
                                <div className="edu-sorting">
                                    <div className="icon"><i className="icon-55"></i></div>
                                    <select className="edu-select">
                                        <option>Filters</option>
                                        <option>Low To High</option>
                                        <option>High Low To</option>
                                        <option>Last Viewed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        {CoursesList.length > 0 && CoursesList.map((item) => (
                            <CourseCard data={item}  />
                        ))}
                        {/* <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-12.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">Java Programming MasterclassName for Software Developers</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">Java Programming MasterclassName for Software Developers</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-11.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">React - The Complete Guide (incl Hooks, React, Redux)</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">React - The Complete Guide (incl Hooks, React, Redux)</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-14.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">Microsoft Excel - Excel from Beginner to Advanced</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">Microsoft Excel - Excel from Beginner to Advanced</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-13.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">Adobe Premiere Pro CC Master-className: Video Editing</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">Adobe Premiere Pro CC Master-className: Video Editing</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-41.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">The Complete Camtasia Course for Content Creators</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">The Complete Camtasia Course for Content Creators</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-42.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">Build Responsive Real-World Websites with HTML & CSS</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">Build Responsive Real-World Websites with HTML & CSS</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-43.jpg" alt="Course Meta"/>
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">C Programming For Beginners - Master the C Language</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">C Programming For Beginners - Master the C Language</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-44.jpg" alt="Course Meta" />
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">Vue - The Complete Guide (w/ Router, Composition API)</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">Vue - The Complete Guide (w/ Router, Composition API)</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="edu-course course-style-4 course-style-8">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-45.jpg" alt="Course Meta" />
                                    </a>
                                    <div className="time-top">
                                        <span className="duration"><i className="icon-61"></i>3 Weeks</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="course-price">$29.00</div>
                                    <h6 className="title">
                                        <a href="course-details.html">Master Microservices with Spring Boot & Spring Cloud</a>
                                    </h6>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5.0 /7 Rating)</span>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod tempor incidid unt labore dolore magna.</p>
                                    <ul className="course-meta">
                                        <li><i className="icon-24"></i>8 Lessons</li>
                                        <li><i className="icon-25"></i>20 Students</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hover-content-aside">
                                <div className="content">
                                    <span className="course-level">Engineering</span>
                                    <h5 className="title">
                                        <a href="course-details.html">Master Microservices with Spring Boot & Spring Cloud</a>
                                    </h5>
                                    <div className="course-rating">
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(5)</span>
                                    </div>
                                    <ul className="course-meta">
                                        <li>8 Lessons</li>
                                        <li>20 hrs</li>
                                        <li>All Levels</li>
                                    </ul>
                                    <div className="course-feature">
                                        <h6 className="title">What You’ll Learn?</h6>
                                        <ul>
                                            <li>Learn to use Python professionally, learning both Python 2 & Python 3!</li>
                                            <li>Build 6 beautiful real-world projects for your portfolio (not boring toy </li>
                                            <li>Understand the Theory behind Vue.js and use it in Real Projects</li>
                                        </ul>
                                    </div>
                                    <div className="button-group">
                                        <a href="#" className="edu-btn btn-medium">Add to Cart</a>
                                        <a href="#" className="wishlist-btn btn-outline-dark"><i className="icon-22"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


                <ul className="edu-pagination ">
                    <li><a href="#" aria-label="Previous"><i className="icon-west"></i></a></li>
                    <li className="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li className="more-next"><a href="#"></a></li>
                    <li><a href="#">8</a></li>
                    <li><a href="#" aria-label="Next"><i className="icon-east"></i></a></li>
                </ul>

            </div>
        </div>
  )
}

export default CoursesMain