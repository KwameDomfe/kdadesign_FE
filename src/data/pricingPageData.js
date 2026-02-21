export const pricingPageData = {
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
    },
    pricingSection: {
        title: 'Our Pricing',
        subtitle: 'Find out how we are enabling global enterprises to navigate their next by adapting to changing technology, business and customer landscape.',
        plans: [
            {
                name: 'Basic',
                price: 'Starting From GHC 7,500.00',
                items: [
                    'Corporate Information Bulletin',
                    {
                        title: 'Website Pages with wireframes and content placeholders, including:',
                        list: ['Home', 'About Us', 'Services', 'Contact Us'],
                    },
                    'Style Guide',
                    {
                        title: 'Social Media Assets with content placeholders, including:',
                        list: ['LinkedIn', 'Twitter', 'Facebook', 'Instagram', 'YouTube'],
                    },
                    'Custom Domain Name Registration and Setup (e.g., www.yourdomain.com)',
                    'Custom Email Address Setup (e.g., info@yourdomain.com)',
                    'Whatsaapp Business Account Setup and Integration with Website and Social Media Channels',
                    'Basic Analytics and Reporting Dashboard with key performance indicators (KPIs) such as website traffic, social media engagement, and email campaign performance',
                    'Secured Hosting and Maintenance for the website, including regular updates, backups, and security monitoring',
                ],
            },
            {
                name: 'Standard',
                price: 'Starting From GHC 15,000.00',
                items: [
                    'Everything in Basic, plus:',
                    'Custom Website Design and Development with responsive design, user-friendly navigation, and optimized performance',
                    'User Accounts App with personalized settings and preferences',
                    'Blog/News Section with content management system (CMS) for easy updates and publishing.',
                    'E-commerce Functionality with secure payment gateway integration and inventory management',
                    'Advanced Analytics and Reporting Dashboard with additional KPIs such as conversion rates, customer acquisition cost, and return on investment (ROI)',
                    'Ongoing Support and Maintenance for the website, including regular updates, backups, security monitoring, and technical support',
                ],
            },
            {
                name: 'Custom',
                price: 'Starting From GHC 25,000.00',
                items: [],
            },
        ],
    },
    responsiveCardsGridStyle: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    },
    footerText: 'Pricing Footer',
}
