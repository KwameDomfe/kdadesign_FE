import React, { useState } from 'react'
import Offers from './next/Offers'
import Discover from './next/Discover'
import OurPurpose from './next/OurPurpose'
import PlatformsModalContent from './next/PlatformsModalContent'
import ServicesModalContent from './next/ServicesModalContent'
import IndustriesModalContent from './next/IndustriesModalContent'
import ArchitectYourNextModalContent from './next/ArchitectYourNextModalContent'
import ArchitectYourNext from './next/ArchitectYourNext'
import ArchitectYourNextHeader from './next/ArchitectYourNextHeader'
import { homePageOfferKeys } from '../../data/homePageData'

const HomePageNext = () => {
    const [activeOffer, setActiveOffer] = useState(null)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const offerComponentRegistry = {
        platforms: PlatformsModalContent,
        services: ServicesModalContent,
        industries: IndustriesModalContent,
        architectYourNext: ArchitectYourNextModalContent
    }
    const offerComponents = homePageOfferKeys.reduce((accumulator, key) => {
        if (offerComponentRegistry[key]) {
            accumulator[key] = offerComponentRegistry[key]
        }
        return accumulator
    }, {})

    const ActiveOfferComponent = activeOffer ? offerComponents[activeOffer] : null

    const openOfferDialog = (offerKey) => {
        setActiveOffer(offerKey)
        requestAnimationFrame(() => {
            setIsModalVisible(true)
        })
    }

    const closeOfferDialog = () => {
        setIsModalVisible(false)
    }

    const handleModalTransitionEnd = (event) => {
        if (!isModalVisible && event.target === event.currentTarget && event.propertyName === 'opacity') {
            setActiveOffer(null)
        }
    }

  return (
    <div>
        <ArchitectYourNextHeader />
        <main id="homePage_the_next--content"
            className=""
        >
            <ArchitectYourNext />
            <Offers openOfferDialog={openOfferDialog} />
            <Discover />    
            <OurPurpose />

        </main>
        {
            activeOffer &&
            <div
                className="flex items-center justify-center pa1-00"
                style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 999,
                    opacity: isModalVisible ? 1 : 0,
                    transition: 'opacity 220ms ease-out'
                }}
                onClick={closeOfferDialog}
                onTransitionEnd={handleModalTransitionEnd}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="homePage_offer_dialog_title"
                    className="bg-white w-100 gray pa2-00 br0-25"
                    style={{
                        maxWidth: '768px',
                        width: '100%',
                        opacity: isModalVisible ? 1 : 0,
                        transform: isModalVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.98)',
                        transition: 'opacity 220ms ease-out, transform 220ms ease-out'
                    }}
                    onClick={(event) => event.stopPropagation()}
                >
                    {ActiveOfferComponent && <ActiveOfferComponent />}
                    <button
                        type="button"
                        onClick={closeOfferDialog}
                        className="bg-black white ba bn pa0-50 ph1-00 pointer"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        }
        <footer className="tc">
            <h2>The next Footer</h2>
        </footer>
    </div>
  )
}

export default HomePageNext