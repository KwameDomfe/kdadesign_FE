import React from 'react'
import { Link } from 'react-router-dom'

const HomePageLeft = (props) => {

    const {bgImage, sectionHeading, sectionSubHeading, bgColour } = props
    return (
        <div className="grid gtc12 white-90 bg-gray min-vh-90 "
        >
            <figure className="gc1s12 gr1s1 h-100
                "
            >
                <img src={bgImage} 
                    alt=""
                    className="-100 h-100 cover"
                />
            </figure>
            <div id=""
                className={`gc1s9 gc1s8-m gr1s1 w-100 bg-${bgColour} flex items-center justify-around`}
            >
                <div id=""
                    className=" pv8-00
                    ml6-00-m w-100 h-100"
                >
                    <div id=""
                        className="ph1-00 mb4-00 w-100"
                    >
                        <h2 className="f1-75 f3-00-m mb2-00">
                            {sectionHeading} 
                        </h2>
                        <p className="f1-25 f1-75-m mb4-00">
                            {sectionSubHeading}  
                        </p>
                        
                        <div className="flex justify-between items-center 
                            justify-start-s 
                            w-50-m ttu"
                        >
                            <div className="w10-00 br0-25 pa0-50 bg-white ba tc">
                                <Link to="architect-your-next/digital-operating-model"
                                    className="gray b">
                                    read more...
                                </Link>     
                            </div>
                        </div>
                    </div>
                
                    <div className="ph1-00 dn flex-s justify-start-s justify-start-s"
                    >
                        <div className=" flex flex-column justify-between w10-00 h10-00 mr2-00
                            ba br0-50 white-90 pa0-50"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur accus tatibus.
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00"
                            >
                                <b>view</b>
                            </Link>
                        </div>
                        <div className=" flex flex-column justify-between w10-00 h10-00 mr2-00
                            ba br0-50 white-90 pa0-50"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tenetur accus tatibus.
                                </h5>
                            </hgroup>
                            <Link href=""
                                className="mb0-00"
                            >
                                <b>view</b>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageLeft