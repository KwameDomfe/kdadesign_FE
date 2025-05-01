import React from 'react'

const GlobabuildCard = (props) => {
    
    const {image, alt, title, description} = props
    
    return (
        <div className="grid gtc2 
            ba br0-25 b--white-20 h16-00 h-100-m
            of-hidden"
        >
            {/* <img src={image}
                className="gc1s2 gr1s1
                    h-100
                    cover
                "
                alt = {alt}
            /> */}
            <div className="gc1s2 gr1s1
                f1-00 flex flex-column justify-between
                bg-black-40 white-90 pa0-25 b--white-60
                "
            >
                <div className="pa0-25 ba b--white-40 h-100 mb0-25"
                >
                    <h2 className="ttu f1-00 b--white-20 ba pa0-25 mb0-25">{title}</h2>
                    <p className='ba pa0-25 b--white-20 mb0-00'>{description}</p>
                </div>
                <div className="flex justify-between 
                    pa0-25
                    bg-black-60 ttu ba b--white-40"
                >
                    <div className=" ba b--white-20 pa0-25">
                        LINK(s)
                    </div>
                    <div className="ba b--white-20 pa0-25">
                        CTA(s)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobabuildCard
