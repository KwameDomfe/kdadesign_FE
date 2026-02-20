import React from 'react'
import { Link } from 'react-router-dom'
import second from '../../../images/placeholders/landscape_Images/landscape-02.png'

const PlatformOnePreview = () => {
    return (
        <section className="h-100 w-100 flex flex-column justify-center">
            <h3 className="f3-00 mb1-00">Platform One</h3>
            <img src={second} 
                alt="Platform One" 
                className="mb1-00 w-100 h-100 cover" 
            />    

            <p className="f1-50 lh-copy">Overview and details for Platform One.</p>
            <div>
                <Link to="#" className="mt1-00 gold">
                    explore more
                </Link>
            </div>
        </section>
    )
}

export default PlatformOnePreview
