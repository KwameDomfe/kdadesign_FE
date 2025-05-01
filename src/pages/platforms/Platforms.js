import React from 'react'
import { Link } from 'react-router-dom'

const Platforms = () => {
    return (
      <article id = ""
          className = "tc bg-blue2"
      >
          <header id = ""
              className="ba pa1-00 bg-black-50 white-90"
          >
            Platforms Header
          </header>
          
          <main id = "" 
              className="vh-80 flex justify-center"
          >
              <div id="ayn" 
                  className="flex flex-column justify-center 
                      "
              >
                  <section id="ayn__anp"
                      className="mb2-00"
                  >
                      <Link to="SDEL">
                          <h2>SEDEL</h2>
                      </Link>
                  </section>
                  {/* <section id="ayn__dcc"
                      className="mb2-00"
                  >
                      <Link to = "aec">
                          <h2>Architecture Engineering and Construction</h2>
                      </Link>
                  </section> */}
                  
                 
                 
              </div>
          </main>
          
          <footer className="ba pa1-00"
          >
              PlatformsFooter
          </footer>
      </article>
  
  )
}

export default Platforms