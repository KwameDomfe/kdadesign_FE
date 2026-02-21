import React from 'react'

const SectionTitle = ({
    title,
    subtitle,
    titleClassName = 'mb1-00 f4-00',
    subtitleClassName = 'mb2-00 f2-00',
}) => (
    <>
        <h1 className={titleClassName}>{title}</h1>
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </>
)

export default SectionTitle
