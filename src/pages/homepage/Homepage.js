import { useEffect } from 'react'
import HomePageNav from './HomePageNav'
import HomePageAYN from './HomePageAYN'
// import HomePageLeft from './HomePageLeft'
import HomePageRight from './HomePageRight'
import HomePageNext from './HomePageNext'
import HomePageAboutUs from './HomePageAboutUs'
import HomepageContactUs from './HomepageContactUs'

import second from '../../images/placeholders/landscape_Images/featured_grid.jpg'
import third from '../../images/placeholders//landscape_Images/landscape_01.png'
import fourth from '../../images/placeholders/landscape_Images/landscape-02.png'


const Homepage = () => {
    
    useEffect(() => {
        window.scroll(0,0);
    }, []);

    return (
        <div id="homePage"
            className="relative grid gtc12"
        >
           {/* Page Navigation Start */}
            <aside id ="homePage__Header"
                className="gc1s1 
                    dn flex-m items-center justify-center 
                    vh-100 fixed" 
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

                {/* <!-- Digital Core Capabilities Start --> */}
                {/* <section id="homePage_digital_core_capablities"
                    className="gc1s12
                        pa4-0 ma2-0
                        bb bw3
                        bg-black-50" 
                >
                    <HomePageRight 
                        bgColour = 'blue1'
                        bgImage = {second}
                        fgImage = {second}
                        flexDirection = 'column'
                        fgColour = 'gradientLR'
                        sectionHeading = 'Digital Core Capabilities'
                        sectionSubHeading = 'Build vital capabilities to deliver digital outcomes.'
                        url = 'architect-your-next/digital-core-capabilities'
                    />
                </section> */}
                {/* <!-- Digital Core Capabilities End --> */}

                {/* <!-- Digital Operating Models Start --> */}
                {/* <section id="homePage_operating-model"
                    className="gc1s12 bb bw3" 
                >
                    <HomePageRight 
                        bgColour = 'blue1'
                        bgImage = {third}
                        fgImage = {third}
                        fgColour = 'gradientRL'
                        flexDirection = 'flex-row-reverse'
                        sectionHeading = 'Digital Operating Model'
                        sectionSubHeading = 'Adopt accelerators to evolve your way of working.'
                        url = 'architect-your-next/digital-operating-model'
                    />
                </section> */}
                {/* <!-- Digital Operating Models End --> */}

                {/* <!-- Empower Talent Transformations Start --> */}
                {/* <section id="homePage_talent_transformation"
                    className="gc1s12 bb bw3" 
                >
                    <HomePageRight 
                        bgColour = 'blue1'
                        bgImage = {fourth}
                        fgImage = {fourth}
                        fgColour = 'gradientRL'
                        sectionHeading = 'Empowering Talent Transformation'
                        sectionSubHeading = 'Embrace the talent revolution to remain relevant in the future.'
                        url = 'architect-your-next/empowering-talent-transformation'
                    />

                </section> */}
                {/* <!-- Empower Talent Transformations End --> */}
                
                {/* <section id="homePage_the_next" 
                    className="gc1s12 min-vh-100 
                      gray"  
                >   
                    <HomePageNext />
                </section> */}
                
                {/* <section id="homePage_About_Us" 
                    className="gc1s12 flex items-center justify-center
                        bg-gray "
                >
                    <HomePageAboutUs />
                </section> */}
                
                {/* <section id="homePage_Contact_Us" 
                    className="gc1s12 container container90 bg-white gray pv4-00 tc"
                >
                    <HomepageContactUs />
                </section> 
                 */}
            </main>
            {/* <!-- Page Main End --> */}

            {/* <!-- Page Footer Start --> */}
            {/* <footer id = "homePage__footer"
                className="bg-gray gc1s12 tc"
            >
                Home Page Footer
            </footer> */}
            {/* <!-- Page Footer End --> */}
        </div>
    )
}

export default Homepage