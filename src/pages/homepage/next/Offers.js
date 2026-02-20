import React from 'react'
import './Offers.css'

const Offers = ({ openOfferDialog }) => {
    
    return (
        <section id="homePage_our_offers"
            className="grid gtc12 pv4-00 container container80 white-90"
        >
            <div className="gc1s12 gr1s1 gc1s6-s gc1s3-m gr1s1-m"
            >
                <figure className="flex flex-column items-center justify-center 
                    pa2-00"
                >
                    <figcaption className=" 
                        gray"
                    >
                        <h3 className="fw6 tc mb1-00"
                        >
                            Our Platforms
                        </h3>
                    </figcaption>
                    
                    <div className="flex items-center justify-center 
                        w2-00 h2-00 black-90
                        
                        f2-00 
                        ba br-50 "
                    >
                        <button
                            type="button"
                            aria-label="Open Our Platforms details"
                            onClick={() => openOfferDialog('platforms')}
                            className="w-100 h-100 
                                f2-00 
                                bg-transparent  
                                bn 
                                pointer
                                offers-plus-button"
                        >
                            <span className="offers-plus-symbol" aria-hidden="true"></span>
                        </button>
                    </div>
                </figure>
            </div>

            <div className="gc1s12 gr2s1 gc7s6-s gr1s1-s gc4s3-m gr1s1-m"
            >
                <figure className="flex flex-column items-center justify-center
                    pa2-00"
                >
                    <figcaption className=" 
                        gray"
                    >
                        <h3 className="fw6 tc mb1-00">
                                Service Offerings
                        </h3>
                    </figcaption>
                    <div className="flex items-center justify-center 
                        w2-00 h2-00 black-90
                        f2-00 
                        ba br-50 "
                    >
                        <button
                            type="button"
                            aria-label="Open Service Offerings details"
                            onClick={() => openOfferDialog('services')}
                            className="w-100 h-100 f2-00 bg-transparent bn pointer offers-plus-button"
                        >
                            <span className="offers-plus-symbol" aria-hidden="true"></span>
                        </button>
                    </div>
                </figure>
            </div>

            <div className="gc1s12 gr3s1 gc1s6-s gr2s1-s gc7s3-m gr1s1-m"
            >
                <figure className="flex flex-column items-center justify-center 
                    pa2-00"
                >
                    <figcaption className="gray"
                    >
                        <h3 className="fw6 tc mb1-00">
                            Explore Industries
                        </h3>
                    </figcaption>
                    <div className="flex items-center justify-center 
                        w2-00 h2-00 black-90
                        f2-00 
                        ba br-50 "
                    >
                        <button
                            type="button"
                            aria-label="Open Explore Industries details"
                            onClick={() => openOfferDialog('industries')}
                            className="w-100 h-100 f2-00 bg-transparent bn pointer offers-plus-button"
                        >
                            <span className="offers-plus-symbol" aria-hidden="true"></span>
                        </button>
                    </div>
                </figure>
            </div>
            
            <div className="gc1s12 gr4s1 gc7s6-s gr2s1-s gc10s3-m gr1s1-m"
            >
                <figure className="flex flex-column pa0-00 pa2-00 items-center justify-center">
                    
                    <figcaption className=" 
                        gray"
                    >
                        <h3 className="fw6 tc mb1-00">
                            Architect your next
                        </h3>
                    </figcaption>
                    <div className="flex items-center justify-center 
                        w2-00 h2-00 black-90
                         
                        f2-00 
                        ba br-50 "
                    >
                        <button
                            type="button"
                            aria-label="Open Architect Your Next details"
                            onClick={() => openOfferDialog('architectYourNext')}
                            className="w-100 h-100 f2-00 bg-transparent bn pointer offers-plus-button"
                        >
                            <span className="offers-plus-symbol" aria-hidden="true"></span>
                        </button>
                    </div>
                </figure>
            </div>

        </section>
    )

}

export default Offers