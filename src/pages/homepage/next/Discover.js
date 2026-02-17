import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../../images/projects/_partials/accra-ghana-colorful-vector-artmap.jpg'
const Discover = () => {
    
    return (
        <section
            className="grid gtc12 mb4-00 white-90 "
        >
            <img src={second} 
                alt="Digital transformation featured background"
                className="gc1s12 gr1s1 cover"
            />
            <div className="gc1s12 gr1s1 bg-black-40 pv4-00 h-100"
            >
                <figure className="grid h-100 white-90"
                >
                    <figcaption className="container container80
                        gc1s1 gr1s1"
                    >
                        <h3 className="mb2-00
                            fw6 f2-00 f2-50-s f3-00-m f5-00-l mb4-00"
                        >
                            Discover how our teams design resilient, scalable digital transformation programs.
                        </h3>
                        <div className="w10-00 br0-25 pa0-50 mr2-00 bg-white ba ttu tc">
                            <Link to="architect-your-next" 
                                className="gray b"
                            >
                                view
                            </Link>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    ) 
    
}

export default Discover