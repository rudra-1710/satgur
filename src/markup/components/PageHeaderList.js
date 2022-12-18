import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

const PageHeaderList = ({ items, addMarginTop = false }) => {
    return (
        <div className={`page-header-list${addMarginTop ? ' page-header-list-1': ''}`}>
            <div className="page-header-list-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="page-header-list-content">
                                <ul>
                                    {items.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                to={item.to}
                                                className={`link link-md ${item.active ? 'active' : 'link-grey'}`}>
                                                    <span className={item.active ? 'f-w-500' : null}>{item.text}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHeaderList;
