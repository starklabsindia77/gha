import React from 'react'

function AboutUs() {
  return (
    <div className="gap-bottom-equal edu-about-area about-style-1">
    <div className="container edublink-animated-shape">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6">
                <div className="about-image-gallery">
                    <img className="main-img-1" src="/assets/images/about/about-01.jpg" alt="About Image" />
                    <div className="video-box" >
                        <div className="inner">
                            <div className="thumb">
                                <img src="/assets/images/about/about-02.jpg" alt="About Image" />
                                <a href="https://www.youtube.com/watch?v=PICj5tr9hcc" className="popup-icon video-popup-activation">
                                    <i className="icon-18"></i>
                                </a>
                            </div>
                            <div className="loading-bar">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="award-status bounce-slide">
                        <div className="inner">
                            <div className="icon">
                                <i className="icon-21"></i>
                            </div>
                            <div className="content">
                                <h6 className="title">29+</h6>
                                <span className="subtitle">Wonderful Awards</span>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1 scene" >
                            <img data-depth="1" src="/assets/images/about/shape-36.png" alt="Shape" />
                        </li>
                        <li className="shape-2 scene" >
                            <img data-depth="-1" src="/assets/images/about/shape-37.png" alt="Shape" />
                        </li>
                        <li className="shape-3 scene" >
                            <img data-depth="1" src="/assets/images/about/shape-02.png" alt="Shape" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6" >
                <div className="about-content">
                    <div className="section-title section-left">
                        <span className="pre-title">About Us</span>
                        <h2 className="title">Learn & Grow Your Skills From <span className="color-secondary">Anywhere</span></h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim minim veniam quis nostrud exercitation ullamco laboris.</p>
                    </div>
                    <ul className="features-list">
                        <li>Expert Trainers</li>
                        <li>Online Remote Learning</li>
                        <li>Lifetime Access</li>
                    </ul>
                </div>
            </div>
        </div>
        <ul className="shape-group">
            <li className="shape-1 circle scene" >
                <span data-depth="-2.3"></span>
            </li>
        </ul>
    </div>
</div>
  )
}

export default AboutUs