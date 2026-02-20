// CSS
import './App.css';
import './css/utilities.css';
import './css/gdb_normalize.css';

// React Router Dom
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
// import HelpLayout from './layouts/TwoColumn_3_9_Layout';
// import BlogsLayout from './layouts/BlogsLayout';

// Pages Routes
import Homepage from './pages/homepage/Homepage';
import PageNotFound from './pages/miscPages/PageNotFound';
import Faqs from './pages/info/Faqs';
import Contacts from './pages/info/Contacts';
import Team from './pages/info/Team';
// import Posts, { blogsLoader } from './pages/blogs/Blogs';
// import PostDetails, { postDetailsLoader } from './pages/blogs/PostDetails';
// import PostsError from './pages/blogs/PostsError';
import IndustriesHome from './pages/industries/Industries'
import ArchitectYourNext from './pages/architect_your_next/Index';
import TCL from './layouts/TwoColumn_3_9_Layout'
import ANP from './pages/architect_your_next/architecting_new_posibilities/ANP'
import DCC from './pages/architect_your_next/digital-core-capabilities/DCC'
import DOM from './pages/architect_your_next/digital-operating-model/DOM'
import ETT from './pages/architect_your_next/empowering_talent_transformation/ETT'
import TOT from './pages/architect_your_next/tales_of_transformation/TOT'
import Info from './pages/info/Info';
import Careers from './pages/info/Careers';
import TeamDetail from './pages/info/TeamDetail';

import Platforms from './pages/platforms/Platforms'

import AEC from './pages/industries/AEC';
import Education from './pages/industries/Education'

import Services from './pages/services/Services'
import WebApps from './pages/services/WebApps'
import RevitConsulting from './pages/services/RevitConsulting'
import ExpertTraining from './pages/services/ExpertTraining'
import SDEL from './pages/platforms/SDEL';
import Pricing from './pages/pricing/Pricing';


const myRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path = '/'
        element={<RootLayout />}
        > 
            <Route index
                exact
                element = {<Homepage />}
            />
            <Route path = 'architect-your-next'
                element ={ 
                    <ArchitectYourNext />
                }
            />
            <Route path = 'architect-your-next'
                element  = {
                    < TCL category = 'Architect Your Next'
                        desc_1 = 'The Architect Your Next a valid value to be accessible. Provide a valid, navigable address as the href value. Provide a valid, navigable address as the href value.'
                        desc_2 = ''
                        desc_3 = ''
                        url_path_01 = 'architecting-new-possibilities'
                        url_path_02 = 'digital-core-capabilities'
                        url_path_03 = 'digital-operating-model'
                        url_path_04 = 'empowering-talent-transformation'
                        url_path_05 = 'tales-of-transformation'
                       
                        url_name_01 = 'architecting new possibilities'
                        url_name_02 = 'Digital Core Capabilities'
                        url_name_03 = 'Digital Operating Model'
                        url_name_04 = 'Empowering Talent Transformation'
                        url_name_05 = 'Tales of Transformation'
                    />
                }
            >
                <Route path = 'architecting-new-possibilities'
                    element = {
                        < ANP
                        />
                    }
                />
                
                <Route path = 'digital-core-capabilities'
                    element = {
                        < DCC 
                        />
                    }
                />
                <Route path = 'digital-operating-model'
                    element = {
                        < DOM
                        />
                    }
                />
                <Route path = 'empowering-talent-transformation'
                    element = {
                        <ETT 
                        />
                    }
                />
                <Route path = 'tales-of-transformation'
                    element = {
                        <TOT 
                        />
                    }
                />
            </Route>

            <Route path = 'industries'
                element  = {
                    <IndustriesHome />
                }
            />
            <Route path = 'industries'
                element  = {
                    < TCL category = 'Industries'
                        desc_1 = 'The Architect Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2 = 'The Architect Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'The Architect Your Next a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        url_path_01 = 'education'
                        url_path_02 = 'aec'
                        url_path_03 = ''
                        url_path_04 = ''
                        url_path_05 = ''
                       
                        url_name_01 = 'education'
                        url_name_02 = 'aec'
                        url_name_03 = ''
                        url_name_04 = ''
                        url_name_05 = ''
                    />
                }
            >
                <Route path = 'education'
                    element = {<Education/>}
                />
                <Route path = 'aec'
                    element = {<AEC />}
                />
            </Route>

            <Route path = 'info'
                element = {<Info />}
            />
            <Route path = 'info'
                 element  = {
                    < TCL category = 'Info'
                        desc_1 = 'The Info of KDA Design Technologies href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        url_path_01 = 'team'
                        url_path_02 = 'contact'
                        url_path_03 = 'careers'
                        url_path_04 = 'frequently-asked-questions'
                        url_path_05 = ''
                       
                        url_name_01 = 'team'
                        url_name_02 = 'contact'
                        url_name_03 = 'careers'
                        url_name_04 = 'Frequently Asked Questions'
                        url_name_05 = ''
                    />
                }
            >
                <Route path = 'team'
                    index
                    element = {<Team />}
                />
                <Route path = 'team/:id'
                    index
                    element = {<TeamDetail />}
                />
                    
                <Route path = 'contact'
                    element = {<Contacts />}
                />
                <Route path = 'careers'
                    element = {<Careers />}
                />
                <Route path = 'frequently-asked-questions'
                    element = {<Faqs />}
                />
            </Route>
            
            <Route path = 'platforms'
                element  = {<Platforms />}
            />
            <Route path = 'platforms'
                element  = {
                    < TCL category = 'Platforms'
                        desc_1 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        url_path_01 = 'SDEL'
                        url_path_02 = ''
                        url_path_03 = ''
                        url_path_04 = ''
                        url_path_05 = ''
                       
                        url_name_01 = 'SDEL'
                        url_name_02 = ''
                        url_name_03 = ''
                        url_name_04 = ''
                        url_name_05 = ''
                    />
                }
                
            >
                <Route 
                    path = 'SDEL'
                    element = {<SDEL />}
                />
                {/* <Route 
                    path = 'AEC'
                    element = {<AEC />}
                /> */}
            </Route>
            <Route path = 'services'
                element  = {<Services />}
            />
            <Route path = 'services'
                element  = {
                    < TCL category = 'Services'
                        desc_1 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_2 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        desc_3 = 'The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.'
                        
                        url_path_01 = 'web-apps'
                        url_path_02 = 'revit-consulting'
                        url_path_03 = 'expert-training'
                        url_path_04 = ''
                        url_path_05 = ''
                       
                        url_name_01 = 'Web Apps'
                        url_name_02 = 'Revit Consulting'
                        url_name_03 = 'Expert Training'
                        url_name_04 = ''
                        url_name_05 = ''
                    />
                }
                
            >
                <Route 
                    path = 'web-apps'
                    element = {<WebApps />}
                />
                <Route 
                    path = 'revit-consulting'
                    element = {<RevitConsulting/>}
                />
                <Route 
                    path = 'expert-training'
                    element = {<ExpertTraining />}
                />
            </Route>

            <Route path = 'pricing'
                element  = {<Pricing />}
            />
            <Route 
                path='*'
                element = { <PageNotFound /> }
            >
            </Route>
        </Route>
    )
)

function App() {

    return (
        <RouterProvider
            router = {myRouter}
        />
    );
};

export default App;



