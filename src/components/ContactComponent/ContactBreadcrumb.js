import React from 'react'

function ContactBreadcrumb() {
  return (
    <div className="edu-breadcrumb-area">
            <div className="container">
                <div className="breadcrumb-inner">
                    <div className="page-title">
                        <h1 className="title">Contact Us</h1>
                    </div>
                    <ul className="edu-breadcrumb">
                        <li className="breadcrumb-item"><a href="index-one.html">Home</a></li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <span></span>
                </li>
                <li className="shape-2 scene"><img data-depth="2" src="assets/images/about/shape-13.png" alt="shape" /></li>
                <li className="shape-3 scene"><img data-depth="-2" src="assets/images/about/shape-15.png" alt="shape" /></li>
                <li className="shape-4">
                    <span></span>
                </li>
                <li className="shape-5 scene"><img data-depth="2" src="assets/images/about/shape-07.png" alt="shape" /></li>
            </ul>
        </div>
  )
}

export default ContactBreadcrumb