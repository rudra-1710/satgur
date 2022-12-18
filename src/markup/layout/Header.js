import React, { useEffect, useRef } from 'react';

// react router dom
import { Link } from 'react-router-dom';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';


// importing logo
import logo from '../../assets/images/logo.png';
import logo_white from '../../assets/images/logo-white.png';
import bg from '../../assets/images/patterns/pattern-5.png';

const toggleSlide = (el, display = 'block') => {
    var el_max_height = 0;

    if(el.getAttribute('data-max-height')) {
        // we've already used this before, so everything is setup
        if(el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
            el.style.maxHeight = el.getAttribute('data-max-height');
        } else {
            el.style.maxHeight = '0';
        }
    } else {
        el_max_height                  = getHeight(el) + 'px';
        el.style['transition']         = 'max-height 0.5s ease-in-out';
        el.style.overflowY             = 'hidden';
        el.style.maxHeight             = '0';
        el.setAttribute('data-max-height', el_max_height);
        el.style.display               = display;

        // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
        setTimeout(function() {
            el.style.maxHeight = el_max_height;
        }, 10);
    }
};

const navigation_responsive = () => {
    const width = window.innerWidth;
    const navigation = document.querySelector('.navigation');

    if (typeof(navigation) === 'undefined' || navigation === null) return;

    if (width < 992) {
        navigation.classList.add('responsive');
    } else {
        navigation.classList.remove('responsive');
    }
};

const getHeight = (el) => {
    var el_style      = window.getComputedStyle(el),
        el_display    = el_style.display,
        el_position   = el_style.position,
        el_visibility = el_style.visibility,
        el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

        wanted_height = 0;


    // if its not hidden we just return normal height
    if(el_display !== 'none' && el_max_height !== '0') {
        return el.offsetHeight;
    }

    // the element is hidden so:
    // making the el block so we can meassure its height but still be hidden
    el.style.position   = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display    = 'block';

    wanted_height     = el.offsetHeight;

    // reverting to the original values
    el.style.display    = el_display;
    el.style.position   = el_position;
    el.style.visibility = el_visibility;

    return wanted_height;
};

const Header = () => {

    const navigationRef = useRef(null);

    useEffect(() => {
        GLightbox({
            skin: 'clean video-lightbox'
        });
        
        const main_search = '<div class="main-search-content">' +
            '<form>' +
                '<input type="text" placeholder="Search">' +
                '<button type="submit">' +
                    '<i class="fas fa-search"></i>' +
                '</button>' +
            '</form>' +
        '</div>';
        
        const search_lightbox = GLightbox({
            elements: [
                {
                    content: main_search,
                    height: 'auto'
                }
            ],
            touchNavigation: false,
            touchFollowAxis: false,
            keyboardNavigation: false,
            draggable: false,
            skin: 'clean main-search-lightbox'
        });
        
        Array.from(navigationRef.current.querySelectorAll('.main-search')).forEach((element, index) => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                search_lightbox.open();
            });
        });

                
        window.addEventListener('resize', navigation_responsive);
        window.addEventListener('load', navigation_responsive);
        
        navigationRef.current.querySelector('.navigation-bar').addEventListener('click', (e) => {
            navigationRef.current.classList.add('shown');
        }); 
        
        
        Array.from(navigationRef.current.querySelectorAll('.has-child')).forEach((element, index) => {
            element.addEventListener('click', (e) => {
        
                if (window.innerWidth > 992) return;
        
                if (e.target.parentElement.parentElement.classList.contains('has-child') || e.target.parentElement.parentElement.classList.contains('parent')) {
                    e.preventDefault();
                }
        
                console.log(e.target.parentElement.parentElement)
        
                if (e.currentTarget.classList.contains('dropped')) {
                    toggleSlide(e.currentTarget.querySelector('.child'));
                    e.currentTarget.classList.remove('dropped');
                    return;
                }
        
                // hide dropdown for other list items
                Array.from(e.currentTarget.parentElement.querySelectorAll('.has-child.dropped')).forEach((e, i) => {
                    e.classList.remove('dropped');
                    toggleSlide(e.querySelector('.child'));
        
                });
        
                e.currentTarget.classList.add('dropped');
        
                toggleSlide(e.currentTarget.querySelector('.child'))
            
            });
        });
        
        // hide navigation on mobile
        const close_button = navigationRef.current.querySelector('.close-button');
        
        
        close_button.addEventListener('click', (e) => {
            const dropped = navigationRef.current.querySelector('.dropped');
            console.log('clicked');
        
            if (typeof(dropped) == 'undefined' && dropped == null) {
                toggleSlide(dropped.querySelector('.child'));
                dropped.classList.remove('dropped');
            }
            
            navigationRef.current.classList.remove('shown');
        });
        
    }, []);

    return (
        <>
        <div className="navigation" ref={navigationRef}>
            <div className="navigation-wrapper">
                <div className="navigation-inner">
                    <div className="navigation-logo">
                        <Link to="/">
                            <img src={logo} alt="cbex-logo"/>
                        </Link>
                    </div>
                    <div className="navigation-menu">
                        <div className="mobile-header">
                            <div className="logo">
                                <Link to='/'>
                                    <img src={logo_white} alt="cbex-logo-white" />
                                </Link>
                            </div>
                            <ul>
                                <li className="main-search">
                                    <div>
                                        <i className="fas fa-search"></i>
                                    </div>
                                </li>
                                <li>
                                    <Link to='/login'>
                                        <i className="fas fa-user"></i>
                                    </Link>
                                </li>
                                <li className="close-button">
                                    <i className="fas fa-times"></i>
                                </li>
                            </ul>
                        </div>
                        <ul className="parent">
                            <li className="has-child">
                                <Link to="/">
                                    <span>Home</span>
                                </Link>
                                <ul className="child">
                                    <li>
                                        <Link to="/" className="link">
                                            <span>Home 1</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/index-2" className="link ">
                                            <span>Home 2</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <Link to="/about">
                                    <span>About</span>
                                </Link>
                                <ul className="child">
                                    <li>
                                        <Link to="/about" className="link">
                                            <span>About Us</span>   
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/team" className="link">
                                            <span>Our Team</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="careers" className="link">
                                            <span>Careers</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <Link to="/services">
                                    <span>Services</span>
                                </Link>
                                <ul className="child">
                                    <li>
                                        <Link to="/services" className="link">
                                            <span>Services list</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services-detail" className="link">
                                            <span>Services detail</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <Link to="/blog">
                                    <span>Blog</span>
                                </Link>
                                <ul className="child">
                                    <li>
                                        <Link to="/blog" className="link">
                                            <span>Blog list</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="blog-detail" className="link">
                                            <span>Blog detail</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-child">
                                <Link to="/login">
                                    <span>Others</span>
                                </Link>
                                <ul className="child">
                                    <li>
                                        <Link to="/login" className="link">
                                            <span>Login</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" className="link">
                                            <span>Sign Up</span>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="main-search">
                                <a href="/#">
                                    <span><i className="fas fa-search"></i></span>
                                </a>
                            </li>
                        </ul>
                        <p className="tagline">Satgur — The first fully programmable accounts management system.</p>
                        <div className="navigation-menu-image" style={{backgroundImage: `url(${bg})`}}></div>
                    </div>
                    <div className="navigation-bar">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
