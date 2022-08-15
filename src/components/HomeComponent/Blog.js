import React from 'react'
function Blog() {
  return (
    <div className="edu-blog-area blog-area-1 edu-section-gap">
            <div className="container">
                <div className="section-title section-center" >
                    <span className="pre-title">Latest Articles</span>
                    <h2 className="title">Get News with EduBlink</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
                <div className="row g-5">
               
                    <div className="col-lg-4 col-md-6 col-12" >
                        <div className="edu-blog blog-style-1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/blog-01.jpg" alt="Blog Images" />
                                    </a>
                                </div>
                                <div className="content position-top">
                                    <div className="read-more-btn">
                                        <a className="btn-icon-round" href="blog-details.html"><i className="icon-4"></i></a>
                                    </div>
                                    <div className="category-wrap">
                                        <a href="#" className="blog-category">ONLINE</a>
                                    </div>
                                    <h5 className="title"><a href="blog-details.html">Become a Better Blogger: Content Planning</a></h5>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>Oct 10, 2021</li>
                                        <li><i className="icon-28"></i>Com 09</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 col-12" >
                        <div className="edu-blog blog-style-1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/blog-02.jpg" alt="Blog Images" />
                                    </a>
                                </div>
                                <div className="content position-top">
                                    <div className="read-more-btn">
                                        <a className="btn-icon-round" href="blog-details.html"><i className="icon-4"></i></a>
                                    </div>
                                    <div className="category-wrap">
                                        <a href="#" className="blog-category">LECTURE</a>
                                    </div>
                                    <h5 className="title"><a href="blog-details.html">How to Keep Workouts Fresh in the Morning</a></h5>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>Oct 10, 2021</li>
                                        <li><i className="icon-28"></i>Com 09</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt labore dol oremagna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-lg-4 col-md-6 col-12" >
                        <div className="edu-blog blog-style-1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/blog-03.jpg" alt="Blog Images" />
                                    </a>
                                </div>
                                <div className="content position-top">
                                    <div className="read-more-btn">
                                        <a className="btn-icon-round" href="blog-details.html"><i className="icon-4"></i></a>
                                    </div>
                                    <div className="category-wrap">
                                        <a href="#" className="blog-category">BUSINESS</a>
                                    </div>
                                    <h5 className="title"><a href="blog-details.html">Four Ways to Keep Your Workout Routine Fresh</a></h5>
                                    <ul className="blog-meta">
                                        <li><i className="icon-27"></i>Oct 10, 2021</li>
                                        <li><i className="icon-28"></i>Com 09</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet cons tetur adipisicing sed do eiusmod ux tempor incid idunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene">
                    <img data-depth="-1.4" src="assets/images/about/shape-02.png" alt="Shape"/>
                </li>
                <li className="shape-2 scene">
                    <span data-depth="2.5"></span>
                </li>
                <li className="shape-3 scene">
                    <img data-depth="-2.3" src="assets/images/counterup/shape-05.png" alt="Shape" />
                </li>
            </ul>
        </div>
  )
}

export default Blog