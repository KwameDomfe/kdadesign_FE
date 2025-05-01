
import logo from '../../images/_partials/logos/kda_design_technologies_logo.jpg'

const Logo = (props) => {
    
    // Props
    const {toggleMenu} = props
    
    // Return
    return (
    
        <figure id="m__logo"
            className="flex items-center justify-center ttu"
            title="KDA Design Technologies Logo"
            onClick={toggleMenu}
        >
            <img src={logo}
                alt="KDA Design Technologies Company Logo"
                className="w3-00 h3-00 br5-00"
            />

            <figcaption 
                className="db-l ml0-50 black-60"
            >   
                <h1 className="dn db-s f1-25 mv0-00 ">
                    KDA DESIGN
                </h1>
                <h1 className="dn db-s f1-00 mv0-00 ">
                    technologies
                </h1>
            </figcaption> 
        </figure>
    )
}

export default Logo
