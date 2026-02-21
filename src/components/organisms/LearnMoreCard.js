import React from 'react'
import { Link } from 'react-router-dom'

const LearnMoreCard = ({ title, link, imageAlt, imageSrc }) => (
    <section className="ba pa1-00 h-100 w-100">
        <img src={imageSrc} alt={imageAlt} />
        <p>{title}</p>
        <Link to={link}>Learn More</Link>
    </section>
)

export default LearnMoreCard
