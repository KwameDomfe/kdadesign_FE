import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'

const pageSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'offerings', label: 'Our Offerings' },
    { id: 'insights', label: 'Insights' },
    { id: 'whats-new', label: "What's New" },
    { id: 'success-stories', label: 'Success Stories' },
]

const industryOfferings = [
    { name: 'Education', to: '/industries/education' },
    { name: 'Architecture, Engineering & Construction', to: '/industries/aec' },
    { name: 'Civic, Religious and Cultural' },
    { name: 'Commerce' },
    { name: 'Healthcare' },
    { name: 'Manufacturing' },
    { name: 'Financial Services' },
    { name: 'Technology' },
    { name: 'Energy' },
]

const insights = [
    { type: 'Feature', to: '/architect-your-next/digital-core-capabilities/' },
    { type: 'Publication', to: '/architect-your-next/digital-operating-model/' },
    { type: 'Blog', to: '/architect-your-next/tales-of-transformation/' },
    { type: 'White Paper', to: '/architect-your-next/empowering-talent-transformation/' },
    { type: 'Technical Report', to: '/architect-your-next/architecting-new-possibilities/' },
]

const whatsNewItems = [
    'Technology trends and outlook',
    'Industry thought leadership highlights',
    'Customer stories and delivery updates',
    'Events, announcements and releases',
]

const successStories = [
    'Enterprise digital transformation',
    'Operational excellence in delivery',
    'Customer experience modernization',
    'Scalable platform enablement',
]

const Industries = () => {
    return (
        <article>
            <div className="flex flex-column justify-between min-vh-90">
                <header className="ba pa1-00 gold  sticky top-4 z-5 bg-white">
                    <nav aria-label="Industries navigation"
                        className="flex items-center justify-between container container80"
                    >
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">
                                        Industries
                                    </summary>
                                    <nav aria-label="Industries sections">
                                        <ul className="list pa1-00 ma0">
                                            {pageSections.map((section) => (
                                                <li key={section.id}>
                                                    <a href={`#${section.id}`} className="gold">
                                                        {section.label}
                                                    </a>
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
                    <article className="">
                        <section className="vh-100 mv1-00">
                            <img src={second}
                                alt="Industries Banner"
                                className="w-100 h-100 cover"
                            />
                        </section>
                        <section id="overview" className="mv1-00 container container80">
                            <h2 className="f3-00">Overview</h2>  
                            <div className="flex flex-column flex-row-m ggap2-00 mb1-00">
                                <div>
                                    <p className="f1-50 lh-copy">In an era defined by rapid technological advancements and shifting market dynamics, the ability to move quickly is crucial for sustained success. This section provides an overview of key strategies and insights to help businesses navigate digital complexity and position themselves for future growth.</p>
                                </div>
                                <div className="f1-25">
                                    <p>
                                        From embracing emerging technologies to fostering a culture of innovation, we explore the essential elements that contribute to successful transformation. Discover how to identify new opportunities, mitigate risks, and create a roadmap for your organization's future in this ever-evolving business environment.
                                    </p>
                                    <p>
                                        Whether you're a seasoned executive or an aspiring leader, this section offers valuable perspectives and actionable insights to help you move with confidence and agility.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section id="offerings" className="vh-75 mv4-00 ba container container80">
                            <h1 className="mb1-00 tc f4-00">
                               Our Offerings
                            </h1>
                            <p className="mb1-00 tc f2-00">
                                Our solutions across industries foster innovation helping enterprises adapt to new realities of business and technology.
                            </p>
                            
                            <div>
                                <div>
                                    <h2>
                                        Industries
                                    </h2>
                                </div>
                                <div className="w-100">
                                    <ul className="pl3-00">
                                        {industryOfferings.map((industry) => (
                                            <li className="mb1-00" key={industry.name}>
                                                {industry.to ? (
                                                    <Link to={industry.to}>{industry.name}</Link>
                                                ) : (
                                                    <span>{industry.name} (coming soon)</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section id="insights" className="bg-white-80 mv1-00 container container80">
                            <h1 className="mb1-00 f4-00">
                                Insights
                            </h1>
                           
                            <p className="mb2-00 f2-00">
                                Views and opinions of our thought leaders to shape business plans and customer experience 
                            </p>
                            <article
                                id="architect_your_next__contents"
                                className="grid ggap1-00 ba pa1-00"
                                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))' }}
                            >
                                {insights.map((item, index) => (
                                    <section
                                        key={item.type}
                                        className="ba pa1-00 h-100 w-100"
                                    >
                                        <img src={second}
                                            alt={`Insight ${index + 1}`}
                                            loading="lazy"
                                        />
                                        <p>{item.type}</p>
                                        <Link to={item.to}>
                                            Learn More
                                        </Link>
                                    </section>
                                ))}
                            </article> 
                        </section>
                        <section id="whats-new" className="mv1-00 container container80">
                            <h1 className="mb1-00 f4-00">
                                What's New in Industries
                            </h1>
                           
                            <p className="mb2-00 f2-00">
                                The latest in technology, thought leadership and customer stories
                            </p>
                            <article
                                className="grid ggap1-00"
                                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))' }}
                            >
                                {whatsNewItems.map((item, index) => (
                                    <section key={item} className="vh-50 ba pa1-00 h-100 w-100">
                                        <p>{`Article ${index + 1}`}</p>
                                        <p>{item}</p>
                                        <p>Content update coming soon</p>
                                    </section>
                                ))}
                            </article>
                            <footer className="mv1-00 f2-00 gold">
                                KDA Design Technologies Research & Development
                            </footer>
                        </section>
                        <section id="success-stories" className="mv1-00 container container80">
                            <h1 className="mb1-00 f4-00">
                                Success Stories
                            </h1>
                            <p className="mb2-00 f2-00">
                                Find out how we are enabling global enterprises to navigate their next by adapting to changing technology, business and customer landscape.
                            </p>
                            <article
                                className="grid ggap1-00"
                                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))' }}
                            >
                                {successStories.map((story, index) => (
                                    <section key={story} className="vh-50 ba pa1-00 h-100 w-100">
                                        <p>{`Story ${index + 1}`}</p>
                                        <p>{story}</p>
                                        <p>Case study details coming soon</p>
                                    </section>
                                ))}
                            </article>
                        </section>
                    </article>
                </main>
                
                <footer className="ba pa1-00 tc gold">
                    Industries Footer
                </footer>
            </div>
        </article>
    )
}

export default Industries