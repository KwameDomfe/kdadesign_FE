import React from 'react'
import { Link } from 'react-router-dom'

const HomePageRight = (props) => {
    
    const {
        bgImage, 
        fgImage, 
        sectionHeading, 
        sectionSubHeading, 
        bgColour, 
        fgColour,
        flexDirection, 
        url 

    } = props
    
    return (
        <div className={`
                grid gtc12
                bg-${bgColour}
                 
            `}
        >
            <figure className="
                gc1s12 gr1s1"
            >
                <img src={bgImage} 
                    alt=""
                    className="w-100 h-100 cover"
                /> 
            </figure>
            <div id=""
                className={`
                    gc1s12 gr1s1 
                    grid gtc2 items-center justify-around
                                       
                    bg-${fgColour} 
                     
                    `}
            >   
                <img src={fgImage} 
                    alt=""
                    className="gc1s2 gr1s1 h-100 cover"
                /> 
                <div id=""
                    className={`gc1s2 gr1s1
                    flex ${flexDirection} justify-center items-center 
                    ggap2-00
                    h-100
                    pl8-00 pa4-00
                    bg-gradientLR`
                }
                >
                    <hgroup id=""
                        className="gc1s1 gr1s1  mb4-00 w-60 "
                    >
                        <h2 className="f1-75 f3-00-m mb2-00">
                            {sectionHeading} 
                        </h2>
                        <p className="f1-25 f1-75-m mb4-00">
                            {sectionSubHeading}  
                        </p>
                        
                        <div className="flex justify-between justify-start-s items-center       w-50-m ttu"
                        >
                            <div className="w10-00 br0-25 pa0-50 mr2-00 bg-white ba tc">
                                <Link to = {url}
                                    className="gray b"
                                >
                                    explore...
                                </Link>     
                            </div>
                            <div className="w10-00 br0-25 pa0-50 ba tc">
                                <Link to = ""
                                    className="white-90 b">
                                    pricing...
                                </Link>
                            </div>
                        </div>
                    </hgroup>
                
                    <div id="" 
                        className="dn grid gtc4 ggap0-25 flex-wrap justify-center items-center w-40 ph2-00"
                    >
                        <div className="gc1s3 flex flex-column justify-between h10-00 
                            ba br0-25 white-90 pa0-50 bg-black-40"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam a eligendi quod reiciendis suscipit vero voluptatum neque amet veniam.
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00 white-90"
                            >
                                <b>view</b>
                            </Link>
                        </div>
                        <div className="gc4s1 flex flex-column justify-between  h10-00 
                            br0-25 white-90 pa0-50 bg-white-10"
                        >
                            {/* <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00 white-90"
                            >
                                <b>view</b>
                            </Link> */}
                        </div>
                        <div className="gc1s1 flex flex-column justify-between h10-00 
                            br0-25 white-90 pa0-50 bg-white-10"
                        >
                            {/* <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00 white-90"
                            >
                                <b>view</b>
                            </Link> */}
                        </div>
                        <div className="gc2s3 flex flex-column justify-between h10-00
                            ba br0-25 white-90 pa0-50 bg-black-40"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam a eligendi quod reiciendis suscipit vero voluptatum neque amet veniam.
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00 white-90"
                            >
                                <b>view</b>
                            </Link>
                        </div>
                        <div className="gc1s3 flex flex-column justify-between h10-00 
                            ba br0-25 white-90 pa0-50 bg-black-40"
                        >
                            <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid numquam a eligendi quod reiciendis suscipit vero voluptatum neque amet veniam.
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00 white-90"
                            >
                                <b>view</b>
                            </Link>
                        </div>
                        <div className="gc4s1 flex flex-column justify-between h10-00
                             br0-25 white-90 pa0-50 bg-white-10"
                        >
                            {/* <hgroup 
                            >
                                <h3 className="mb0-50 f1-00 ">
                                    doloribus nesciunt
                                </h3>
                                <h5 className="fw4 mb0-50">
                                    
                                </h5>
                            </hgroup>
                            <Link to=""
                                className="mb0-00 white-90"
                            >
                                <b>view</b>
                            </Link> */}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default HomePageRight