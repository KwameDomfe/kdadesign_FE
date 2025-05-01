// import { useState } from 'react'

import {socialNav} from '../../data/navigations'

const SocialNavigation = ({socialNavClick}) => {

    return (
        <ul className="flex justify-center items-center 
            mb0-00-m pa0-50 ph1-00 ba b--white-50"
        >
            {socialNav.map((a)=>{
                        return (
                            <li key={a.id} 
                                className="mb0-00"
                                onClick={socialNavClick}
                            >
                                <a href = {a.url}
                                    className="flex justify-center gray items-center"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <figure className="ba br-100 mh0-25"
                                    >
                                        <img src={a.icon}
                                            className="w1-25 h1-25 pa0-25"
                                            alt={a.url}
                                        />
                                    </figure>
                                </a>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}

export default SocialNavigation