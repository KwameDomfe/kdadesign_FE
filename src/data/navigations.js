// Menu Icon
import first from '../images/_partials/logos/kda_design_technologies_logo.jpg'
// import second from '../images/placeholders/regular_images/square-01.png'
// import third from '../images/placeholders/portrait/portrait-01.jpg'
// Social Media Icons
import facebook from '../svgs/socialMedia/facebook.svg'
import twitter from '../svgs/socialMedia/twitter.svg'
import linkedin from '../svgs/socialMedia/linkedin.svg'
import youtube from '../svgs/socialMedia/youtube.svg'

export const mainNav = [
    {
        id : 1,
        name :'architect your next',
        icon : first,
        // url : '/'
        url : 'architect-your-next/'
    },
    {
        id : 3,
        name :'industries',
        icon : first,
        // url : '/'
        url : 'industries/'
    },
    {
        id : 4,
        name :'services',
        icon : first,
        url : 'services/'
        // url : '/'
    },
    {
        id : 2,
        name :'platforms',
        icon : first,
        url : 'platforms/'
        // url : 'platforms/'
    },
    {
        id : 5,
        name :'info',
        icon : first,
        url : 'info/'
        // url : 'info/'
    },
    {
        id : 6,
        name :'Pricing',
        icon : first,
        url : 'pricing/'
        // url : 'pricing/'
    },
]

export const socialNav= [
    {
        id : 1,
        icon : facebook,
        url : 'https://web.facebook.com/kdadesigntechnologies/',
        active: true
    },
    {
        id : 2,
        icon : twitter,
        url : 'https://www.twitter.com',
        active: false
    },
    {
        id : 3,
        icon : linkedin,
        url : 'https://www.linkedin.com/company/kda-design-technologies/',
        active: true
    },
    {
        id : 4,
        icon : youtube,
        url : 'https://www.youtube.com',
        active: false
    },
]
