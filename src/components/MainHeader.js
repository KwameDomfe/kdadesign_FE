import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// Components
import MenuToggle from './molecules/MenuToggle'
import Logo from './molecules/Logo'
import PrimaryNavigation from './molecules/PrimaryNavigation'
import SocialNavigation from './molecules/SocialNavigation'
import UserAccounts from './molecules/UserAccounts'


const MainHeader = () => {

    // UseState Variables
    const [toggleMenu, SetToggleMenu] = useState(true)
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    // const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    // Use Effect UseEffect CleanUp
    useEffect(() => {

        // function
        // const watch1 =() => {
        //     // console.log("Mankind")
        //     // setWindowWidth (window.innerWidth, window.innerHeight)
        //     setWindowWidth (window.innerWidth)
        //     setWindowHeight (window.innerHeight)
        // }

        // // Add EventListener
        // window.addEventListener("resize", watch1)
        // return function () {
        //     // Remove EventListener
        //     window.removeEventListener("resize", watch1)
        // }
       
    }, []);

    // Use Effect UseEffect CleanUp
    useEffect(() => {

        // // function
        // const watch2 =() => {
        //     console.log("Kuku")
        //     setWindowHeight(window.innerHeight)
        // }

        // // Add EventListener
        // // Add EventListener
        // window.addEventListener("resize", watch2)
        // return function () {
        //     // Remove EventListener
        //     window.removeEventListener("resize", watch2)
        // }
    }, []);
    
    /* Custom Functions */
    const handleToggleMenu = () => {
        SetToggleMenu(!toggleMenu)
    };
   
    return (
        <article id="xxx-MainHeader"
            className={`flex flex-column items-center  justify-start
                ${toggleMenu ? "h4-00" : "vh-100"}
                of-hidden 
                bg-white
                z-5`}
        >
            <div id="xxx-MainHeader--content"
                className={`flex justify-between
                    pv0-50
                    container container80
                    `}
            >
                <section id="xxx-MainHeader--Logo"
                    className={`
                        mb0-00-m`}
                > 
                    <Link to = "/"
                        className=""
                    >
                        <Logo 
                            toggleMenu = {SetToggleMenu}
                        />
                    </Link>
                    
                </section>

                <div id="xxx-MainHeader--MenuToggle"
                    className="flex justify-center pv0-50"
                >
                    <MenuToggle
                        toggleMenu={toggleMenu} 
                        menuClick={handleToggleMenu}
                    />
                </div>
            </div>
            <section id="xxx-MainHeader--NavigationAndUserAccounts"
                className="flex flex-column justify-between items-center  
                justify-between-m
                mt1-00 h-100
            
                "
            >
                <div className='w-100 flex items-center justify-center mb1-00 ph2-00 '>
                    <form className="w-100"
                    >
                        <div>
                            <input id=""
                                className="pa0-25 w-100 tc"
                                type="text" 
                                name="search"
                                placeholder="Search KDA Design Technologies Ltd."
                            />
                        </div>
                    </form>
                </div>
                
                <nav className="flex items-center justify-start
                    pa0-50 mb1-00 bg-black-10 br1-00
                    "
                >
                    <PrimaryNavigation navClick = {handleToggleMenu}/>
                </nav>
                
                <div>
                    <nav className="flex-l justify-center mb1-00"
                    >
                        <SocialNavigation 
                            socialNavClick = {handleToggleMenu}
                        />
                    </nav>
                    <article className="flex-m justify-center mb1-00 mv2-00-s"
                    >
                        <UserAccounts 
                            userAccountsClick = {handleToggleMenu}
                        />
                    </article>
                    <article className="ph4-00 mb1-00 f0-75 i tc bg-black-10 pv1-00"
                    >
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur <a href="/" className="blue1">privacy statement</a>.</p>
                        <p>Lbeatae tytr provident eligendi molestias sint iure adip. <a href="/" className="blue1">Terms and Conditions</a> apply.</p>
                    </article>
                </div>
            </section>
        </article>
    )
  }
  
export default MainHeader