import React from 'react'

function PreLoader() {
  return (
    <div id="edublink-preloader">
        <div className="loading-spinner">
            <div className="preloader-spin-1"></div>
            <div className="preloader-spin-2"></div>
        </div>
        <div className="preloader-close-btn-wraper">
            <span className="btn btn-primary preloader-close-btn">
                Cancel Preloader</span>
        </div>
    </div>
  )
}

export default PreLoader