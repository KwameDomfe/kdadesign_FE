import React from 'react'

const MainFooter = () => {

    const currentYear = new Date().getFullYear()

    return (
        <section id=""
            className="pv1-00 bg-black-60 vh-10"
        >

            <div id="m__poweredby" 
                className="flex flex-column items-center justify-center 
                    white-90 h-100"
            >
                <h2 className="f2-00 f3-00-m mt0-00 mb0-50">
                    Main Footer
                </h2>

                <div className="flex mv0-25 items-center justify-center"
                >
                    <a href="https://www.kdadesign.tech" 
                        className="white-90 i"
                        target="_blank"
                        rel="noreferrer"
                    >
                        kda design technologies
                    </a>
                    <small className="ml0-50"
                    >
                    &copy;{currentYear}
                    </small>
                </div>
            </div>

        </section>
    )
}

export default MainFooter
