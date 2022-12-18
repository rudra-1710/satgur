import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

const Button = ({ to= '/', className, icon, text }) => {
    return (
        <Link to={to} className={`button ${className}`}>
            <div>
                <i className={icon}></i>
                <span>{text}</span>
            </div>
        </Link>
    );
}

export default Button;
