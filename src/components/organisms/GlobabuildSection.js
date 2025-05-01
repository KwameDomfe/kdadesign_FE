import React from 'react'
import jpg_1 from '../../images/SC-5-GOOD-1-691x432.jpg'
import jpg_2 from '../../images/LIV-B-691x432.jpg'
import jpg_3 from '../../images/OFB-3D-720x404.jpg'
import jpg_4 from '../../images/TEMA-CLINIC-DESIGN-3D1-720x404.jpg'

import GlobabuildCard from './GlobabuildCard'
function GlobabuildSection() {

    return (
        <section id="HeroSection" 
            className="grid gtc12
               mt4-00 min-vh-90"
        >   
            {/* <img id="HeroSection__Banner" 
                src={jpg_2}
                alt="" 
                className="gc1s12 gr1s1 w-100 h-100 cover bg-gray" 
            /> */}

            <div id="HeroSection__Overlay" 
                className="grid gc1s12 gr1s1 
                    items-center justify-center
                    h-100"
            >
            </div>

            <div id="HeroSection__Content" 
                className="container container90
                gc1s12 gr1s1
                pa0-25 h-100
                grid gtc12 ggap1-00 
                f2-00 blue0
                ba "
            >
                <div className="gc1s12 gr1s1 flex flex-column items-center justify-cente ba b--white-20 pa0-25"
                >
                    <h1 className="mv0-00 f2-25 f4-00-m ba b--white-20 ttu"
                    >
                        at our core ...
                    </h1>
                    <p className="mv0-00 f1-00 f1-50-m ba b--white-20 "
                    >
                        GLOBABUILD is a family..
                    </p>
                </div>
                <div className="gc1s12 gr2s6
                    grid gtc12 ba b--white-60 pa0-25"
                >
                    <div className="gc1s6 gc7s6-m gr2s1 gc7s3-l gr1s1-l "
                    >
                        <GlobabuildCard image={jpg_1} 
                            alt = 'Governance'
                            title = 'Governance'
                            description ='We enjoy designing everything from the simplest smallest units to the complicated multi-structures, by “entering” your mind’s eye to dream and visualize with you, and bring it to life.'
                        />
                    </div>
                    <div className="gc1s12 gc1s6-m gr1s2-m gc1s6-l gr1s2-l "
                    >
                        <GlobabuildCard image={jpg_1} 
                            alt = 'Technical Team'
                            title = 'Technical Team'
                            description ='We enjoy designing everything from the simplest smallest units to the complicated multi-structures, by “entering” your mind’s eye to dream and visualize with you, and bring it to life.'
                        />
                    </div>

                    <div className="gc7s6 gc10s3-l gr1s1-l"
                    >
                        <GlobabuildCard image={jpg_2} 
                            alt = 'Management'
                            title = 'Management'
                            description ='Going Green is the right way. We design and build to satisfy the “Green Codes”. We do it with Mother Earth.'
                        />
                    </div>

                    <div className="gc1s6 gr3s1 gc1s6-m gc10s3-l gr2s1-l"
                    >
                        <GlobabuildCard image={jpg_3} 
                            alt = 'Careers'
                            title = 'Careers'
                            description ='We capture your emotions and desires and interpret them with spaces, shapes, colours and textures to create your special haven.'
                        />
                    </div>

                    <div className="gc7s6 gc7s3-l gr2s1-l "
                    >
                        <GlobabuildCard image={jpg_4}
                            alt = 'Alliances'
                            title = 'Alliances'
                            description ='To make your dream a reality, we build what your mind perceived. It will never remain a dream. Size does not limit us.'
                        />
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default GlobabuildSection
