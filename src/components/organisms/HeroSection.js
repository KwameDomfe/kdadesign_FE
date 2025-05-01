import React from 'react'
import jpg_1 from '../../images/SC-5-GOOD-1-691x432.jpg'
import jpg_2 from '../../images/LIV-B-691x432.jpg'
import { Link } from 'react-router-dom'
import HeroCardCTA from './HeroCardCTA'
import HeroCardLink from './HeroCardLink'

function HeroSection() {

    return (
        <section id="HeroSection" 
            className="grid gtc12
                mt4-00"
        >   
            <img id="HeroSection__Banner" 
                src={jpg_2}
                alt="" 
                className="gc1s12 gr1s1 w-100 h-100 cover bg-gray" 
            />

            <div id="HeroSection__Overlay" 
                className="grid gc1s12 gr1s1 
                    items-center justify-center
                    bg-black-80"
            >
            </div>

            <div id="HeroSection__Content" 
                className="container container90
                gc1s12 gr1s1
                pt4-00 pb2-00
                pa0-25 
                grid gtc12 ggap1-00 
                f2-00 white-90
                ba b--white-60"
            >
                <hgroup className="gc1s12 gc1s9-s gr1s1 flex flex-column justify-between w-100 mb2-00 ba pa0-25 b--white-40"
                >
                    <h1 className="mt0-00 mb3-00-m f2-50 f4-00-m ba b--white-20">
                        WELCOME TO <br/> GLOBABUILD
                    </h1>
                    <p className="f1-25 f1-50-m mb2-00-m pa0-25 ba b--white-20">
                        We are a design & build company based in Accra,  Ghana.
                    </p>
                    <div className="flex justify-between f1-00 f1-25-m pa0-25 ba b--white-20 ttu">
                        <Link  to="#" 
                            className="dib 
                                pa0-50  
                                white-90
                                bg-blue0
                                ba bw br0-25 
                                ">
                            request for a service
                        </Link>
                        <Link to="projects/" className="dib 
                                pa0-50 
                                ba bw br0-25 b--white-90 
                                white-90
                                ">
                            our projects
                        </Link>
                    </div>
                </hgroup>
                <div className="gc1s12 gc7s6-m 
                    grid gtc12 ggap0-25 ba b--white-40 pa0-25"
                >
                    <div className="gc1s6 gc1s6-l gr1s2-l"
                    >
                        <HeroCardCTA image={jpg_1} 
                            title = 'Our offers'
                            description ='Going Green is the right way. We design and build to satisfy the “Green Codes”. We do it with Mother Earth.'
                            cta = 'download'
                        />
                    </div>
                    <div className="gc7s6 gc7s6-l gr1s2-l"
                    >
                        <HeroCardLink image={jpg_2} 
                            title = 'Our Latest Project'
                            description ='We enjoy designing everything from the simplest smallest units to the complicated multi-structures, by “entering” your mind’s eye to dream and visualize with you, and bring it to life.'
                            link = 'explore'
                        />
                        
                    </div>
                   
                </div>
            </div>

        </section>
    )
}

export default HeroSection
