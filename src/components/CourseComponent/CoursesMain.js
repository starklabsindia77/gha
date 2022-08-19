/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useMemo, useEffect} from 'react'

import CourseCard from "../courseCard/CourseCard";
import Pagination from "../../other/Pagination";


let PageSize = 10;

function CoursesMain({data}) {   

    const [currentPage, setCurrentPage] = useState(1);
    const [filterData, setFilterData] = useState([])
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        setFilterData(data.slice(firstPageIndex, lastPageIndex)) 
    }, [currentPage]);
    
    useEffect(() => {
        setFilterData(data.slice(0, 10))
    }, [data])
    

   console.log("currentTableData", filterData)
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
                                            <input type="checkbox" id="cat-check1" />
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
                                <h6 className="showing-text">We found <span>{data.length}</span> courses available for you</h6>
                            </div>
                            {/* <div className="sorting-right">
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
                            </div> */}
                        </div>
                        {filterData && filterData.length > 0 && filterData.map((item, i) => (
                            <CourseCard data={item} key={i} />
                        ))}
                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={data.length}
                            pageSize={PageSize}
                            onPageChange={page => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CoursesMain