import { useEffect, useState } from 'react'

const NAV_ITEMS = [
    { sectionId: 'homePage_architect_your_next', label: 'architect your next' },
    { sectionId: 'homePage_digital_core_capablities', label: 'Core Capabilities' },
    { sectionId: 'homePage_operating-model', label: 'Operating Models' },
    { sectionId: 'homePage_talent_transformation', label: 'Talent Transformations' },
    { sectionId: 'homePage_the_next', label: 'The Next' },
    { sectionId: 'homePage_About_Us', label: 'About Us' },
    { sectionId: 'homePage_Contact_Us', label: 'Contact Us' }
]

const LIGHT_BACKGROUND_SECTIONS = ['homePage_the_next', 'homePage_About_Us', 'homePage_Contact_Us']

const HomePageNav = () => {
    const [activeSection, setActiveSection] = useState('homePage_architect_your_next')

    useEffect(() => {
        const sectionIds = NAV_ITEMS.map((item) => item.sectionId)

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

        return LIGHT_BACKGROUND_SECTIONS.includes(sectionId) ? 'black b' : 'white b'
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
                NAV_ITEMS.map(
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
