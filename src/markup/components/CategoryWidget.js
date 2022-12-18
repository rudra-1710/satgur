import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

const CategoryWidget = () => {

    const categories = [
        {
            name: 'Business',
            to: '/blog'
        },
        {
            name: 'Company',
            to: '/blog'
        },
        {
            name: 'Consulting',
            to: '/blog'
        },
        {
            name: 'Giving',
            to: '/blog'
        },
        {
            name: 'Management',
            to: '/blog'
        },
        {
            name: 'Tax',
            to: '/blog'
        },
        {
            name: 'Technology',
            to: '/blog'
        }
    ]

    return (
        <div className="category">
            <div className="category-wrapper">
                <h4>categories</h4>
                <ul>
                    { categories.map((category, index) => {
                        return (
                            <li key={index}><Link to={category.to}>{category.name}</Link></li>
                        );
                    }) }
                </ul>
            </div>
        </div>
    );
};

export default CategoryWidget;
