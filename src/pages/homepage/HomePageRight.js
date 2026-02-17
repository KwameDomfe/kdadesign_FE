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
        lgcs,
        rgcs, 
        url 

    } = props
    
    return (
        <div className={`
                grid gtc12
                bg-${bgColour}
                vh-100
                w-100
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
                    grid gtc4 items-center justify-around
                                       
                    bg-${fgColour} 
                     
                    `}
            >   
                <img src={fgImage} 
                    alt=""
                    className="gc1s4 gr1s1 h-100 cover"
                /> 
                <div id=""
                    className={`gc1s4 gr1s1
                        h-100
                        
                        bg-gradientLR

                    
                    `
                }
                >
                    <div className="grid gtc12 ggap2-00
                        h-100 items-center pv4-00
                        container container80"
                        >
                        <hgroup id=""
                            className={`${lgcs} gr1s1 flex flex-column w-100`}
                        >
                            <h2 className="f2-00 f3-00-m mb2-00">
                                {sectionHeading} 
                            </h2>
                            <p className="f1-50 f2-50-m mb4-00">
                                {sectionSubHeading}  
                            </p>
                            
                            <div className="flex justify-start items-center ttu"
                            >
                                <div className="w6-00 br0-25 pa0-50 mr1-00 bg-white ba tc"
                                >
                                    <Link to = {url}
                                        className="gray b"
                                    >
                                        explore...
                                    </Link>     
                                </div>
                                <div className="w6-00 br0-25 pa0-50 ba tc">
                                    <Link to = ""
                                        className="white-90 b">
                                        pricing...
                                    </Link>
                                </div>
                            </div>
                        </hgroup>
                    
                        <div id="" 
                            className={`
                                ${rgcs} 
                                flex flex-column flex-row-s flex-column-m ggap1-00`
                            }
                        >
                            <div className="flex flex-column justify-between h10-00 w14-00-l
                                ba br0-25 white-90 pa1-00 bg-black-40"
                            >
                                <hgroup 
                                >
                                    <h3 className="mb0-50 f1-00 ">
                                        doloribus nesciunt amet consect
                                    </h3>
                                    <h5 className="fw4 mb0-50">
                                        Lorem ipsum dolor sit amet consect, adipisicing elit. quid neque amet veniam.
                                    </h5>
                                </hgroup>
                                <div>
                                    <Link to=""
                                        className="mb0-00 ba ph1-00 pv0-25 white-90"
                                    >
                                        <b>read more...</b>
                                    </Link>
                                </div>
                            </div>
                        
                            <div className="flex flex-column justify-between h10-00 w14-00-l
                                ba br0-25 white-90 pa1-00 bg-white-10"
                            >
                                <hgroup 
                                >
                                    <h3 className="mb0-50 f1-00 ">
                                        doloribus nesciunt amet consect
                                    </h3>
                                    <h5 className="fw4 mb0-50">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. veniam.
                                    </h5>
                                </hgroup>
                                <div>
                                    <Link to=""
                                        className="mb0-00 ba ph1-00 pv0-25 white-90"
                                    >
                                        <b>read more...</b>
                                    </Link>
                                </div>
                            </div>
                            
                            {/* <div className="gc1s2 flex flex-column justify-between h14-00
                                ba br0-25 white-90 pa1-00 bg-black-40"
                            >
                                <hgroup 
                                >
                                    <h3 className="mb0-50 f1-00 ">
                                        doloribus nesciunt amet consect
                                    </h3>
                                    <h5 className="fw4 mb0-50">
                                    Aliquid numquam eligendi quod reiciendis suscipit vero voluptatum neque amet veniam.
                                    </h5>
                                </hgroup>
                                <div>
                                    <Link to=""
                                        className="mb0-00 ba ph1-00 pv0-25 white-90"
                                    >
                                        <b>read more...</b>
                                    </Link>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default HomePageRight