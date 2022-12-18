import React from 'react';

// react router dom
import { Link } from  'react-router-dom';

const TopMenu = () => {
    return (
        <div className="top-menu">
            <div className="top-menu-wrapper">
                <div className="tagline">
                    <p>Satgur — The first fully programmable accounts management system.</p>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to="/login" className="link link-sm link-grey link-ls">
                                <span className="txt-upper f-w-500 lt-1">client login</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="link link-sm link-grey link-ls">
                                <span className="txt-upper f-w-500 lt-1">contact</span>
                            </Link>
                        </li>
                        <li className="phone lt-1">
                            <a href="tel:123456789" className="link link-sm">
                                <i className="fas fa-phone-alt c-primary"></i>
                                <span>123 456 789</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TopMenu;
