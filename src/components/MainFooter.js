import React from 'react'
import { Link } from 'react-router-dom'

const MainFooter = () => {

    const currentYear = new Date().getFullYear()

    return (
        <section id=""
            className="pv1-00"
        >
            <div id="m__main_nav"
                className="flex items-center justify-center mv0-50"
            >
                <Link to="/"
                    className="black-90 mh0-50"
                >
                    home
                </Link>
                <Link to="/architect-your-next"
                    className="black-90 mh0-50"
                >
                    architect your next
                </Link>
                <Link to="/industries"
                    className="black-90 mh0-50"
                >
                    industries
                </Link>
                <Link to="/services"
                    className="black-90 mh0-50"
                >
                    services
                </Link>
                <Link to="/platforms"
                    className="black-90 mh0-50"
                >
                    platforms
                </Link>
                <Link to="/info"
                    className="black-90 mh0-50"
                >
                    info
                </Link>
            </div>
            
            <div id="m__poweredby" 
                className="flex flex-column items-center justify-center 
                    black-90 h-100"
            >

                <div className="flex mv0-25 items-center justify-center"
                >
                    <a href="https://www.kdadesign.tech" 
                        className="black-90 i"
                        target="_blank"
                        rel="noreferrer"
                    >
                        kda design technologies
                    </a>
                    <small className="ml0-50"
                    >
                    &copy;{currentYear}
                    </small>
                </div>
            </div>

        </section>
    )
}

export default MainFooter
