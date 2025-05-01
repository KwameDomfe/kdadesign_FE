import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {

    const location = useLocation()
    // console.log(location)
    let currentLocation = '';

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb =>{
            currentLocation += `/${crumb}`
            return (
                    <span className="ph0-75 br b--white bw2 mr0-50 white"
                        key={crumb}
                    >
                        <Link to={currentLocation}
                            className="white"
                        >
                            {crumb}
                        </Link>
                    </span>
                )
            }
        )
    return (
        <div id="PageCrumbs"
            className="container container90  pv0-25"
        >
            <div className="mv0-25 ma0-25 pa0-25">
                {crumbs}
            </div>
        </div>
    )
}

export default Breadcrumbs
