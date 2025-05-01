import { Link } from 'react-router-dom'

const Info = () => {
  
    return (
        <article id = ""
            className = "tc bg-gray white-90"
        >
            <header id = ""
                className="ba pa1-00 bg-black-50 white-90"
            >
                Info Header
            </header>
            
            <main id = "" 
                className="vh-80 flex justify-center"
            >
                <div id="info" 
                    className="flex flex-column justify-around 
                        "
                >
                    <section id="info__team"
                        className=""
                    >
                        <Link to="team"
                            className="white-90"
                        >
                            <h2> Team </h2>
                        </Link>
                    </section>
                    <section id="info__contact"
                        className=""
                    >
                        <Link to = "contact"
                            className="white-90"
                        >
                            <h2>Contact</h2>
                        </Link>
                    </section>
                    <section id="info__careers"
                        className=""
                    >
                        <Link to = "careers"
                            className="white-90"
                        >
                            <h2>Careers</h2>
                        </Link>
                    </section>
                    <section id="info__faqs"
                        className=""
                    >
                        <Link to = "frequently-asked-questions"
                            className="white-90"
                        >
                            <h2>Frequently Asked Questions</h2>
                        </Link>
                    </section>
                </div>
            </main>
            
            <footer className="ba pa1-00"
            >
                Architect Your Next Footer
            </footer>
        </article>
    )
}

export default Info