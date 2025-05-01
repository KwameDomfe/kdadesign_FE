import React from 'react'
import hhh from '../../images/_partials/logos/kda_design_technologies_logo.jpg'
import { Link } from 'react-router-dom'

const MainFooterNav = () => {
  return (
    <nav id="navigation"
        className="grid gtc12 
            min-vh-50 container container90" 
        >
            <section id="footer__about_me"  
                className= "gc3s8 gr1s1 gr2s1-l gc1s4-l w-100"
                data-use-new="true" 
                role="tabpanel" 
                aria-label="projects" 
                section-index="2"
            >
                <div 
                    className="grid gtc12 ggap0-00 items-center pv1-00" 
                    aria-hidden="False"
                >
                    <figure className="gc5s4 gc1s6-s flex gc1s5-m  gc4s6-l
                        gr1s1-m gr1s1-l
                        items-start justify-start
                        mb2-00 mb0-00-s pv2-00-m mb2-00-l
                        pb0-00-l"
                    >
                        <img src={hhh} 
                            alt=""
                            className="br0-50 cover"
                        />
                    </figure> 
                    <div id="about_me" 
                        className="gc1s12 gc7s6-s gc7s6-m gc1s12-l gr2s1-l
                            ml2-00-s ml0-00-m tj"
                    >
                        <header className="pt0-00  ">
                            <h2 className="ttu tc">
                                <Link className="white-90" href=""
                                    role="button" 
                                    aria-expanded="false"
                                >about me</Link>
                            </h2>
                        </header>
                        <p className="lh-copy f1-00 white-90 i">
                            Kwame Domfe Appau is a trained architect who is specialized in Building Information Modelling.
                        </p>
                        
                        <p className="lh-copy f1-00 white-90 i">
                            He is also self-trained computer programmer providing full stack web develoment solutions to businesses large and small.
                        </p>
                    </div>
                    <nav id="m__socialMediaNav" 
                        className="gc1s12 gc7s6-m gc1s12-l 
                            flex flex-column items-center justify-end 
                            w-100 
                            mv1-00 pv0-50 
                            bt bb b--white" 
                        tabIndex="0"
                    >
                        <ul id="social_media_list" 
                            className=" flex justify-between items-center 
                                w-100 ma0-00 pa0-00"
                        >
                            <li className="ba br5-00 pa0-50 b--white-90 dib"> 
                                <Link href="" 
                                    title="Follow me on Twitter" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/twitter.svg"  
                                        alt="" 
                                        className="w1-00"
                                    />
                                </Link>
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"
                            > 
                                <Link href="" 
                                    title="Follow me on Facebook" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/facebook.svg" 
                                        alt="" 
                                        className="w1-00 white-90"
                                    />
                                </Link>
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"> 
                                <Link href="" 
                                    title="Connect with me on LinkedIn" 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <img src="svgs/linkedin.svg" 
                                        alt="" 
                                        className="w1-00"
                                    />
                                </Link>
                                
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"> 
                                <Link href="" 
                                    title="Follow me on youtube" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/youtube.svg"  
                                        alt="" 
                                        className="w1-00"
                                    />
                                </Link>
                            </li>
                            <li className="ba br5-00 pa0-50 b--white-90 dib"
                            > 
                                <Link href="" 
                                    title="Get In Touch on WhatsApp" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <img src="svgs/Whatsapp.svg"  
                                        alt="" 
                                        className="w1-00"
                                    />
                                </Link>
                            </li>
                        </ul> 
                    </nav>
                </div>
            </section>

            <section id="footer__courses" 
                className="gc7s6 gr2s1 
                    gc1s6- gr2s1-s 
                    gc1s6-m gc6s3-l
                    white-90
                    ml1-00-m" 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="principles" 
                section-index="3"
            >
                <div  id="" 
                    className="mb2-00"
                    data-use-new="true"
                >
                    <nav aria-label="">
                        <hgroup>
                            <h2 className="ttu"
                            >
                                AEC Courses
                            </h2>
                        </hgroup>
                        <ul className="">
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""> 
                                    Autodesk Revit Architecture
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit Structures
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit MEP
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Naviswork Manage
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Dynamo
                                </Link>
                            </li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href=""> 
                                    Python
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div  id="" 
                    className="mb2-00"
                    data-use-new="true"
                >
                    <nav aria-label="">
                        <hgroup>
                            <h2 className="ttu"
                            >
                                AEC Courses
                            </h2>
                        </hgroup>
                        <ul className="">
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""> 
                                    Autodesk Revit Architecture
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit Structures
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Revit MEP
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Naviswork Manage
                                </Link>
                            </li>
                            <li className="mb1-00 "
                            >
                                <Link  className="white-90" 
                                    href=""
                                >
                                    Autodesk Dynamo
                                </Link>
                            </li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href=""> 
                                    Python
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            <section id="footer__discover" 
                className="gc1s6 gr2s1
                    gc1s6-s 
                    gc7s6-m gr2s1-m gr2s1-s gc10s3-l
                    " 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="PRACTICE" 
                section-index="4"
            >
                <header>
                    <h2 className="ttu white-90"
                    >
                        Discover
                    </h2>
                </header>

                <div id=""
                    className="mb2-00"  
                    data-use-new="true">
                    <nav aria-label="practice">
                        <ul className="">
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="{% url 'website:faqs">FAQs</Link>
                            </li>
                            <li className="mb1-00 "><Link  className="white-90" 
                                    href="{% url 'website:finance">Financing Options</Link></li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="{% url 'website:contact-me">Contact Me
                                </Link>
                            </li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="">Blog
                                </Link>
                            </li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="{% url 'website:download">Download
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>

                <div id=""
                    className="mb2-00"  
                    data-use-new="true">
                        <header>
                    <h2 className="ttu white-90"
                    >
                        Discover
                    </h2>
                </header>
                    <nav aria-label="practice">
                        <ul className="">
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="{% url 'website:faqs">FAQs</Link>
                            </li>
                            <li className="mb1-00 "><Link  className="white-90" 
                                    href="{% url 'website:finance">Financing Options</Link></li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="{% url 'website:contact-me">Contact Me
                                </Link>
                            </li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="">Blog
                                </Link>
                            </li>
                            <li className="mb1-00 ">
                                <Link  className="white-90" 
                                    href="{% url 'website:download">Download
                                </Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
               

            </section>

            <section id="recents" 
                className="gr3s2 gc1s12 flex flex-column
                    gc7s6-s gr2s1-s 
                    gc7s6-m gc10s3-l tracked-tight" 

                data-use-new="true" 
                role="tabpanel" 
                aria-label="people" 
                section-index=""
            >
                
                <div>
                    <header>
                        <h2 className="ttu white-90"
                        >
                            Recents
                        </h2>
                    </header>
                    <div 
                        className="grid h-100 gtc2 ggap1-00" 
                        aria-hidden="False"
                    >
                        
                        <div id=""
                            className="gr1s1 gc1s1 
                                gr1s1-s gc1s1-s 
                                
                                br1-00"  
                            data-use-new="true"
                        >                    
                            <figure className="">
                                <img src={hhh} 
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Revit Esentials
                                </figcaption>
                            </figure> 

                        </div>

                        <div id=""
                            className=" br1-00 gr2s1 gc1s1 gr1s1-s gc2s1-s "  
                            data-use-new="true"
                        >          
                            <figure className="">
                                <img src={hhh}
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Naviswork Essentials
                                </figcaption>
                            </figure>     
                        </div>

                        <div id=""
                            className=" br1-00 gr1s1 gc2s1 gr2s1-s gc1s1-s "  
                            data-use-new="true"
                        >
                            <figure className="">
                                <img src={hhh} 
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Dynamo Essentials
                                </figcaption>
                            </figure> 
                        </div>

                        <div id=""
                            className=" br1-00 gr2s1 gc2s1 gr2s1-s gc2s1-s "  
                            data-use-new="true"
                        >
                            <figure className="">
                                <img src={hhh}
                                    alt=""
                                    className="w4-00 br0-50 mb0-50"
                                />
                                <figcaption className="white-90">
                                    Python Esentials
                                </figcaption>
                            </figure>  
                        </div>
                    </div>
                </div>
            </section>
        </nav>
  )
}

export default MainFooterNav