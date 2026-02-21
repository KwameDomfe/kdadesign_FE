import { useEffect, useState } from 'react'
import { homePageLightBackgroundSections, homePageNavItems } from '../../data/homePageData'

const HomePageNav = () => {
    const [activeSection, setActiveSection] = useState('homePage_architect_your_next')

    useEffect(() => {
        const sectionIds = homePageNavItems.map((item) => item.sectionId)

        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean)

        if (!sections.length) {
            return undefined
        }

        const updateActiveSection = () => {
            const viewportMarker = window.innerHeight * 0.38
            let currentSectionId = sectionIds[0]

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect()
                if (rect.top <= viewportMarker) {
                    currentSectionId = section.id
                }
            })

            setActiveSection(currentSectionId)
        }

        updateActiveSection()
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        return () => {
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
        }
    }, [])

    const getLinkClassName = (sectionId) => {
        if (activeSection !== sectionId) {
            return 'gold'
        }

        return homePageLightBackgroundSections.includes(sectionId) ? 'black b' : 'white b'
    }

  return (
    <nav id="m__navItems"
        className="pa1-00 f0-75 "
    >
        <ul className="flex-column-m 
                mb0-00 justify-between items-start
                w6-00
                ttc
                pv1-50"
        >
            {
                homePageNavItems.map(
                    (item) => (
                        <li
                            key={item.sectionId}
                            className="mb2-00"
                            tabIndex="0"
                            title={item.label}
                            aria-label={item.label}
                        >
                            <a
                                href={`#${item.sectionId}`}
                                className={getLinkClassName(item.sectionId)}
                            >
                                {item.label}
                            </a>
                        </li>
                    )
                )
            }
        </ul>
    </nav>
  )
}

export default HomePageNav
