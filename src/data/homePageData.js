export const homePageNavItems = [
    { sectionId: 'homePage_architect_your_next', label: 'architect your next' },
    { sectionId: 'homePage_digital_core_capablities', label: 'Core Capabilities' },
    { sectionId: 'homePage_operating-model', label: 'Operating Models' },
    { sectionId: 'homePage_talent_transformation', label: 'Talent Transformations' },
    { sectionId: 'homePage_the_next', label: 'The Next' },
    { sectionId: 'homePage_About_Us', label: 'About Us' },
    { sectionId: 'homePage_Contact_Us', label: 'Contact Us' },
]

export const homePageLightBackgroundSections = [
    'homePage_the_next',
    'homePage_About_Us',
    'homePage_Contact_Us',
]

export const homePageRightSections = [
    {
        id: 'homePage_digital_core_capablities',
        sectionClassName: 'gc1s12 bb bw3 bg-black-50',
        bgImageKey: 'third',
        fgImageKey: 'second',
        lgcs: 'gc2s10 gc3s6-m',
        rgcs: 'gc2s10 gc9s3-m',
        flexDirection: 'flex-row-s',
        bgColour: 'blue1',
        sectionHeading: 'Digital Core Capabilities',
        sectionSubHeading: 'Build vital capabilities to deliver digital outcomes.',
        url: 'architect-your-next/digital-core-capabilities',
    },
    {
        id: 'homePage_operating-model',
        sectionClassName: 'gc1s12 bb bw3',
        bgImageKey: 'third',
        fgImageKey: 'third',
        lgcs: 'gc2s10 gc2s6-m',
        rgcs: 'gc2s10 gc8s3-m',
        bgColour: 'blue1',
        sectionHeading: 'Digital Operating Model',
        sectionSubHeading: 'Adopt accelerators to evolve your way of working.',
        url: 'architect-your-next/digital-operating-model',
    },
    {
        id: 'homePage_talent_transformation',
        sectionClassName: 'gc1s12 bb bw3',
        bgImageKey: 'fourth',
        fgImageKey: 'fourth',
        lgcs: 'gc2s10 gc3s6-m',
        rgcs: 'gc2s10 gc9s3-m',
        bgColour: 'blue1',
        sectionHeading: 'Empowering Talent Transformation',
        sectionSubHeading: 'Embrace the talent revolution to remain relevant in the future.',
        url: 'architect-your-next/empowering-talent-transformation',
    },
]

export const homePageOfferKeys = [
    'platforms',
    'services',
    'industries',
    'architectYourNext',
]

export const homePageRightDefaults = {
    primaryCtaLabel: 'explore...',
    secondaryCtaLabel: 'pricing...',
    secondaryCtaTo: '',
    teaserCards: [
        {
            cardClassName: 'flex flex-column justify-between h10-00 w14-00-l br0-25 white-90 pa1-00 bg-black-40',
            title: 'doloribus nesciunt amet consect',
            description: 'Lorem ipsum dolor sit amet consect, adipisicing elit. quid neque amet veniam.',
            linkLabel: 'read more...',
            linkTo: '',
        },
        {
            cardClassName: 'flex flex-column justify-between h10-00 w14-00-l br0-25 white-90 pa1-00 bg-white-10',
            title: 'doloribus nesciunt amet consect',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. veniam.',
            linkLabel: 'read more...',
            linkTo: '',
        },
    ],
}
