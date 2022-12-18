import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';
import PageHeaderList from '../components/PageHeaderList';
import IconSlider from '../components/IconSlider';
import Button from '../components/Button';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import intro_bg_2 from '../../assets/images/intro-bg-2.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';

import icon1 from '../../assets/images/icons/icon-1.png';
import icon2 from '../../assets/images/icons/icon-2.png';
import icon3 from '../../assets/images/icons/icon-3.png';
import icon4 from '../../assets/images/icons/icon-4.png';
import icon5 from '../../assets/images/icons/icon-5.png';
import icon6 from '../../assets/images/icons/icon-6.png';
import icon7 from '../../assets/images/icons/icon-7.png';


const Service = () => {

    const icon_slides = [
        {
            icon: icon1,
            heading: 'Latest Technology',
            paragraph: 'We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.'
        },
        {
            icon: icon2,
            heading: 'Transparent Pricing',
            paragraph: 'Enjoy our upfront, fixed price model. We charge by value, not by hours, giving you peace of mind and quality service.'
        },
        {
            icon: icon3,
            heading: 'Unlimited Contact',
            paragraph: 'We believe in continuous communication with our clients. Calls and emails are built into our pricing, unwelcome surprises.'
        },
        {
            icon: icon1,
            heading: 'Latest Technology',
            paragraph: 'We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.'
        },
        {
            icon: icon2,
            heading: 'Transparent Pricing',
            paragraph: 'Enjoy our upfront, fixed price model. We charge by value, not by hours, giving you peace of mind and quality service.'
        },
        {
            icon: icon3,
            heading: 'Unlimited Contact',
            paragraph: 'We believe in continuous communication with our clients. Calls and emails are built into our pricing, unwelcome surprises.'
        }
    ];

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

            {/* page header list - start */}
            <PageHeaderList 
                items={[
                    {
                        text: 'Services',
                        to: '/services',
                        active: true
                    },
                    {
                        text: 'Tax Planning',
                        to: '/services-detail',
                        active: false
                    },
                    {
                        text: 'Business',
                        to: '/services-detail',
                        active: false
                    },{
                        text: 'Consulting',
                        to: '/services-detail',
                        active: false
                    },{
                        text: 'Giving',
                        to: '/services-detail',
                        active: false
                    },
                ]} 
            />
            {/* page header list - end */}
            
            {/* service - start */}
            <div className="service">
                <div className="service-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="service-header">
                                    <h2 className="f-w-400 l-t-44">At Your Service</h2>
                                    <p className="paragraph-lg c-grey">We provide tax, accounting, and consulting service to individuals and professional service firms including physicians, dentists, attorneys and technology-driven companies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row service-list">
                            <div className="col-lg-6">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Tax Planning</h3>
                                    <p className="large c-grey">We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.</p>
                                    <a href="service-detail.html" className="link">
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon5} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Business</h3>
                                    <p className="large c-grey">We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.</p>
                                    <a href="service-detail.html" className="link">
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon6} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Consulting</h3>
                                    <p className="large c-grey">We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.</p>
                                    <a href="service-detail.html" className="link">
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-single mg-center txt-center">
                                    <div className="icon-circle icon-circle-lg mg-center">
                                        <img src={icon7} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-3">Giving</h3>
                                    <p className="large c-grey">We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.</p>
                                    <a href="service-detail.html" className="link">
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="image intro-bg">
                    <img src={intro_bg_2} alt="intro-background" />
                </div>
            </div>
            {/* service - end */}

            {/* icon box section - start */}
            <div className="icon-box-section">
                <div className='icon-box-section-wrapper section-wrapper pattern-bg'>
                    <div className="icon-box-section-inner pattern-bg-content">
                        <div className="container">
                            <div className="row">
                                <div className="icon-box-section-heading-content">
                                    <h2 className="f-w-400 heading-40">Get to know the amazing features you will get.</h2>
                                </div>
                            </div>
                            <div className="row">
                                <IconSlider content={icon_slides} />
                            </div>
                        </div>
                    </div>
                    <div className="pattern-bg-image" style={{backgroundImage: `url(${pattern2})`}}></div>
                </div>
            </div>
            {/* icon box section - end */}

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

export default Service;
