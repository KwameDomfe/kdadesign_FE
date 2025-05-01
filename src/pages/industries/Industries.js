import React from 'react'
import { Link } from 'react-router-dom'

const Industries = () => {
    return (
      <article id = ""
          className = "tc bg-blue0"
      >
          <header id = ""
              className="ba pa1-00 bg-black-50 white-90"
          >
            Industries Header
          </header>
          
          <main id = "" 
              className="vh-80 flex justify-center"
          >
              <div id="ayn" 
                  className="flex flex-column justify-center 
                      "
              >
                  <section id="ayn__anp"
                      className="mb2-00 "
                  >
                      <Link to="education"
                        className='white-90'
                      >
                          <h2>Education</h2>
                      </Link>
                  </section>
                  <section id="ayn__dcc"
                      className="mb2-00"
                  >
                      <Link to = "aec"
                        className='white-90'
                      >
                          <h2>Architecture Engineering and Construction</h2>
                      </Link>
                  </section>
              </div>
          </main>
          
          <footer className="ba pa1-00"
          >
              Industries Footer
          </footer>
      </article>
  
  )
}

export default Industries