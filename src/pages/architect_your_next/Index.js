import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'
import { architectYourNextPageData } from '../../data/architectYourNextPageData'

const ArchitectYourNext = () => {
    const {
        navLinks,
        overview,
        videoSection,
        aynSection,
        researchSection,
        thoughtLeadershipSection,
        footerText,
    } = architectYourNextPageData
  
    return (
        <article>
            <div className="flex flex-column justify-between min-vh-90">
                <header className="ba pa1-00 gold sticky top-4 z-5 bg-white">
                    <nav aria-label="Architect Your Next navigation"
                        className="container container80"
                    >
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Architect Your Next</summary>
                                    <nav aria-label="Architect Your Next sections">
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
                                alt="Architect Your Next Banner"
                                className="w-100 h-100 cover"
                            />
                        </section>
                        <section className="mv1-00 container container80">
                            <h2 className="f3-00">{overview.title}</h2>
                            <div className="flex ggap2-00">
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
                        <section className="bg-white-80 mv1-00 container container80">
                            <header className="mb1-00 f4-00">
                                {aynSection.title}
                            </header>
                            <article id="architect_your_next__contents" className="grid gtc12 ggap1-00 ba pa1-00">
                                {aynSection.items.map((item, index) => (
                                    <section key={item.title} className={item.className}>
                                        <img src={second}
                                            alt={`Report ${index + 1}`}
                                            className="cover"
                                        />
                                        <p>{item.title}</p>
                                        <Link to={item.to}>
                                            Learn More
                                        </Link>
                                    </section>
                                ))}
                            </article> 
                        </section>
                        <section className="container container80 mv1-00">
                            <h1 className="mb1-00 f4-00">
                                {researchSection.title}
                            </h1>
                           
                            <p className="mb2-00 f2-00">
                                {researchSection.subtitle}
                            </p>
                            <article className="grid gtc12 ggap1-00 ba pa1-00">
                                {researchSection.reports.map((report) => (
                                    <section key={report.label} className={report.className}>
                                        <img src={second} alt={report.label} />
                                        <p>{report.label}</p>
                                    </section>
                                ))}
                            </article>
                            <footer className="mv1-00 f2-00 ">
                                {researchSection.footer}
                            </footer>
                        </section>
                        <section className="vh-75 container container80 mv1-00">
                            
                            <h1 className="mb1-00 f4-00">
                                {thoughtLeadershipSection.title}
                            </h1>
                            <p className="mb2-00 f2-00">
                                {thoughtLeadershipSection.subtitle}
                            </p>
                            <article className="flex ggap1-00">
                                {thoughtLeadershipSection.items.map((article) => (
                                    <section
                                        key={article.title}
                                        className="vh-50 ba pa1-00 h-100 w-100"
                                    >
                                        <p>{article.title}</p>
                                        <p>Image Placeholder</p>
                                        {article.details && <p>{article.details}</p>}
                                    </section>
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

export default ArchitectYourNext