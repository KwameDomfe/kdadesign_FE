import React from 'react'

const ThoughtCard = ({ item }) => (
    <section className="vh-30 ba pa1-00 h-100 w-100">
        <p>{item.title}</p>
        <p>Image Placeholder</p>
        {item.details && <p>{item.details}</p>}
    </section>
)

export default ThoughtCard
