import React from 'react'

const PricingPlanCard = ({ plan }) => (
    <section className="min-vh-50 ba pa1-00 h-100 w-100">
        <h2>{plan.name}</h2>
        <h2>{plan.price}</h2>

        {plan.items.map((item) => {
            if (typeof item === 'string') {
                return <p key={item}>{item}</p>
            }

            return (
                <div key={item.title}>
                    <p>{item.title}</p>
                    <ul>
                        {item.list.map((entry) => (
                            <li key={`${item.title}-${entry}`}>{entry}</li>
                        ))}
                    </ul>
                </div>
            )
        })}
    </section>
)

export default PricingPlanCard
