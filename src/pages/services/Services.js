import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'
import { servicesPageData } from '../../data/servicesPageData'
import SectionTitle from '../../components/organisms/SectionTitle'
import LearnMoreCard from '../../components/organisms/LearnMoreCard'

const Services = () => {
    const {
        navLinks,
        overview,
        offeringsSection,
        insightsSection,
        contentSections,
        responsiveGridStyle,
        footerText,
    } = servicesPageData

    return (
        <article>
            <div className="flex flex-column justify-between min-vh-90">
                <header className="ba pa1-00 gold sticky top-4 z-5 bg-white">
                    <nav aria-label="Services navigation" className="container container80">
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Services</summary>
                                    <nav aria-label="Services sections">
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
                            <img
                                src={second}
                                alt="Services Banner"
                                className="w-100 h-100 cover"
                            />
                        </section>

                        <section className="mv1-00 container container80">
                            <h2 className="f3-00">{overview.title}</h2>
                            <div className="flex ggap2-00 mb1-00">
                                <div>
                                    <p className="f1-50 lh-copy">{overview.paragraphOne}</p>
                                </div>
                                <div className="f1-25">
                                    <p>{overview.paragraphTwo}</p>
                                    <p>{overview.paragraphThree}</p>
                                </div>
                            </div>
                        </section>

                        <section className="vh-75 mv4-00 ba container container80">
                            <h1 className="mb1-00 tc f4-00">{offeringsSection.title}</h1>
                            <p className="mb1-00 tc f2-00">{offeringsSection.subtitle}</p>

                            <div>
                                <div>
                                    <h2>{offeringsSection.listTitle}</h2>
                                </div>
                                <div className="w-100">
                                    <ul className="pl3-00">
                                        {offeringsSection.offerings.map((offering) => (
                                            <li className="mb1-00" key={offering.name}>
                                                {offering.to ? (
                                                    <Link to={offering.to}>{offering.name}</Link>
                                                ) : (
                                                    <span>{offering.name} (coming soon)</span>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white-80 mv1-00 container container80">
                            <SectionTitle
                                title={insightsSection.title}
                                subtitle={insightsSection.subtitle}
                            />
                            <article
                                id="architect_your_next__contents"
                                className="grid ggap1-00 ba pa1-00"
                                style={responsiveGridStyle}
                            >
                                {insightsSection.cards.map((item, index) => (
                                    <LearnMoreCard
                                        key={item.type}
                                        title={item.type}
                                        link={item.to}
                                        imageAlt={`Insight ${index + 1}`}
                                        imageSrc={second}
                                    />
                                ))}
                            </article>
                        </section>

                        {contentSections.map((section) => (
                            <section
                                id={section.id}
                                className="container container80 mv1-00"
                                key={section.id}
                            >
                                <SectionTitle title={section.title} subtitle={section.subtitle} />
                                <article className="grid ggap1-00" style={responsiveGridStyle}>
                                    {section.items.map((item, index) => (
                                        <section
                                            key={`${section.id}-${item}`}
                                            className="vh-50 ba pa1-00 h-100 w-100"
                                        >
                                            <p>{`${section.itemPrefix} ${index + 1}`}</p>
                                            <p>{item}</p>
                                            <p>{section.trailingNote}</p>
                                        </section>
                                    ))}
                                </article>
                                {section.footerText && (
                                    <footer className="mv1-00 f2-00 gold">
                                        {section.footerText}
                                    </footer>
                                )}
                            </section>
                        ))}
                    </article>
                </main>

                <footer className="ba pa1-00 tr gold ">
                    <div className="container container80">{footerText}</div>
                </footer>
            </div>
        </article>
    )
}

export default Services
