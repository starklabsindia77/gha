import React from 'react'
import "../../styles/appModule.css";
import { Link } from "react-router-dom";
function HomeHeader() {
    const apply = () => {
		window.open('https://admi-frontend.vercel.app/', "_blank", "noopener noreferrer")		
	};
  return (
    <header className="edu-header header-style-1 header-fullwidth">
            <div className="header-top-bar">
                <div className="container-fluid">
                    <div className="header-top">
                        <div className="header-top-left">
                            <div className="header-notify">
                                First 20 students get 50% discount. <Link to="/">Hurry up!</Link>
                            </div>
                        </div>
                        <div className="header-top-right">
                            <ul className="header-info">
                                <li onClick={apply}>Login</li>
                                <li onClick={apply}>Register</li>
                                <li><Link to="tel:+011235641231"><i className="icon-phone"></i>Call: 123 4561 5523</Link></li>
                                <li><Link to="mailto:info@edublink.com" target="_blank"><i className="icon-envelope"></i>Email: info@edublink.com</Link></li>
                                <li className="social-icon">
                                    <Link to="/"><i className="icon-facebook"></i></Link>
                                    <Link to="/"><i className="icon-instagram"></i></Link>
                                    <Link to="/"><i className="icon-twitter"></i></Link>
                                    <Link to="/"><i className="icon-linkedin2"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="edu-sticky-placeholder"></div>
            <div className="header-mainmenu">
                <div className="container-fluid">
                    <div className="header-navbar">
                        <div className="header-brand">
                            <div className="logo">
                                <Link to="/">
                                    <img className="logo-light" src="assets/images/logo/logo-1.png" alt="Corporate Logo" />
                                    <img className="logo-dark" src="assets/images/logo/logo-1.png" alt="Corporate Logo" />
                                </Link>
                            </div>
                            {/* <div className="header-category">
                                <nav className="mainmenu-nav">
                                    <ul className="mainmenu">
                                        <li className="has-droupdown">
                                            <Link to="/"><i className="icon-1"></i>Category</Link>
                                            <ul className="submenu">
                                                <li><Link to="course-one.html">Design</Link></li>
                                                <li><Link to="course-one.html">Development</Link></li>
                                                <li><Link to="course-one.html">Architecture</Link></li>
                                                <li><Link to="course-one.html">Life Style</Link></li>
                                                <li><Link to="course-one.html">Data Science</Link></li>
                                                <li><Link to="course-one.html">Marketing</Link></li>
                                                <li><Link to="course-one.html">Music</Link></li>
                                                <li><Link to="course-one.html">Photography</Link></li>
                                                <li><Link to="course-one.html">Finance</Link></li>
                                                <li><Link to="course-one.html">Motivation</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div> */}
                        </div>
                        <div className="header-mainnav">
                            <nav className="mainmenu-nav">
                                <ul className="mainmenu">
                                    <li><Link to="/">Home</Link>
                                        {/* <ul className="submenu">
                                            <li><Link to="index-2.html">EduBlink Education</Link></li>
                                            <li><Link to="index-distant-learning.html">Distant Learning</Link></li>
                                            <li><Link to="index-university.html">University</Link></li>
                                            <li><Link to="index-online-academy.html">Online Academy</Link></li>
                                            <li><Link to="index-kitchen.html">Kitchen Coach</Link></li>
                                            <li><Link to="index-yoga.html">Yoga Instructor</Link></li>
                                            <li><Link to="index-kindergarten.html">Kindergarten</Link></li>
                                            <li><Link to="index-landing.html">Landing Demo</Link></li>
                                        </ul> */}
                                    </li>
                                    <li ><Link to="/about">About Us</Link>
                                        {/* <ul className="mega-menu">
                                            <li>
                                                <h6 className="menu-title">Inner Pages</h6>
                                                <ul className="submenu mega-sub-menu-01">
                                                    <li><Link to="about-one.html">About Us 1</Link></li>
                                                    <li><Link to="about-two.html">About Us 2</Link></li>
                                                    <li><Link to="about-three.html">About Us 3</Link></li>
                                                    <li><Link to="team-one.html">Instructor 1</Link></li>
                                                    <li><Link to="team-two.html">Instructor 2</Link></li>
                                                    <li><Link to="team-three.html">Instructor 3</Link></li>
                                                    <li><Link to="team-details.html">Instructor Profile</Link></li>
                                                    <li><Link to="faq.html">Faq's</Link></li>
                                                    <li><Link to="404.html">404 Error</Link></li>
                                                    <li><Link to="coming-soon.html">Coming Soon</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h6 className="menu-title">Inner Pages</h6>
                                                <ul className="submenu mega-sub-menu-01">
                                                    <li><Link to="gallery-grid.html">Gallery Grid</Link></li>
                                                    <li><Link to="gallery-masonry.html">Gallery Masonry</Link></li>
                                                    <li><Link to="event-grid.html">Event Grid</Link></li>
                                                    <li><Link to="event-list.html">Event List</Link></li>
                                                    <li><Link to="event-details.html">Event Details</Link></li>
                                                    <li><Link to="pricing-table.html">Pricing Table</Link></li>
                                                    <li><Link to="purchase-guide.html">Purchase Guide</Link></li>
                                                    <li><Link to="privacy-policy.html">Privacy Policy</Link></li>
                                                    <li><Link to="terms-condition.html">Terms & Condition</Link></li>
                                                    <li><Link to="my-account.html">Sign In</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h6 className="menu-title">Shop Pages</h6>
                                                <ul className="submenu mega-sub-menu-01">
                                                    <li><Link to="shop.html">Shop</Link></li>
                                                    <li><Link to="product-details.html">Product Details</Link></li>
                                                    <li><Link to="cart.html">Cart</Link></li>
                                                    <li><Link to="wishlist.html">Wishlist</Link></li>
                                                    <li><Link to="checkout.html">Checkout</Link></li>
                                                </ul>
                                            </li>
                                        </ul> */}
                                    </li>

                                    <li ><Link to="/courses">Courses</Link>
                                        {/* <ul className="submenu">
                                            <li><Link to="course-one.html">Course Style 1</Link></li>
                                            <li><Link to="course-two.html">Course Style 2</Link></li>
                                            <li><Link to="course-three.html">Course Style 3</Link></li>
                                            <li><Link to="course-four.html">Course Style 4</Link></li>
                                            <li><Link to="course-five.html">Course Style 5</Link></li>
                                            <li><Link to="course-details.html">Course Details 1</Link></li>
                                            <li><Link to="course-details-2.html">Course Details 2</Link></li>
                                            <li><Link to="course-details-3.html">Course Details 3</Link></li>
                                        </ul> */}
                                    </li>
                                    <li><Link to="/contact">Contact</Link>
                                        {/* <ul className="submenu">
                                            <li><Link to="contact-us.html">Contact Us</Link></li>
                                            <li><Link to="contact-me.html">Contact Me</Link></li>
                                        </ul> */}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-right">
                            <ul className="header-action">
                                <li className="search-bar">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <button className="search-btn" type="button"><i className="icon-2"></i></button>
                                    </div>
                                </li>
                                {/* <li className="icon search-icon">
                                    <Link to="javascript:void(0)" className="search-trigger">
                                        <i className="icon-2"></i>
                                    </Link>
                                </li> */}
                                {/* <li className="icon cart-icon">
                                    <Link to="cart.html">
                                        <i className="icon-3"></i>
                                        <span className="count">0</span>
                                    </Link>
                                </li>
                                <li className="header-btn">
                                    <Link to="contact-us.html" className="edu-btn btn-medium">Try for free <i className="icon-4"></i></Link>
                                </li> */}
                                <li className="mobile-menu-bar d-block d-xl-none">
                                    <button className="hamberger-button">
                                        <i className="icon-54"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-mobile-menu">
                <div className="inner">
                    <div className="header-top">
                        <div className="logo">
                            <Link to="index-2.html">
                                <img className="logo-light" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                                <img className="logo-dark" src="assets/images/logo/logo-white.png" alt="Corporate Logo"/>
                            </Link>
                        </div>
                        <div className="close-menu">
                            <button className="close-button">
                                <i className="icon-73"></i>
                            </button>
                        </div>
                    </div>
                    <ul className="mainmenu">
                        <li className="has-droupdown"><Link to="/">Home</Link>
                            
                        </li>
                        <li className="has-droupdown"><Link to="/">Pages</Link>
                           
                        </li>

                        <li className="has-droupdown"><Link to="/">Courses</Link>
                            
                        </li>
                        <li className="has-droupdown"><Link to="/">Contact</Link>
                            
                        </li>
                    </ul>
                </div>
            </div>

            <div className="edu-search-popup">
                <div className="content-wrap">
                    <div className="site-logo">
                        <img className="logo-light" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                        <img className="logo-dark" src="assets/images/logo/logo-white.png" alt="Corporate Logo" />
                    </div>
                    <div className="close-button">
                        <button className="close-trigger"><i className="icon-73"></i></button>
                    </div>
                    <div className="inner">
                        <form className="search-form" action="/">
                            <input type="text" className="edublink-search-popup-field" placeholder="Search Here..." />
                            <button className="submit-button"><i className="icon-2"></i></button>
                        </form>
                    </div>
                </div>
            </div>
           
        </header>
  )
}

export default HomeHeader