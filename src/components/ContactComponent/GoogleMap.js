import React from 'react'

function GoogleMap() {
  return (
    <div className="google-map-area">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=melbourne,%20Australia&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
  )
}

export default GoogleMap