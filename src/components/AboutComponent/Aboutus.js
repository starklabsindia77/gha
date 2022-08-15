import React from 'react'

function Aboutus() {
  return (
    <div className="edu-section-gap edu-about-area about-style-8">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title section-left" >
                                <span className="pre-title">About Us</span>
                                <h2 className="title">We Provide Best <span className="color-secondary">Education</span> Services For You.</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Magna aliquaenim ad minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius tempor incididunt labore.</p>
                            </div>
                            <div className="about-mission">
                                <div className="single-item" >
                                    <div className="icon color-extra02"><i className="icon-51"></i></div>
                                    <div className="content">
                                        <h4 className="title">Our Mission</h4>
                                        <p>Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.</p>
                                    </div>
                                </div>
                                <div className="single-item" >
                                    <div className="icon color-extra06"><i className="icon-52"></i></div>
                                    <div className="content">
                                        <h4 className="title">Our Vision</h4>
                                        <p>Magna aliquaenim minim quis nostrud exercitation ulamco labor is Lorem ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <div className="row g-5" id="masonry-gallery">
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-1" >
                                        <img src="assets/images/about/about-13.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-2" >
                                        <img src="assets/images/about/about-14.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-3" >
                                        <img src="assets/images/about/about-16.jpg" alt="About Images"/>
                                    </div>
                                </div>
                                <div className="col-6 masonry-item">
                                    <div className="thumbnail thumbnail-4" >
                                        <img src="assets/images/about/about-15.jpg" alt="About Images"/>
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1 scene" >
                                    <img data-depth="2" src="assets/images/about/shape-33.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-2 scene" >
                                    <img data-depth="-2" src="assets/images/about/shape-25.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-3 scene" >
                                    <img data-depth="-2" src="assets/images/about/shape-13.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-4 scene" >
                                    <span data-depth=".8"></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Aboutus