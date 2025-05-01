import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
      <article id = ""
          className = "tc bg-gold"
      >
          <header id = ""
              className="ba pa1-00 bg-black-50 white-90"
          >
            Services Header
          </header>
          
          <main id = "" 
              className="vh-80 flex justify-center"
          >
              <div id="ayn" 
                  className="flex flex-column justify-around 
                      "
              >
                  <section id="ayn__anp"
                      className=""
                  >
                      <Link to="web-apps">
                          <h2>WebApps</h2>
                      </Link>
                  </section>
                  <section id="ayn__dcc"
                      className=""
                  >
                      <Link to = "revit-consulting">
                          <h2>Revit Consulting</h2>
                      </Link>
                  </section>
                  <section id="ayn__dcc"
                      className=""
                  >
                      <Link to = "expert-training">
                          <h2>Expert Trianing</h2>
                      </Link>
                  </section>
                  {/* <section id="ayn__dcc"
                      className=""
                  >
                      <Link to = "aec">
                          <h2>Revit Consulting</h2>
                      </Link>
                  </section> */}
                  
                 
                 
              </div>
          </main>
          
          <footer className="ba pa1-00"
          >
              Services Footer
          </footer>
      </article>
  
  )
}

export default Services