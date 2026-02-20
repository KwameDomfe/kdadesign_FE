import React from 'react'

const PlatformsModalContent = () => {
    return (
        <div className="flex flex-column items-center justify-center pa1-00">
            <h3 id="homePage_offer_dialog_title" className="mt0-00 mb1-00">
                KDA Design Technologies Platforms (<span className="red">Section Update underway... </span>)
            </h3>
            <h4 className="mb2-00 h10-00">
                Under Development: Please check back soon for updates on our platform offerings.
            </h4>
            <div className="dn">
                <p className="lh-copy mt0-00 mb2-00">
                    Use integrated digital platforms to standardize delivery, connect teams, and scale operations with confidence.
                </p>
                <ul className="mt0-00 mb2-00 pl1-50 lh-copy">
                    <li className="mb0-50">Cloud-ready architecture with secure data workflows</li>
                    <li className="mb0-50">Reusable modules to speed up implementation</li>
                    <li className="mb0-50">Real-time visibility for project and portfolio decisions</li>
                </ul>
                <p className="mt0-00 mb2-00 fw6">
                    Outcome: Faster execution and stronger operational consistency.
                </p>
            </div>
        </div>
    )
}

export default PlatformsModalContent