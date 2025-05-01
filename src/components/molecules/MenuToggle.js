// Menu SVG Icons
import menuCloseIcon from '../../svgs/menu/close-svgrepo-com_1.svg'
import menuOpenIcon from '../../svgs/menu/burger-menu-svgrepo-com.svg'

const MenuToggle = (props) => {
   
    // Props
    const {menuClick, toggleMenu} = props
    
    // Return
    return (
        <figure id="menu__Toggle"
            className="flex items-center justify-center 
                w2-00 h2-00 
                ba br2-00
                b--gray 
                pointer
            "
            title = "KDA Design Technologies Menu Toggle"
            onClick={menuClick}
        >
            <img src = {toggleMenu ? menuOpenIcon : menuCloseIcon}
                alt="Menu Toggle"
                className="pa0-25"
            />
        </figure>
    )
}

export default MenuToggle