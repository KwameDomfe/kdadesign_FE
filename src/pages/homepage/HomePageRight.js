import React from 'react'
import { Link } from 'react-router-dom'
import { homePageRightDefaults } from '../../data/homePageData'

const HomePageRight = (props) => {
    
    const {
        bgImage, 
        // fgImage, 
        sectionHeading, 
        sectionSubHeading, 
        bgColour, 
        fgColour,
        lgcs,
        rgcs, 
        url,
        primaryCtaLabel = homePageRightDefaults.primaryCtaLabel,
        secondaryCtaLabel = homePageRightDefaults.secondaryCtaLabel,
        secondaryCtaTo = homePageRightDefaults.secondaryCtaTo,
        teaserCards = homePageRightDefaults.teaserCards,

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
    
                <div id=""
                    className={`gc1s4 gr1s1
                        h-100
                        bg-gradientLR
                    `
                }
                >
                    <div flex className="flex items-center justify-center h-100">
                        <div className="grid gtc12 ggap-00
                            items-center pv4-00 mv4-00 br0-50
                            container container80
                            bg-white-20
                            shadow-4"
                            >
                            <hgroup id=""
                                className={`${lgcs} gr1s1 flex flex-column w-100 mb4-00 mb0-00-m`}
                            >
                                <h2 className="f2-00 f3-00-m mb2-00">
                                    {sectionHeading} 
                                </h2>
                                <p className="f1-50 f2-50-m mb4-00">
                                    {sectionSubHeading}  
                                </p>
                                
                                <div className="flex justify-start items-center ttu"
                                >
                                    <div className="w6-00 br0-25 pa0-50 mr1-00 bg-white ba tc">
                                        <Link to = {url}
                                            className="gray b"
                                        >
                                            {primaryCtaLabel}
                                        </Link>     
                                    </div>
                                    <div className="w6-00 br0-25 pa0-50 ba tc">
                                        <Link to = {secondaryCtaTo}
                                            className="white-90 b">
                                            {secondaryCtaLabel}
                                        </Link>
                                    </div>
                                </div>
                            </hgroup>
                        
                            <div id="" 
                                className={`
                                    ${rgcs} 
                                    flex flex-column items-end flex-row-s flex-column-m ggap1-00`
                                }
                            >
                                <div className="grid ggap1-00">
                                    {teaserCards.map((card, index) => (
                                        <div className={card.cardClassName} key={`${card.title}-${index}`}>
                                            <hgroup>
                                                <h3 className="mb0-50 f1-00 ">
                                                    {card.title}
                                                </h3>
                                                <h5 className="fw4 mb0-50">
                                                    {card.description}
                                                </h5>
                                            </hgroup>
                                            <div>
                                                <Link to={card.linkTo}
                                                    className="mb0-00 ba ph0-50 pv0-25 white-90"
                                                >
                                                    <b>{card.linkLabel}</b>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        </div>
                    </div>       
                </div>
                
            </div>
        </div>
    )
}

export default HomePageRight