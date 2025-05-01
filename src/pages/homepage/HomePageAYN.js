import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/featured_grid.jpg'
const HomePageAYN = () => {
    
    return (
        <div className="grid gtc12 
            min-vh-90 
            white-90 bg-gray"
        >
            <figure className="gc1s12 gr1s1 w-100 h-100"
            >
                <img src={second}
                    alt=""
                    className="w-100 h-100 cover"
                />
            </figure>
            <div id=""
                className="gc1s12 gr1s1 
                    flex items-center justify-around 
                    w-100 h-100 pv8-00
                    bg-gradient1BT"
            >
                <div id=""
                    className="flex flex-column justify-center items-center
                    ml8-00-m w-100 h-100 
                    pa1-00"
                >
                    <div id=""
                        className="w-100 
                            mb4-00"
                    >
                        <h1 className="f1-75 f3-00-m mt0-00 mb2-00"
                        >
                            Clients are our focus on our delivery promise.                   
                        </h1>
                        <p className="f1-25 f1-75-m mb4-00"
                        >
                            We architect <br/> Bespoke Digital Solutions for our clients      
                        </p>

                        <div className="flex justify-between justify-start-s items-center 
                            w-50-m 
                            ttu"
                        >
                            <div className="w10-00 br0-25 pa0-50 bg-white ba tc">
                                <Link to ="architect-your-next"
                                    className="gray b">
                                    read more...
                                </Link>     
                            </div>
                        </div>
                    </div>
                
                    <div className="dn flex-s justify-s items-start ggap2-00
                    w-100
                    mb2-00"
                    >
                        <div className=" flex flex-column justify-between w16-00 h10-00
                            ba br0-50 white-90 pa0-50"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    The new AESL website...
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    AESL has a new website that reflects their new posture
                                </h5>
                            </hgroup>
                            <a href="https://aesl.kdadesign.tech"
                                target="_blank"
                                rel="noreferrer"
                                className="mb0-00"
                            >
                                <b>view</b>
                            </a>
                        </div>
                        <div className=" flex flex-column justify-between w16-00 h10-00
                            ba br0-50 white-90 pa0-50"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    The NEXT Kwame Domfe Appau
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    Kwame Domfe Appau sets out to promote self directed experiential learning.
                                </h5>
                            </hgroup>
                            <a href="https://kwamedomfeappau.com"
                                target="_blank"
                                rel="noreferrer"
                                className="mb0-00"
                            >
                                <b>view</b>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default HomePageAYN
