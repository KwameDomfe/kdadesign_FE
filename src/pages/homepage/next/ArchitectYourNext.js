import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import second from '../../../images/projects/_partials/accra-ghana-colorful-vector-artmap.jpg'
import third from '../../../images/_partials/backgrounds/4-2b.jpg'

const ArchitectYourNext = () => {
    const [activeCard, setActiveCard] = useState(null)
    const isCardActive = (cardId) => activeCard === cardId
    const getParagraphStyle = (cardId) => ({
        opacity: isCardActive(cardId) ? 1 : 0,
        maxHeight: isCardActive(cardId) ? '260px' : '0px',
        transform: isCardActive(cardId) ? 'translateY(0)' : 'translateY(8px)',
        overflow: 'hidden',
        pointerEvents: isCardActive(cardId) ? 'auto' : 'none',
        transition: 'opacity 220ms ease-out, max-height 260ms ease-out, transform 220ms ease-out'
    })
    const getCardInteractionProps = (cardId) => ({
        tabIndex: 0,
        onPointerEnter: () => setActiveCard(cardId),
        onPointerMove: () => {
            if (activeCard !== cardId) {
                setActiveCard(cardId)
            }
        },
        onPointerLeave: () => setActiveCard(null),
        onFocus: () => setActiveCard(cardId),
        onBlur: () => setActiveCard(null),
        onKeyDown: (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                setActiveCard(cardId)
            }
        }
    })

    return (

        <section id="homePage_the_next--cards"
            className="grid gtc12 ggap0-25 gg0-00-m 
                mb4-00 
                white-90 
                container container80"
        >
            <div className="gc1s12 gc1s6-l gr1s1 gr1s2-l "
            >
                
                    <figure id="experience" 
                        className={`grid 
                            h0-00 pb-100 w-100 items-start
                            pa0-00`}
                        {...getCardInteractionProps('experience')}
                    >
                        <img src={second}
                            alt="Experience card background"
                            className="gc1s1 gr1s1 h-100 cover"
                        />
                        <div
                            className="gc1s1 gr1s1 pb-100 w-100 bg-black-60"
                        >
                        </div>
                        <figcaption
                            className="ma0-50 gc1s1 gr1s1 lh-copy"
                        >
                            <h3 className="ttu f1-50"
                            >
                            <b> Experience</b>
                            </h3>
                            
                            <div style={getParagraphStyle('experience')}>
                                <h3 className="fw4 f1-50 ">
                                    Lorem ipsum dolor sit amet.
                                </h3>
                                <p className="fw2" >
                                    Lorem ipsum dolor. Molestias laborum vel, deserunt debitis eos dolorum aut sapiente. Magni a, doloremque.
                                </p>
                                <p className="fw2" >
                                    Lorem ipsum dolor. Molestias laborum vel, deserunt debitis eos dolorum aut sapiente. Magni a, doloremque.
                                </p>
                                
                                <Link to="architect-your-next/empowering-talent-transformation"
                                    className="white-90"
                                >
                                    launch
                                </Link>
                            </div>
                        </figcaption>
                    </figure>
                
            </div>

            <div className="gc1s12 gr2s1 gc1s6-s gc7s3-l gr1s1-l"
            >
                    <figure id="insight" 
                        className="grid h0-00 pb-100 w-100 pa0-00"
                        {...getCardInteractionProps('insight')}
                    >
                        <img src={third}
                            alt="Insight card background"
                            className="gc1s1 gr1s1 h-100 cover"
                        />
                        <div
                            className="gc1s1 gr1s1 pb-100 bg-black-60">
                        </div>
                        <figcaption className="ma0-50 gc1s1 gr1s1"
                        >
                            <h3 className="ttu f1-50">
                                <b> Insight</b>
                            </h3>
                            <div style={getParagraphStyle('insight')}>
                            <h3 className="fw4 f1-50 ">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="fw2" >
                                Lorem ipsum dolor. Molestias laborum vel, deserunt debitis eos dolorum aut sapiente. Magni a, doloremque.
                            </p>
                            <Link to="architect-your-next/empowering-talent-transformation"
                                className="white-90"
                            >
                                launch
                            </Link>
                        </div>
                        </figcaption>
                    </figure>
            </div>

            <div className="gc1s12 gr3s1 gc7s6-s gc7s3-l gr2s1-l"
            >
                <figure id="innovate"
                    className="grid h0-00 pb-100 w-100 pa0-00"
                    {...getCardInteractionProps('innovate')}
                >
                    <img src={third}
                        alt="Innovate card background"
                        className="gc1s1 gr1s1 h-100 cover"
                    />
                    <div
                        className="gc1s1 gr1s1 pb-100 bg-black-60">
                    </div>
                    <figcaption 
                        className="ma0-50 gc1s1 gr1s1"
                    >
                        <h3 className="ttu f1-50 ">
                            <b>Innovate</b>
                        </h3>
                        <div style={getParagraphStyle('innovate')}>
                            <h3 className="fw4 f1-50 ">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="fw2" >
                                Lorem ipsum dolor. Molestias laborum vel, deserunt debitis eos dolorum aut sapiente. Magni a, doloremque.
                            </p>
                            <Link to="architect-your-next/empowering-talent-transformation"
                                className="white-90"
                            >
                                launch
                            </Link>
                        </div>
                    </figcaption>
                </figure>
            </div>

            <div 
                className="gc1s12 gr4s1 gc7s6-s gr2s1-s gc10s3-l gr1s1-l"
            >
                
                    <figure id="accelerate" 
                        className="grid h0-00 pb-100 w-100 pa0-00"
                        {...getCardInteractionProps('accelerate')}
                    >
                        <img src={third} 
                            alt="Accelerate card background"
                            className="gc1s1 gr1s1 h-100 cover"
                        />
                        <div
                            className="gc1s1 gr1s1 pb-100 bg-black-60">
                        </div>
                        <figcaption className="ma0-50 gc1s1 gr1s1">
                            <h3 className="ttu f1-50 ">
                                <b>Accelerate</b>
                            </h3>
                            <div style={getParagraphStyle('accelerate')}>
                                <h3 className="fw4 f1-50 ">
                                    Lorem ipsum dolor sit amet.
                                </h3>
                                <p className="fw2" >
                                    Lorem ipsum dolor. Molestias laborum vel, deserunt debitis eos dolorum aut sapiente. Magni a, doloremque.
                                </p>
                                <Link to="architect-your-next/empowering-talent-transformation"
                                    className="white-90"
                                >
                                    launch
                                </Link>
                            </div>
                            
                        </figcaption>
                        
                    </figure>
                
            </div>

            <div className="gc1s12 gr5s1 gr3s1-s gc1s6-s gc10s3-l gr2s1-l w-100"
            >
                
                    <figure id="assure" 
                        className="grid h0-00 pb-100 w-100 pa0-00"
                        {...getCardInteractionProps('assure')}
                    >
                        <img src={third} 
                            alt="Assure card background"
                            className="gc1s1 gr1s1 h-100 cover"
                        />
                        <div
                            className="gc1s1 gr1s1 bg-black-60 pb-100">
                        </div>
                        <figcaption className="ma0-50 flex flex-column gc1s1 gr1s1 h-100">
                            <h3 className="ttu f1-50 ">
                                <b> Assure</b>
                            </h3>
                            <div style={getParagraphStyle('assure')}>
                            <h3 className="fw4 f1-50 ">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="fw2" >
                                Lorem ipsum dolor. Molestias laborum vel, deserunt debitis eos dolorum aut sapiente. Magni a, doloremque.
                            </p>
                            <Link to="architect-your-next/empowering-talent-transformation"
                                className="white-90"
                            >
                                launch
                            </Link>
                        </div>
                        </figcaption>
                    </figure>
                
            </div>

        </section>

    )
}

export default ArchitectYourNext