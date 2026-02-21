import { useEffect } from 'react'
import HomePageNav from './HomePageNav'
import HomePageAYN from './HomePageAYN'
import HomePageRight from './HomePageRight'
import HomePageNext from './HomePageNext'
import HomePageAboutUs from './HomePageAboutUs'
import HomepageContactUs from './HomepageContactUs'
import { homePageRightSections } from '../../data/homePageData'

import second from '../../images/placeholders/landscape_Images/featured_grid.jpg'
import third from '../../images/placeholders//landscape_Images/landscape_01.png'
import fourth from '../../images/placeholders/landscape_Images/landscape-02.png'


const Homepage = () => {
    const sectionImages = {
        second,
        third,
        fourth,
    }
    
    useEffect(() => {
        window.scroll(0,0);
    }, []);

    return (
        <div id="homePage"
            className="relative grid gtc12 w-100 h-100"
        >
           {/* Page Navigation Start */}
            <aside id ="homePage__Header"
                className="gc2s10
                    dn flex-m items-center justify-cente
                    vh-100 fixed z-5" 
            >
                <HomePageNav />
            </aside>
            {/* Page Navigation End */}

            {/* Page Main Start */}
            <main id=""
                className="white-90 gc1s12 grid gtc12 gradientRL"
            >
                {/* Architect Your Next Start */}
                <section id="homePage_architect_your_next"
                    className="bb bw3 gc1s12" 
                >
                    <HomePageAYN />
                </section>
                {/* <!-- Architect Your Next End --> */}

                {homePageRightSections.map((section) => (
                    <section key={section.id} id={section.id} className={section.sectionClassName}>
                        <HomePageRight
                            bgColour={section.bgColour}
                            bgImage={sectionImages[section.bgImageKey]}
                            fgImage={sectionImages[section.fgImageKey]}
                            lgcs={section.lgcs}
                            rgcs={section.rgcs}
                            flexDirection={section.flexDirection}
                            sectionHeading={section.sectionHeading}
                            sectionSubHeading={section.sectionSubHeading}
                            url={section.url}
                        />
                    </section>
                ))}
                
                <section id="homePage_the_next" 
                    className="gc1s12 min-vh-100 
                      gray"  
                >   
                    <HomePageNext />
                </section>
                
                <section id="homePage_About_Us" 
                    className="gc1s12 flex items-center justify-center
                        bg-gray "
                >
                    <HomePageAboutUs />
                </section>
                
                <section id="homePage_Contact_Us" 
                    className="gc1s12 container container80 bg-white gray pv4-00 tc"
                >
                    <HomepageContactUs />
                </section>
            </main>
            {/* <!-- Page Main End --> */}

            {/* <!-- Page Footer Start --> */}
            <footer id = "homePage__footer"
                className="bg-gray gc1s12 pv1-00 tr "
            >
                <div className="white-90 container container80">
                    Home Page
                </div>
            </footer>
            {/* <!-- Page Footer End --> */}
        </div>
    )
}

export default Homepage
