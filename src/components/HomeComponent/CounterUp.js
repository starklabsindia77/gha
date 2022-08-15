import React from 'react'

function CounterUp() {
  return (
    <div className="counterup-area-2">
    <div className="container">
        <div className="row g-5 justify-content-center">
            <div className="col-lg-8">
                <div className="counterup-box-wrap">
                    <div className="counterup-box">
                        <div className="edu-counterup counterup-style-2">
                            <h2 className="counter-item count-number primary-color">
                                <span className="odometer" data-odometer-final="45.2">.</span><span>K</span>
                            </h2>
                            <h6 className="title">Student Enrolled</h6>
                        </div>
                        <div className="edu-counterup counterup-style-2">
                            <h2 className="counter-item count-number secondary-color">
                                <span className="odometer" data-odometer-final="32.4">.</span><span>K</span>
                            </h2>
                            <h6 className="title">className Completed</h6>
                        </div>
                        <div className="edu-counterup counterup-style-2">
                            <h2 className="counter-item count-number extra05-color">
                                <span className="odometer" data-odometer-final="354">.</span><span>+</span>
                            </h2>
                            <h6 className="title">Top Instructors</h6>
                        </div>
                        <div className="edu-counterup counterup-style-2">
                            <h2 className="counter-item count-number extra02-color">
                                <span className="odometer" data-odometer-final="99.9">.</span><span>%</span>
                            </h2>
                            <h6 className="title">Satisfaction Rate</h6>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1 scene">
                            <img data-depth="-2" src="assets/images/about/shape-13.png" alt="Shape" />
                        </li>
                        <li className="shape-2">
                            <img className="rotateit" src="assets/images/counterup/shape-02.png" alt="Shape" />
                        </li>
                        <li className="shape-3 scene">
                            <img data-depth="1.6" src="assets/images/counterup/shape-04.png" alt="Shape" />
                        </li>
                        <li className="shape-4 scene">
                            <img data-depth="-1.6" src="assets/images/counterup/shape-05.png" alt="Shape" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CounterUp