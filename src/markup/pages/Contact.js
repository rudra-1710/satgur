import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import ContactForm from '../components/ContactForm';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';

import icon_1 from '../../assets/images/icons/icon-15.png';
import icon_2 from '../../assets/images/icons/icon-16.png';
import icon_3 from '../../assets/images/icons/icon-17.png';
import icon_4 from '../../assets/images/icons/icon-18.png';

import location_image_1 from '../../assets/images/contact-location-img-1.jpg';
import location_image_2 from '../../assets/images/contact-location-img-2.jpg';
import location_image_3 from '../../assets/images/contact-location-img-3.jpg';
import location_image_4 from '../../assets/images/contact-location-img-4.jpg';

const Contact = () => {
    return (
        <>
            {/* page header - start */}
            <PageHeader image={header_image}>
                <h1 className="c-dark">How We Help</h1>
                <p className="small ln-ht-auto c-dark">
                    Got questions? 
                    <Link to="/contact" className="link link-inherit">
                        <span>Talk to an Expert</span>
                    </Link>
                </p>
            </PageHeader>
            {/* page header - end */}

            {/* contact details - start */}
            <div className="contact">
                <div className="contact-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="contact-header">
                                    <h2 className="ln-ht-44">Contact Us</h2>
                                    <p className="large c-grey">Founded by GFXPARTNER in December of 1987, Satgur has grown from a hard working duo to a team of over twenty experienced professionals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row contact-detail-row">
                            <div className="col-lg-3 col-sm-6 col-7">
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_1} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">media contact</h6>
                                        <a href="mailto:#" className="link  link-grey link-lg">
                                            <span>media@cbex.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-7">
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_2} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">support</h6>
                                        <a href="mailto:#" className="link  link-grey link-lg">
                                            <span>support@cbex.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-7">
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_3} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">phone</h6>
                                        <a href="tel:+123 456 789" className="link  link-grey link-lg">
                                            <span>+123 456 789</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-7">
                                <div className="contact-detail-single">
                                    <div className="icon-circle icon-circle-sm">
                                        <img src={icon_4} alt="icon" />
                                    </div>
                                    <div>
                                        <h6 className="txt-upper c-primary">social</h6>
                                        <ul className="social">
                                            <li>
                                                <a href="/#">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fab fa-facebook-square"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/#">
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row contact-location-row gx-5">
                            <h3>Our Office Locations</h3>
                            <div className="col-lg-6">
                                <div className="contact-location-single">
                                    <figure>
                                        <img src={location_image_1} alt="location-1" />
                                    </figure>
                                    <div className="contact-location-single-content">
                                        <div>
                                            <h5 className="f-w-500 txt-upper ln-ht-3">cbex inc</h5>
                                            <p className="c-grey">30 Aarhus, Denmark</p>
                                            <a href="tel:123 456 7890" className="link  link-grey link-md">
                                                <span>Phone: 123 456 7890</span>
                                            </a>
                                            <a href="mailto:#" className="link  link-grey link-md">
                                                <span>info@cbex.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-location-single">
                                    <figure>
                                        <img src={location_image_2} alt="location-2" />
                                    </figure>
                                    <div className="contact-location-single-content">
                                        <div>
                                            <h5 className="f-w-500 txt-upper ln-ht-3">cbex inc</h5>
                                            <p className="c-grey">30 Aarhus, Denmark</p>
                                            <a href="tel:123 456 7890" className="link  link-grey link-md">
                                                <span>Phone: 123 456 7890</span>
                                            </a>
                                            <a href="mailto:#" className="link  link-grey link-md">
                                                <span>info@cbex.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-location-single">
                                    <figure>
                                        <img src={location_image_3} alt="location-3" />
                                    </figure>
                                    <div className="contact-location-single-content">
                                        <div>
                                            <h5 className="f-w-500 txt-upper ln-ht-3">cbex inc</h5>
                                            <p className="c-grey">30 Aarhus, Denmark</p>
                                            <a href="tel:123 456 7890" className="link  link-grey link-md">
                                                <span>Phone: 123 456 7890</span>
                                            </a>
                                            <a href="mailto:#" className="link  link-grey link-md">
                                                <span>info@cbex.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-location-single">
                                    <figure>
                                        <img src={location_image_4} alt="location-4" />
                                    </figure>
                                    <div className="contact-location-single-content">
                                        <div>
                                            <h5 className="f-w-500 txt-upper ln-ht-3">cbex inc</h5>
                                            <p className="c-grey">30 Aarhus, Denmark</p>
                                            <a href="tel:123 456 7890" className="link  link-grey link-md">
                                                <span>Phone: 123 456 7890</span>
                                            </a>
                                            <a href="mailto:#" className="link  link-grey link-md">
                                                <span>info@cbex.com</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact details - end */}

            {/* contact form - start */}
            <div className="contact-form pattern-bg">
                <div className="contact-form-wrapper">
                    <div className="container pattern-bg-content">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="contact-form-header">
                                    <h2 className="ln-ht-44">Write Us A Message</h2>
                                    <p className="large c-grey">Message us below and we’ll get back to you in a jiffy. You can also chat with us below if that’s more your fancy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pattern-bg-image" style={{backgroundImage: `url(${pattern2})`}}></div>
            </div>
            {/* contact form - end */}

            {/* cta section - start */}
            <div className="cta-section b-primary">
                <div className="cta-section-wrapper section-wrapper" style={{ backgroundImage: `url(${pattern1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content txt-center">
                                <h2 className="c-white f-w-400 heading-40 mg-center">Hire a professional CPA & Accounting firm.</h2>
                                <div className="button-group">
                                    <Button
                                        className='button-1 txt-upper'
                                        to='/contact'
                                        icon='far fa-envelope'
                                        text='book appointment'
                                    />
                                    <Button
                                        className='button-2 txt-upper'
                                        to='/contact'
                                        icon='fas fa-headphones'
                                        text='talk to an expert'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* cta section - end */}
        </>
    );
};

export default Contact;
