import React from 'react'
import { Link } from 'react-router-dom'

const HeroCardLink = (props) => {
    
    const {image, title, link} = props
    
    return (
        <figure className="grid gtc2 
            ba br0-25 b--white-20 h-100
            of-hidden"
        >
            <img src={image}
                alt = {title}
                className="gc1s2 gr1s1
                    h-100
                    cover"
            />
            <figcaption className="gc1s2 gr1s1
                f1-00 flex flex-column justify-end 
                bg-black-10 tj pa0-25 b--white-40"
            >
                <div className="pa0-25 ba b--white-20 mb0-25"
                >
                    <h2 className="ttu f1-00 ba b--white-20 mb0-00 pa0-25">{title}</h2>
                </div>
                <div className="flex justify-start
                    pa0-25
                    bg-black-60 ttu ba b--white-20 m"
                >
                    <Link className='ba white-90 b--white br0-25 pa0-25'>
                        {link}
                    </Link>
                </div>
            </figcaption>
        </figure>
    )
}

export default HeroCardLink
