import React from 'react'

const HomepageContactUs = () => {
  return (
    <div>
        <header className="tc container pa1-00 pa2-00-m">
            <h2 className="f3-00">Contact Us</h2>
        </header>
        <main className='flex items-center flex-row-m flex-column justify-center'>
            <div className="w-50-m h-100"
            >   
                <div>
                    <h2>
                    Location: 123 Main Street, Accra, Ghana
                    </h2>
                    <h2>
                        Phone: +233 123 456 789
                    </h2>       
                    <h2>
                        Email:  
                        <a href="mailto:info@kdadesign.com">info@kdadesign.tech</a>
                    </h2>
                </div>
                
                <div className="black-60 
                    h-100 
                    f1-25"
                >
                    <div className="h-100 flex flex-column justify-between pa1-00"
                    >
                        <div className="flex items-center justify-between flex-column"
                        >
                            
                            <div className="mb1-00"
                            >
                                inquiries
                            </div> 
                            <div className="mb1-00"
                            >
                                Request for Services
                            </div>
                            <div className="mb1-00"
                            >
                                Customer Support
                            </div>
                           
                        </div>
                        
                    </div>

                </div>

            </div>
            
            <div className="w-50-m h-100 gray pa1-00">
                <div className="mb4-00">
                    <h2 className="f3-00 f4-00-m">Let us <br/> help you to architect your next...</h2>
                </div>
            </div>
            
        </main>
        <footer >
            Contact Us Footer
        </footer>
    </div>
  )
}

export default HomepageContactUs