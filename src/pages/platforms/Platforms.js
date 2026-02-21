import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'
import PlatformOnePreview from './components/PlatformOnePreview'
import PlatformTwoPreview from './components/PlatformTwoPreview'
import PlatformThreePreview from './components/PlatformThreePreview'

const Platforms = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('')
    const platformComponents = {
        platformOne: PlatformOnePreview,
        platformTwo: PlatformTwoPreview,
        platformThree: PlatformThreePreview
    }
    const SelectedPlatformComponent = platformComponents[selectedPlatform]
    
    return (
      
      <article id = ""
            className = ""
        >
            <div className="flex flex-column justify-between min-vh-90"
            >
                <header id = ""
                    className="ba pa1-00 gold sticky top-4 z-5 bg-white"
                >
                    <nav aria-label="Platforms navigation"
                        className="container container80"
                    >
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Platforms</summary>
                                    <nav aria-label="Platforms sections">
                                        <ul className="list pa1-00 ma0">
                                            <li>
                                                <Link to="architecting-new-possibilities" className="gold">
                                                    Architecting New Possibilities
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="digital-core-capabilities" className="gold">
                                                    Digital Core Capabilities
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="digital-operating-model" className="gold">
                                                    Digital Operating Model
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="empowering-talent-transformation" className="gold">
                                                    Empowering Talent Transformation
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="tales-of-transformation" className="gold">
                                                    Tales of Transformation
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </details>
                            </li>
                        </ul>
                    </nav>
                </header>
            
                <main id = "" 
                    className=""
                >
                    <article id=""
                        className="    "
                    >
                        <section id=""
                            className="vh-100
                                mv1-00"
                        >
                            <img src={second}
                                alt="Platforms Banner"
                                className="w-100 h-100 cover"
                            />
                        </section>
                        <section id=""
                            className="
                                mv1-00 container container80"
                        >
                            <h2 className="f3-00">Overview</h2>  
                            <div className="flex ggap2-00 mb1-00">
                                <div >
                                    <p className="f1-50 lh-copy">In an era defined by rapid technological advancements and shifting market dynamics, the ability to Platforms move is crucial for sustained success. This section provides an overview of the key strategies and insights that can help businesses navigate the complexities of the digital landscape and position themselves for future growth.</p>
                                </div>
                                <div className="f1-25">
                                    <p>
                                        From embracing emerging technologies to fostering a culture of innovation, we explore the essential elements that contribute to successful transformation. Discover how to identify new opportunities, mitigate risks, and create a roadmap for your organization's future in this ever-evolving business environment.
                                    </p>
                                    <p>
                                        Whether you're a seasoned executive or an aspiring leader, this section offers valuable perspectives and actionable insights to help you Platforms move with confidence and agility.
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section id="" 
                            className="vh-50 flex container container80
                                mv1-00"
                        >
                            
                            <article id=""
                                className=" flex flex-column ggap1-00 w-25"
                            >   
                                    <section id=""
                                        className="flex items-center justify-center
                                            ba pa1-00 h-100 w-100"
                                    >
                                        <p
                                            className="pointer"
                                            onClick={() => setSelectedPlatform('platformOne')}
                                        >
                                            Platform Logo Placeholder
                                        </p>
                                    </section>
                                    <section id=""
                                        className="flex items-center justify-center
                                            ba pa1-00 h-100 w-100"
                                    >
                                        <p
                                            className="pointer"
                                            onClick={() => setSelectedPlatform('platformTwo')}
                                        >
                                            Platform Logo Placeholder
                                        </p>
                                    </section>
                                    <section id=""
                                        className="flex items-center justify-center
                                            ba pa1-00 h-100 w-100"
                                    >
                                        <p
                                            className="pointer"
                                            onClick={() => setSelectedPlatform('platformThree')}
                                        >
                                            Platform Logo Placeholder
                                        </p>
                                    </section>  
                            </article>
                            <div className="flex justify-center items-center ba pa1-00 w-75"
                            >
                                {SelectedPlatformComponent ? (
                                    <SelectedPlatformComponent />
                                ) : (
                                    <p className="f1-25">Click on a Platform Logo Placeholder to open component.</p>
                                )}
                            </div>
                        </section>
                    </article>
                </main>
                
                <footer className="ba pa1-00 tc gold"
                >
                    Platforms Footer
                </footer>
            </div>
        </article>
  
  )
}

export default Platforms