import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';
import PageHeaderList from '../components/PageHeaderList';
import Button from '../components/Button';
import IconSlider from '../components/IconSlider';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import icon4_large from '../../assets/images/icons/icon-4-large.png';
import service_detail_image from '../../assets/images/service-detail-img.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';

import icon1 from '../../assets/images/icons/icon-1.png';
import icon2 from '../../assets/images/icons/icon-2.png';
import icon3 from '../../assets/images/icons/icon-3.png';

const ServiceDetail = () => {

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

            {/* service detail - start */}
            <div className="service-detail">
                <div className="service-detail-wrapper">
                    <div className="container">
                        <div className="row d-lg-flex align-items-lg-center">
                            <div className="col-lg-7 order-2 order-lg-1">
                                <div className="service-detail-content">
                                    <h2 className="ln-ht-44">Tax Planning</h2>
                                    <p className="large c-grey">We provide tax, accounting, and consulting service to individuals and professional service firms including physicians, dentists, attorneys and technology-driven companies.</p>
                                    <p className="large c-grey">Trust our team of seasoned accounting professionals to assist with all of your tax needs. And we promise, no matter the degree of complexity, an experienced team of CPAs will always prepare your return.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 d-inline-flex justify-content-lg-end justify-content-center order-lg-2 order-1">
                                <div className="service-detail-icon">
                                    <div className="icon-circle icon-circle-xl">
                                        <img src={icon4_large} alt="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image intro-bg">
                        <img src={service_detail_image} alt="service-detail" />
                    </div>
                </div>
            </div>
            {/* service detail - end */}

            {/* service feature - start */}
            <div className="service-feature">
                <div className="service-feature-wrapper">
                    <div className="container">
                        <div className="row service-feature-list gx-5">
                            <div className="col-lg-6">
                                <div className="service-feature-single">
                                    <h3 className="lt-ht-3">Individual Tax Returns</h3>
                                    <p className="large c-grey">From starting a family to buying your first home to preparing for retirement, we can help you plan and prepare for all of life’s important adventures. No return is too large or too small for our experienced team of CPAs.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-feature-single">
                                    <h3 className="lt-ht-3">Corporate Tax Returns</h3>
                                    <p className="large c-grey">Thinking about buying or selling a business? Or perhaps you need a hand preparing your books for tax time. After all the hard work you put in each year, let us to help you avoid paying high taxes and reap the rewards you deserve.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-feature-single">
                                    <h3 className="lt-ht-3">Estate Tax Planning</h3>
                                    <p className="large c-grey">With so many, ever-evolving laws surrounded wills, trusts and exemptions, the path through estate planning can be tricky. Rely on the experienced professionals at BNA to get the money to the people and places you love most.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-feature-single">
                                    <h3 className="lt-ht-3">Tax Minimization Strategies</h3>
                                    <p className="large c-grey">The best way to avoid paying unnecessary taxes is to start with a smart plan. Reach out today to learn more about how we can help you manage and prepare your finances for a smooth, stress free tax season.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-feature-single">
                                    <h3 className="lt-ht-3">IRS Representation</h3>
                                    <p className="large c-grey">For more than 40 years, our clients have trusted us to take the hassle of IRS audits off their plates. Avoid taking time away from work, lost wages or business and let us handle the paperwork for you.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="service-feature-single">
                                    <h3 className="lt-ht-3">Retirement Planning</h3>
                                    <p className="large c-grey">As you approach Social Security age, let BNA help guide your transition into retirement. We can work together to clarify your goals and determine the best timing so you can sit back, relax and reap the greatest rewards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* service feature - end */}

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

export default ServiceDetail;
