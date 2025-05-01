
const HeroCardCTA = (props) => {
    
    const {image, title, cta} = props
    
    return (
        <figure className="grid gtc2 
            ba br0-25 b--white-40 h-100
            of-hidden"
        >
            <img src={image}
                alt = {title}
                className="gc1s2 gr1s1
                    h-100
                    cover"
            />
            <figcaption className="gc1s2 gr1s1
                f1-00 flex flex-column justify-end 
                bg-black-10 tj pa0-25 ba b--white-40"
            >
                <hgroup className="pa0-25 ba b--white-20 mb0-25"
                >
                    <h2 className="ttu f1-00 ba b--white-20 pa0-25 mb0-00">{title}</h2>
                </hgroup>
                <div className="pa0-25
                    bg-black-60 ttu ba b--white-20"
                >
                    <button className="pa0-25 
                        white-90 ttu 
                        bg-blue0 
                        ba br0-25"
                    >
                        {cta}
                    </button>
                </div>
            </figcaption>
        </figure>
    )
}

export default HeroCardCTA
