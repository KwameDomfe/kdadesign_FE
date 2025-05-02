import React from 'react'

const HomepageContactUs = () => {
  return (
    <div>
        <header className="tc container pa2-00">
            <h2 className="f3-00">Contact Us</h2>
        </header>
        <main className='flex flex-column'>
            <div className="w-100 h-100"
            >
                <form className="black-60 
                    w-100 h-100 
                    f1-50"
                >
                    <div className="h-100 w-100 flex flex-column justify-between pa1-00">
                        <header className="h4-00 flex items-center justify-center bg-black-60 white-90">
                            Form header
                        </header>
                        <div className="flex items-start justify-between flex-column">
                            <div className="mb1-00 w-100">
                                <label className="mb1-00 w-100" htmlFor="">name <br/>
                                    <input id="" 
                                        className="pv0-50 w-100" 
                                        type="text" 
                                        name=""
                                        placeholder="name please.."
                                    />
                                </label>
                            </div>
                            <div className="mb1-00 w-100">
                                <label htmlFor="">email <br/>
                                    <input id="" 
                                        className="pv0-50 w-100" 
                                        type="email" 
                                        name=""
                                        placeholder="email please.."
                                    />
                                </label>
                            </div>
                            <button type="submit"
                                className="mb1-00 pa0-50"
                            >
                                Contact Us
                            </button>
                        </div>
                        <footer className="h4-00 flex items-center justify-center bg-black-60 white-90">
                            Form footer
                        </footer>
                    </div>
                </form>
            </div>
            
            <div className="w-100 h-100 gray pa1-00">
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