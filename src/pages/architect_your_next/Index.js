import React from 'react'
import { Link } from 'react-router-dom'

const ArchitectYourNext = () => {
  
    return (
        <article id = ""
            className = "tc bg-black"
        >
            <header id = ""
                className="ba pa1-00 bg-black-50 gold"
            >
                Architect Your Next Header
            </header>
            
            <main id = "" 
                className="flex justify-center"
            >
                <div id="ayn" 
                    className="flex flex-column justify-between  
                        "
                >
                    <section id="ayn__anp"
                        className="mv2-00"
                    >
                        <Link to ="architecting-new-possibilities"
                            className="gold"
                        >
                            <h2>Architecting New Possibilities</h2>
                        </Link>
                    </section>
                    <section id="ayn__dcc"
                        className="mv2-00"
                    >
                        <Link to = "digital-core-capabilities"
                            className="gold"
                        >
                            <h2>Digital Core Capabilities</h2>
                        </Link>
                    </section>
                    <section id="ayn__dom"
                        className="mv2-00"
                    >
                        <Link to = "digital-operating-model"
                            className="gold"
                        >
                            <h2>Digital Operating model</h2>
                        </Link>
                    </section>
                    <section id="ayn__ett"
                        className="mv2-00"
                    >
                        <Link to = "empowering-talent-transformation"
                            className="gold"
                        >
                            <h2>Empowering Talent Transformation</h2>
                        </Link>
                    </section>
                    <section id="ayn__tot"
                        className="mv2-00"
                    >
                        <Link to = "tales-of-transformation"
                            className="gold"
                        >
                        <h2>Tales of Transformation</h2>
                        </Link>
                    </section>
                </div>
            </main>
            
            <footer className="ba pa1-00 gold"
            >
                Architect Your Next Footer
            </footer>
        </article>
    )
}

export default ArchitectYourNext