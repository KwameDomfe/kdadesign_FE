import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
// import Breadcrumbs from '../components/Breadcrumbs'

const RootLayout = () => {
    
    useEffect(() => {
        window.scroll();
    }, []);
    
    return (
        <div className="relative w-100"
        >
            <header id="MainHeader"
                className="fixed top-0 bg-white z-5 w-100"
            >
                <MainHeader />
            </header>
            <main id="MainContent"
                className="min-vh-100 pt4-00"
            >
                <Outlet />
            </main>
            <footer id="MainFooter" 
                className=""
            >
                <MainFooter />
            </footer>
        </div>
    )
}

export default RootLayout
