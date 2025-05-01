import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProjectsCard = (props) => {
    const [showInfo, setShowInfo] = useState(false)
    const {image, alt, title, description} = props
    
    return (
        <figure className="grid gtc2 
            h20-00
            ba br0-25 b--white-20 
            of-hidden"
        >
            <img src={image}
                alt = {alt}
                className="gc1s2 gr1s1
                    h-100
                    cover
                "
            />
            <figcaption className="gc1s2 gr1s1
                flex flex-column
                pa0-25
                ba b--white-40
                bg-black-40
                "
            >
                <header className="pa0-25 flex justify-between items-center ba b--white-20"
                >
                    <h2 className="ttu mv0-00 ba b--white-20 pa0-25 f1-25">{title}
                    </h2> 
                    <span className='dib b f1-00 ba b--white-20 pa0-25 bg-blue0'
                        onClick={() => {setShowInfo(!showInfo)}}
                    >
                        +
                    </span>
                </header>
                {showInfo ? <div className="pa0-25 ba b--white-40 f1-25 h16-00 of-y-scroll mb0-25"
                >
                    <p className="ba bg-black-60 b--white-20 pa0-25 mb0-25">{description}</p>

                    <div className="flex justify-start
                        pa0-25
                        ttu ba b--white-20 f1-00"
                    >
                        <Link className='ba white-90 b--white br0-25 pa0-25'>
                            explore
                        </Link>
                    </div>
                </div> : ''}
            </figcaption>
        </figure>
    )
}

export default ProjectsCard
