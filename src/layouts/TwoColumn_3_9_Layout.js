import { useEffect } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import logo from '../images/kda_design_technologies_Logo--small.png'
const TwoColumn_3_9_Layout = (props) => {
    
    // Props
    const {
        category, 
        desc_1,
        desc_2 ,
        desc_3,
        url_path_01,
        url_path_02,
        url_path_03,
        url_path_04,
        url_path_05,
        url_path_06,
        url_name_01,
        url_name_02,
        url_name_03,
        url_name_04,
        url_name_05,
        url_name_06,

    } = props
    
    //  useEffect
    useEffect(() => {
        window.scroll(0,0)
    }, [])


    // JSX
    return (
        <div className="container container80"
        >
            <div className="flex ggap1-00 relative"
            >
                <aside className="flex flex-column justify-between 
                    w-30 
                    bg-black-50 
                    vh-100 
                    pa1-00 mt0-00 
                    sticky top-4"
                >
                    <div className="pb1-00 flex flex-column justify-between h-100">
                        
                        <div>
                            <p>
                                {desc_1} 
                            </p>
                            <p>
                                {desc_2}
                            </p>
                            <p>
                                {desc_3}
                            </p>
                        </div>
                        <header className="flex">
                            <img src={logo}
                                className="w1-50 h1-50 mr0-50 br-50"
                                alt="content icon"
                            />
                            <h2 className="f1-25 mb0-00">
                                <Link to =""
                                >
                                 {category}
                                </Link>
                            </h2>
                        </header>
                    </div>
                    
                    <nav className="bb bt bw3 pv2-00 mb4-00"
                    >
                        
                        <ul >
                            <li className="mb1-00">
                                <NavLink to={url_path_01}>
                                    {url_name_01}
                                </NavLink>
                            </li>

                            <li className="mb1-00">
                                <NavLink to={url_path_02}>
                                    {url_name_02}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_03}>
                                    {url_name_03}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_04}>
                                    {url_name_04}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_05}>
                                    {url_name_05}
                                </NavLink>
                            </li>
                            <li className="mb1-00">
                                <NavLink to={url_path_06}>
                                    {url_name_06}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="w-70 top-6"
                >
                     <Outlet />
                </main>
            </div>
        </div>
    )
}

export default TwoColumn_3_9_Layout
