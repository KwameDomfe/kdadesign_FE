import { Link } from 'react-router-dom'
import second from '../../images/placeholders/landscape_Images/landscape_01.png'
import { pricingPageData } from '../../data/pricingPageData'
import SectionTitle from '../../components/organisms/SectionTitle'
import PricingPlanCard from '../../components/organisms/PricingPlanCard'

const Pricing = () => {
    const {
        navLinks,
        overview,
        offeringsSection,
        pricingSection,
        responsiveCardsGridStyle,
        footerText,
    } = pricingPageData
    
    return (
      
      <article>
            <div className="flex flex-column justify-between min-vh-90">
                <header className="ba pa1-00 gold sticky top-4 z-5 bg-white">
                    <nav aria-label="Pricing navigation"
                        className="container container80"
                    >
                        <ul className="list pa0 ma0">
                            <li>
                                <details>
                                    <summary className="pointer">Pricing</summary>
                                    <nav aria-label="Pricing sections">
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
                        <section className="vh-100">
                            <img src={second}
                                alt="Pricing Banner"
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
                        <section className="container container80 mv4-00 ba">
                            <SectionTitle
                                title={offeringsSection.title}
                                subtitle={offeringsSection.subtitle}
                                titleClassName="mb1-00 tc f4-00"
                                subtitleClassName="mb1-00 tc f2-00"
                            />
                            
                        </section>
                        <section className="container container80 mv1-00">
                            <SectionTitle
                                title={pricingSection.title}
                                subtitle={pricingSection.subtitle}
                            />
                            <article className="grid ggap1-00" style={responsiveCardsGridStyle}>
                                {pricingSection.plans.map((plan) => (
                                    <PricingPlanCard key={plan.name} plan={plan} />
                                ))}
                            </article>
                            
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

export default Pricing