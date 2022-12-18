import React from 'react'

// react router dom
import { Switch, Route, useLocation } from  'react-router-dom';


// header
import Header from './layout/Header';
import TopMenu from './layout/TopMenu';

// components
import Preloader from './components/Preloader';

// footer
import Footer from './layout/Footer';

// pages
import Index1 from './pages/Index1';
import Index2 from './pages/Index2';
import About from './pages/About';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Service from './pages/Service';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';

const No_header_footer = () => {
    return useLocation().pathname;
}


const Markup = () => {
 
    const list = ['/login', '/signup'];


    return (
        <>
            <div className="main-wrapper">
                <Preloader/>
                { !list.includes(No_header_footer()) ? (
                    <>
                        <TopMenu/>
                        <Header/>
                    </>
                ) : null }
                <Switch>
                    <Route exact path="/" component={Index1} />
                    <Route exact path="/index-2" component={Index2} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/team" component={Team} />
                    <Route exact path="/careers" component={Careers} />
                    <Route exact path="/services" component={Service} />
                    <Route exact path="/services-detail" component={ServiceDetail} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog-detail" component={BlogDetail} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
                { !list.includes(No_header_footer()) ? <Footer/> : null }
            </div>
        </>
    )
}

export default Markup;