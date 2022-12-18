import React from 'react'

// react router dom
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">contact</h6>
                                <ul className="txt-sm-1 c-grey number-list">
                                    <li>
                                        P
                                        <a href="tel:123.456.7890" className="link  link-md link-grey">
                                            <span>123.456.7890</span>                    
                                        </a>
                                    </li>
                                    <li>
                                        F
                                        <a href="tel:123.456.7890" className="link  link-md link-grey">
                                            <span>123.456.7890</span>  
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">location</h6>
                                <p className="c-grey ln-ht-3">80 Atlantic Avenue, <br/>Toronto, ON M6K 1X9 Canada</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">company</h6>
                                <ul className="txt-sm-1 c-grey">
                                    <li>
                                        <Link to='/about' className='link link-md link-grey'>
                                            <span>About</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/services' className='link link-md link-grey'>
                                            <span>Services</span> 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/blog' className="link link-md link-grey">
                                            <span>Industries</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/services-detail' className='link link-md link-grey'>
                                            <span>Technology</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/about' className='link link-md link-grey'>
                                            <span>Resources</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/team' className='link link-md link-grey'>
                                            <span>In the Media</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/careers' className='link link-md link-grey'>
                                            <span>Careers</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-content">
                                <h6 className="txt-sm c-primary f-w-500 txt-upper">social</h6>
                                <ul className="txt-sm-1 c-grey social-list">
                                    <li><a href="/#" className="link  link-md link-grey">
                                        <i className="fab fa-twitter-square c-light"></i>
                                        <span>
                                            <span>Twitter</span>
                                        </span>
                                        
                                    </a></li>
                                    <li><a href="/#" className="link  link-md link-grey">
                                        <i className="fab fa-facebook-square c-light"></i>
                                        <span>
                                            <span>Facebook</span>
                                        </span>
                                        
                                    </a></li>
                                    <li><a href="/#" className="link  link-md link-grey">
                                        <i className="fab fa-youtube c-light"></i>
                                        <span>
                                            <span>Youtube</span>
                                        </span>
                                        
                                    </a></li>
                                    <li><a href="/#" className="link  link-md link-grey">
                                        <i className="fab fa-linkedin c-light"></i>
                                        <span>
                                            <span>Linkedin</span>
                                        </span>
                                        
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h6 className="copyright txt-sm c-grey">&copy; 2021 SREESON</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
