import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'
import PlatformOnePreview from './components/PlatformOnePreview'
import PlatformTwoPreview from './components/PlatformTwoPreview'
import PlatformThreePreview from './components/PlatformThreePreview'
import { platformsPageData } from '../../data/platformsPageData'

const Platforms = () => {
    const {
        navLinks,
        overview,
        platformOptions,
        emptyStateMessage,
        footerText,
    } = platformsPageData

    const [selectedPlatform, setSelectedPlatform] = useState('')
    const platformComponents = {
        platformOne: PlatformOnePreview,
        platformTwo: PlatformTwoPreview,
        platformThree: PlatformThreePreview
    }
    
    const SelectedPlatformComponent = platformComponents[selectedPlatform]
    
    return (
      
      <article>
            <div className="flex flex-column justify-between min-vh-90">
                <header className="ba pa1-00 gold sticky top-4 z-5 bg-white">
                    <nav aria-label="Platforms navigation"
                        className="container container80"
                    >
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Platforms</summary>
                                    <nav aria-label="Platforms sections">
                                        <ul className="list pa1-00 ma0">
                                            {navLinks.map((item) => (
                                                <li key={item.to}>
                                                    <Link to={item.to} className="gold">
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </details>
                            </li>
                        </ul>
                    </nav>
                </header>
            
                <main>
                    <article>
                        <section className="vh-100 mv1-00">
                            <img src={second}
                                alt="Platforms Banner"
                                className="w-100 h-100 cover"
                            />
                        </section>
                        <section className="mv1-00 container container80">
                            <h2 className="f3-00">{overview.title}</h2>
                            <div className="flex ggap2-00 mb1-00">
                                <div >
                                    <p className="f1-50 lh-copy">{overview.paragraphOne}</p>
                                </div>
                                <div className="f1-25">
                                    <p>
                                        {overview.paragraphTwo}
                                    </p>
                                    <p>
                                        {overview.paragraphThree}
                                    </p>
                                </div>
                            </div>
                        </section>
                        
                        <section className="vh-50 flex container container80 mv1-00">
                            
                            <article className="flex flex-column ggap1-00 w-25">   
                                {platformOptions.map((platform) => (
                                    <section
                                        key={platform.key}
                                        className="flex items-center justify-center ba pa1-00 h-100 w-100"
                                    >
                                        <p
                                            className="pointer"
                                            onClick={() => setSelectedPlatform(platform.key)}
                                        >
                                            {platform.label}
                                        </p>
                                    </section>
                                ))}
                            </article>
                            <div className="flex justify-center items-center ba pa1-00 w-75"
                            >
                                {SelectedPlatformComponent ? (
                                    <SelectedPlatformComponent />
                                ) : (
                                    <p className="f1-25">{emptyStateMessage}</p>
                                )}
                            </div>
                        </section>
                    </article>
                </main>
                
                <footer className="ba pa1-00 tc gold"
                >
                    {footerText}
                </footer>
            </div>
        </article>
  
  )
}

export default Platforms