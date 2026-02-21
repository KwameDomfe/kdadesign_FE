import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'
import { infoPageData } from '../../data/infoPageData'
import SectionTitle from '../../components/organisms/SectionTitle'
import LearnMoreCard from '../../components/organisms/LearnMoreCard'
import ThoughtCard from '../../components/organisms/ThoughtCard'

const Info = () => {
    const {
        navLinks,
        overview,
        videoSection,
        contentSection,
        researchSection,
        thoughtLeadershipSection,
        responsiveGridStyle,
        footerText,
    } = infoPageData
  
    return (
        <article>
            <div className="flex flex-column justify-between min-vh-90">
                <header className="ba pa1-00 gold sticky top-4 z-5 bg-white">
                    <nav aria-label="Info navigation"
                        className="container container80"
                    >
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Info</summary>
                                    <nav aria-label="Info sections">
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
                                alt="Info Banner"
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
                        <section className="vh-75 mv4-00 ba">
                            <h1 className="mb1-00 tc f4-00">
                               {videoSection.title}
                            </h1>
                           
                        </section>
                        <section className="container container80 bg-white-80 mv1-00">
                            <SectionTitle title={contentSection.title} />
                            <article id="info__contents" className="grid gtc12 ggap1-00 ba pa1-00">
                                {contentSection.cards.map((item, index) => (
                                    <div key={item.title} className={item.className}>
                                        <LearnMoreCard
                                            title={item.title}
                                            link={item.to}
                                            imageAlt={`Report ${index + 1}`}
                                            imageSrc={second}
                                        />
                                    </div>
                                ))}
                            </article> 
                        </section>
                        <section className="container container80 mv1-00">
                            <SectionTitle
                                title={researchSection.title}
                                subtitle={researchSection.subtitle}
                            />
                            <article className="grid gtc12 ggap1-00 ba pa1-00">
                                {researchSection.reports.map((report) => (
                                    <section key={report.title} 
                                        className={report.className}
                                    >
                                        <img src={second} alt={report.title} />
                                        <p>{report.title}</p>
                                    </section>
                                ))}
                            </article>
                            <footer className="mv1-00 f2-00 ">
                                {researchSection.footer}
                            </footer>
                        </section>
                        <section className="container container80 mv1-00">
                            <SectionTitle
                                title={thoughtLeadershipSection.title}
                                subtitle={thoughtLeadershipSection.subtitle}
                            />
                            <article className="grid ggap1-00" style={responsiveGridStyle}>
                                {thoughtLeadershipSection.items.map((item) => (
                                    <ThoughtCard key={item.title} item={item} />
                                ))}
                            </article>
                            <div className="tc mt1-00">
                                <Link to = {thoughtLeadershipSection.ctaTo}
                                    className="tc"
                                >
                                    {thoughtLeadershipSection.ctaLabel}
                                </Link>
                            </div>
                        </section>
                    </article>
                </main>
                
                <footer className="ba pa1-00 tc"
                >
                    {footerText}
                </footer>
            </div>
        </article>
    )
}

export default Info