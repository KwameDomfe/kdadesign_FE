import React from 'react'
import { Link } from 'react-router-dom'

const DCC = () => {
    
    return (
        <div className="">
            <header className="">
                <h2>
                    Digital Core Capabilities
                </h2>
            </header>
            <main>
                <section>
                    Overview
                        <p>
                        What will it take for companies with complex legacy landscapes to quickly sense changing marketing trends and continuously evolve in response? Organizations will have to augment their core digital capabilities to leverage deep insights, bridge the gap between physical and digital worlds through platforms, modernize their core systems to accelerate innovation, run the business without worrying about risks and also deliver design-led experiences that delight customers.
                        </p>

                        <p>
                        Drive continuous improvement by transferring digital skills along with ideas from a cross-section of industries and innovation ecosystems.
                        </p>
                </section>

                <section className="bg-black-20 mb2-00 pa1-00">
                    <h3>Experience</h3>
                    <p>
                        Deliver design-led delightful experiences built on a deep empathy for customers. Conquer context, content and channel to make CX your competitive advantage.
                    </p>
                    <Link to = 'experience'
                    >
                        Case Studies
                    </Link>
                </section>    
                <section className="bg-black-20 mb2-00 pa1-00">
                    <h3>Insight</h3>
                    <p>
                        Make your data do more. Act on your next opportunity, next pitfall and next threat before you must. Get to the source of the insights instead of relying on derivatives! Leverage enterprise knowledge and sense micro-feedback to respond in an agile and meaningful way.
                    </p>
                    <Link to = 'insight'
                    >
                        Case Studies
                    </Link>
                </section>
                
                <section className="bg-black-20 mb2-00 pa1-00">
                    <h3>Innovate</h3>
                    <p>
                    Redefine possibilities by bridging the gap between your physical and digital worlds of your business through software and platforms. Drive continuous improvement with ideas from a cross-section of industries and innovation ecosystems.
                    </p>
                    <Link to = 'innovate'
                    >
                        Case Studies
                    </Link>
                </section>
                
                <section className="bg-black-20 mb2-00 pa1-00">
                    <h3>Accelerate</h3>
                    <p>
                    Modernize your core systems to tackle high-frequency decision making at the speed of insights and achieve zero latency. Build a digital infrastructure that enables your enterprise to listen, learn and leverage entrenched knowledge to make better decisions with minimal intervention.
                    </p>
                    <Link to = 'accelerate'
                    >
                        Case Studies
                    </Link>
                </section>
                
                <section className="bg-black-20 mb2-00 pa1-00">
                    <h3>Assure</h3>
                    <p>
                        To be the catalyst for growth by solving complex cybersecurity problems, minimizing risks and building cyber resilience for your businesses across the globe – Digital-trust. Assured.
                    </p>
                    <Link to = 'assure'
                    >
                        Case Studies
                    </Link>
                </section>
            </main>
            <footer>
                Digital Core Capabilities
            </footer>
        </div>
       
    )
}

export default DCC