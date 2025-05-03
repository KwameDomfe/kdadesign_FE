// React Router Dom
import { NavLink } from 'react-router-dom'
import {mainNav} from '../../data/navigations'


const  PrimaryNavigation = (props) => {
    
    // Props
    const {navClick} = props;
    
    // JSX Elements
    const mainNavElements = mainNav.map( 
        
        mainNavElement => { 
            
            return (
                
                <li key={ mainNavElement.id } 
                    className="bg-black-50 
                        br0-50 ba bw2 b--white
                        shadow-5"
                    onClick={ navClick }
                >
                    <NavLink to = { mainNavElement.url }
                        className="flex flex-column items-center w6-00 h5-00 justify-around white-80 pa0-50 f1-00 tc"
                    >
                        <img src={ mainNavElement.icon }
                            className="w1-50 h1-50 br0-25 ba bw1 cover"
                            alt={ mainNavElement.name }
                        />
                        <span className="
                            ttc f0-75"
                        >
                            { mainNavElement.name }
                        </span>
                    </NavLink>
                </li>
            )
        }
    )

    return (
        <ul className="grid gtc2 gtc3-s
            ggap0-50  h-100
            items-center
            justify-center"
        >
            {mainNavElements}
        </ul>
    )
}

export default PrimaryNavigation