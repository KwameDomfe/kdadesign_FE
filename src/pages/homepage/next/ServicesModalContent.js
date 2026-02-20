import React from 'react'
import second from '../../../images/projects/_partials/accra-ghana-colorful-vector-artmap.jpg'
import { Link } from 'react-router-dom'
const ServicesModalContent = () => {
    return (
        <article className="flex flex-column items-start w-100 pv2-00">
            <h3 id="homePage_offer_dialog_title" className="red mt0-00 mb1-00">
                Service Offerings (<span className="red">Update Section</span>)
            </h3>
            <p className="lh-copy mt0-00 mb2-00">
                Access end-to-end services from strategy to implementation, with practical enablement for long-term adoption.
            </p>
            <ul className=" flex ggap1-00 mt0-00 mb2-00 pl1-50 lh-copy">
                <li className="mb0-50 h16-00">
                  Transformation roadmaps aligned to business priorities
                  <img
                    src={second}
                    alt="Illustration of a transformation roadmap with prioritized initiatives, capability mapping, and milestone planning"
                  />
                </li>
                <li className="mb0-50 h16-00">
                    Implementation support across tools, process, and governance
                    <img
                      src={second}
                      alt="Illustration of implementation support across tools, process, and governance"
                    />
                </li>
                <li className="mb0-50 h16-00">
                    Capability building through training and operational playbooks
                    <img
                      src={second}
                      alt="Illustration of capability building through training and operational playbooks"
                    />
                </li>
            </ul>
            <p className="mt0-00 mb2-00 fw6">
                Outcome: Measurable progress from planning through execution.
            </p>
            <Link to="/services"
                className="pv1-00 ph1-00 bg-black-50 white-90 br0-50"
            >
                Explore Services
            </Link>
        </article>
    )
}

export default ServicesModalContent