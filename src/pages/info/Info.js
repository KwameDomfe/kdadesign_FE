import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'


const Info = () => {
  
    return (
        <article id = ""
            className = ""
        >
            <div className="flex flex-column justify-between min-vh-90"
            >
                <header id = ""
                    className="ba pa1-00 gold container container80 sticky top-4 z-5 bg-white"
                >
                    <nav aria-label="Info navigation">
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Info</summary>
                                    <nav aria-label="Info sections">
                                        <ul className="list pa1-00 ma0">
                                            <li>
                                                <Link to="the-company" className="gold">
                                                    The company
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="the-team" className="gold">
                                                    The Team
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="the-approach" className="gold">
                                                    The Approach
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="the-culture" className="gold">
                                                    The Culture
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="the-stories" className="gold">
                                                    The Stories
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
                    className="0"
                >
                    <article id=""
                        className="container container80    "
                    >
                        <section id=""
                            className="vh-100
                                mv1-00"
                        >
                            <img src={second}
                                alt="Info Banner"
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
                                    <p className="f1-50 lh-copy">In an era defined by rapid technological advancements and shifting market dynamics, the ability to architect your next move is crucial for sustained success. This section provides an overview of the key strategies and insights that can help businesses navigate the complexities of the digital landscape and position themselves for future growth.</p>
                                </div>
                                <div className="f1-25">
                                    <p>
                                        From embracing emerging technologies to fostering a culture of innovation, we explore the essential elements that contribute to successful transformation. Discover how to identify new opportunities, mitigate risks, and create a roadmap for your organization's future in this ever-evolving business environment.
                                    </p>
                                    <p>
                                        Whether you're a seasoned executive or an aspiring leader, this section offers valuable perspectives and actionable insights to help you architect your next move with confidence and agility.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section id="" 
                            className="vh-75
                                mv4-00 ba"
                        >
                            <h1 className="mb1-00 tc f4-00">
                               Video Content
                            </h1>
                           
                        </section>
                        <section id="" 
                            className=" bg-white-80
                                mv1-00"
                        >
                            <h1 className="mb1-00 f4-00">
                                KDA Design Technologies Research
                            </h1>
                              <article id="info__contents"
                                className="grid gtc12 ggap1-00 ba pa1-00 "
                            >   
                                <section id=""
                                    className="gc1s4 vh-30
                                        ba pa1-00  h-100 w-100"
                                >
                                    <img src={second} alt="Report 1"
                                    />
                                    <p>Digital Core Capabilities </p>
                                    {/* <p> 
                                        Explore the essential capabilities for thriving in the digital era, including data analytics, cloud computing, and cybersecurity.
                                    </p> */}
                                    <Link to="/info/the-team/">
                                        Learn More
                                    </Link>
                                </section>
                                <section id=""
                                    className="gc1s4 gr2s1 vh-30
                                        ba pa1-00  h-100 w-100"
                                >
                                    <img src={second} alt="Report 2"
                                    />
                                    <p>Digital Operating Model</p>
                                    <Link to="/architect-your-next/digital-operating-model/">
                                        Learn More
                                    </Link>
                                </section>
                                <section id=""
                                    className="gc5s4 gr1s2
                                        ba pa1-00  h-100 w-100"
                                >
                                    <img src={second} 
                                        alt="Report 3"
                                        className="h-100 cover"
                                    />
                                    <p>Tales of Transformation</p>
                                    <Link to="/architect-your-next/tales-of-transformation/">
                                        Learn More
                                    </Link>
                                </section>
                                <section id=""
                                    className="gc9s4 gr1s1vh-30
                                        ba pa1-00  h-100 w-100"
                                >
                                    <img src={second} alt="Report 4"
                                    />
                                    <p>Empowering Talent Transformation</p>
                                    <Link to="/architect-your-next/empowering-talent-transformation/">
                                        Learn More
                                    </Link>
                                </section>
                                <section id=""
                                    className="gc9s4 gr2s1vh-30
                                        ba pa1-00  h-100 w-100"
                                >
                                    <img src={second} alt="Report 5"
                                    />
                                    <p>Architecting New Possibilities</p>
                                    <Link to="/architect-your-next/architecting-new-possibilities/">
                                        Learn More
                                    </Link>
                                </section>
                            </article> 
                        </section>
                        <section id="" 
                            className="
                                mv1-00"
                        >
                            <h1 className="mb1-00 f4-00">
                                KDA Design Technologies Research
                            </h1>
                           
                            <p className="mb2-00 f2-00">
                                Exclusive report on the impact of digital disruption across industries.
                            </p>
                            <article id=""
                                className="grid gtc12 ggap1-00 ba pa1-00 "
                            >   
                                    <section id=""
                                        className="gc1s6 vh-30
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 1"
                                        />
                                        <p>Report 1</p>
                                    </section>
                                    <section id=""
                                        className="gc7s3 vh-30
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 2"
                                        />
                                        <p>Report 2</p>
                                    </section>
                                    <section id=""
                                        className="gc10s3 gr1s1
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 3"
                                        />
                                        <p>Report 3</p>
                                    </section>
                                    <section id=""
                                        className="gc1s3
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 4"
                                        />
                                        <p>Report 4</p>
                                    </section>
                                    <section id=""
                                        className="gc4s3 vh-30
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 5"
                                        />
                                        <p>Report 5</p>
                                    </section>
                                    <section id=""
                                        className="gc7s3 vh-30
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 6"
                                        />
                                        <p>Report 6</p>
                                    </section>
                                    <section id=""
                                        className="gc10s3 vh-30
                                            ba pa1-00  w-100"
                                    >
                                        <img src={second} alt="Report 7"
                                        />
                                        <p>Report 7</p>
                                    </section>
                            </article>
                            <footer className="mv1-00 f2-00 ">
                                KDA Design Technologies Research & Development
                            </footer>
                        </section>
                        <section id="" 
                            className="vh-75
                                mv1-00"
                        >
                            
                            <h1 className="mb1-00 f4-00">
                                Thought Leadership
                            </h1>
                            <p className="mb2-00 f2-00">
                                Our leaders share insights on Live Enterprise.
                            </p>
                            <article id=""
                                className=" flex ggap1-00"
                            >   
                                    <section id=""
                                        className="vh-50
                                            ba pa1-00 h-100 w-100"
                                    >
                                        <p>Article 1</p>

                                        <p>Image Placeholder</p>

                                        <p>a link to the article</p>
                                    </section>
                                    <section id=""
                                        className="vh-50
                                            ba pa1-00 h-100 w-100"
                                    >
                                        <p>Article 2</p>
                                        <p>Image Placeholder</p>
                                        <p>a link to the article</p>
                                    </section>
                                    <section id=""
                                        className="vh-50
                                            ba pa1-00 h-100 w-100"
                                    >
                                        <p>Article 3</p>
                                    </section>  
                                    <section id=""
                                        className="vh-50
                                            ba pa1-00 h-100 w-100" 
                                    >
                                        <p>Article 4</p>
                                    </section>
                            </article>
                            <div className="tc mt1-00">
                                <Link to = "thought-leadership"
                                    className="tc"
                                >
                                    Read More
                                </Link>
                            </div>
                        </section>
                    </article>
                </main>
                
                <footer className="ba pa1-00 tc"
                >
                    Info Footer
                </footer>
            </div>
        </article>
    )
}

export default Info