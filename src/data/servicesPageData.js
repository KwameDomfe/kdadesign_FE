export const servicesPageData = {
    navLinks: [
        { to: 'architecting-new-possibilities', label: 'Architecting New Possibilities' },
        { to: 'digital-core-capabilities', label: 'Digital Core Capabilities' },
        { to: 'digital-operating-model', label: 'Digital Operating Model' },
        { to: 'empowering-talent-transformation', label: 'Empowering Talent Transformation' },
        { to: 'tales-of-transformation', label: 'Tales of Transformation' },
    ],
    overview: {
        title: 'Overview',
        paragraphOne: 'In an era defined by rapid technological advancements and shifting market dynamics, the ability to move quickly is crucial for sustained success. This section provides an overview of key strategies and insights that can help businesses navigate the complexities of the digital landscape and position themselves for future growth.',
        paragraphTwo: "From embracing emerging technologies to fostering a culture of innovation, we explore the essential elements that contribute to successful transformation. Discover how to identify new opportunities, mitigate risks, and create a roadmap for your organization's future in this ever-evolving business environment.",
        paragraphThree: "Whether you're a seasoned executive or an aspiring leader, this section offers valuable perspectives and actionable insights to help you move with confidence and agility.",
    },
    offeringsSection: {
        title: 'Our Offerings',
        subtitle: 'Our business solutions and services help accelerate innovation, increase productivity, reduce costs, and optimize asset utilization.',
        listTitle: 'Services',
        offerings: [
            { name: 'Education' },
            { name: 'Civic Religious and Cultural' },
            { name: 'Commerce' },
            { name: 'Healthcare' },
            { name: 'Manufacturing' },
            { name: 'Financial Services' },
            { name: 'Technology' },
            { name: 'Energy' },
        ],
    },
    insightsSection: {
        title: 'Insights',
        subtitle: 'Views and opinions of our thought leaders to shape business plans and customer experience',
        cards: [
            { type: 'Feature', to: '/architect-your-next/digital-core-capabilities/' },
            { type: 'Publication', to: '/architect-your-next/digital-operating-model/' },
            { type: 'Blog', to: '/architect-your-next/tales-of-transformation/' },
            { type: 'White Paper', to: '/architect-your-next/empowering-talent-transformation/' },
            { type: 'Technical Reports', to: '/architect-your-next/architecting-new-possibilities/' },
        ],
    },
    contentSections: [
        {
            id: 'whats-new',
            title: "What's New in Services",
            subtitle: 'The latest in technology, thought leadership and customer stories',
            itemPrefix: 'Article',
            items: [
                'Technology trends and outlook',
                'Industry thought leadership highlights',
                'Customer stories and delivery updates',
                'Events, announcements and releases',
            ],
            trailingNote: 'Content update coming soon',
            footerText: 'KDA Design Technologies Research & Development',
        },
        {
            id: 'success-stories',
            title: 'Success Stories',
            subtitle: 'Find out how we are enabling global enterprises to navigate their next by adapting to changing technology, business and customer landscape.',
            itemPrefix: 'Story',
            items: [
                'Enterprise transformation outcomes',
                'Cross-functional delivery success',
                'Customer growth and modernization',
                'Scalable operations enablement',
            ],
            trailingNote: 'Case study details coming soon',
        },
    ],
    responsiveGridStyle: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
    },
    footerText: 'Services Footer',
}
