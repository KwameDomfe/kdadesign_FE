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
                <div className="flex mv0-25 items-center justify-center"
                >
                    <small className="i"
                    >
                        kda design technologies
                    </small>
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
