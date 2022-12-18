import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// sliders
import HeroSlider2 from '../components/HeroSlider2';
import TestimonialSlider from '../components/TestimonialSlider';

// tabs
import Tabs from '../components/Tabs';

// icons
import icon1 from '../../assets/images/icons/icon-8.png';
import icon2 from '../../assets/images/icons/icon-1.png';
import icon3 from '../../assets/images/icons/icon-2.png';
import icon4 from '../../assets/images/icons/icon-3.png';

// button
import Button from '../components/Button';

// images
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';
import testimonial_img_1 from '../../assets/images/testimonial-bg-1.jpg';

const Index2 = () => {

    const tab_content = [
        {
            pagination: (
                <>
                    <div>
                        <h3>taxtation</h3>
                        <p>Tax planning and complicated tax return preparation.</p>
                    </div>
                </>
            ),
            content: (
                <>
                    <h2 className="c-dark-2">Professional services that make a difference</h2>
                    <p className="large c-grey">At Satgur, enjoy custom fixed price agreements tailored to your needs and face-to-face meetings with our experienced professionals. Then rest assured knowing that your work is reviewed by senior staff and that tax returns are always double-checked.</p>
                    <div className="button-group">
                        <Button
                                className='button-3 txt-upper'
                                to='/contact'
                                icon='far fa-envelope'
                                text='contact us'
                        />
                        <p>Got questions? 
                            <Link to='/contact' className='link'>
                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                            </Link>
                        </p>
                    </div>
                </>
            )
        },
        {
            pagination: (
                <>
                    <div>
                        <h3>business</h3>
                        <p>CFO level work for small and medium sizes businesses.</p>
                    </div>
                </>
            ),
            content: (
                <>
                    <h2 className="c-dark-2">CFO level work for medium size businesses.</h2>
                    <p className="large c-grey">At Satgur, enjoy custom fixed price agreements tailored to your needs and face-to-face meetings with our experienced professionals. Then rest assured knowing that your work is reviewed by senior staff and that tax returns are always double-checked.</p>
                    <div className="button-group">
                        <Button
                                className='button-3 txt-upper'
                                to='/contact'
                                icon='far fa-envelope'
                                text='contact us'
                        />
                        <p>Got questions? 
                            <Link to='/contact' className='link'>
                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                            </Link>
                        </p>
                    </div>
                </>
            )
        },
        {
            pagination: (
                <>
                    <div>
                        <h3>consulting</h3>
                        <p>Expert advice on financial planning, mergers, estate and more.</p>
                    </div>
                </>
            ),
            content: (
                <>
                    <h2 className="c-dark-2">Charitable work for the community</h2>
                    <p className="large c-grey">At Satgur, enjoy custom fixed price agreements tailored to your needs and face-to-face meetings with our experienced professionals. Then rest assured knowing that your work is reviewed by senior staff and that tax returns are always double-checked.</p>
                    <div className="button-group">
                        <Button
                                className='button-3 txt-upper'
                                to='/contact'
                                icon='far fa-envelope'
                                text='contact us'
                        />
                        <p>Got questions? 
                            <Link to='/contact' className='link'>
                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                            </Link>
                        </p>
                    </div>
                </>
            )
        },
        {
            pagination: (
                <>
                    <div>
                        <h3>giving</h3>
                        <p>Charitable work for the local community and beyound.</p>
                    </div>
                </>
            ),
            content: (
                <>
                    <h2 className="c-dark-2">CFO level work for medium size businesses.</h2>
                    <p className="large c-grey">At Satgur, enjoy custom fixed price agreements tailored to your needs and face-to-face meetings with our experienced professionals. Then rest assured knowing that your work is reviewed by senior staff and that tax returns are always double-checked.</p>
                    <div className="button-group">
                        <Button
                                className='button-3 txt-upper'
                                to='/contact'
                                icon='far fa-envelope'
                                text='contact us'
                        />
                        <p>Got questions? 
                            <Link to='/contact' className='link'>
                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                            </Link>
                        </p>
                    </div>
                </>
            )
        }
    ];

    const testimonials = [
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'john miller'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'david cole'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'anita sam'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'john miller'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'david cole'
        },
        {
            testimony: 'I was looking out for a larger CPA firm that was small enough to know who I am and build a relationship with me, yet large enough to have different internal specialists and viewpoints.',
            name: 'anita sam'
        }
    ];

    return (
        <>
            {/* Hero Slider 2 - start */}
            <HeroSlider2/>
            {/* Hero Slider 2 - end */}

            {/* icon text section - start */}
            <div className="icon-text">
                <div className="icon-text-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="icon-text-box icon-text-box-large txt-center">
                                <div className="icon-circle icon-circle-sm mg-center">
                                    <img src={icon1} alt="icon" />
                                </div>
                                <h4 className="f-w-400 c-grey">Hire a professional CPA & Accounting firm.</h4>
                                <h3 className="f-w-400 c-dark-2">We combine more than 35 years of experience with the latest accounting technology to provide world-className services for a diverse roster of clients world-wide.</h3>
                            </div>
                        </div>
                        <div className="row icon-text-row">
                            <div className="col-lg-6">
                                <div className="icon-text-box txt-center">
                                    <div className="icon-circle icon-circle-sm mg-center">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-34 f-w-400 c-dark-2">Latest Technology</h3>
                                    <h4 className="f-w-400 c-grey">We utilize the latest, state of the art accounting and finance technology to ensure that we stay both progressive and efficient.</h4>
                                    <Link to='/services-detail' className='link'>
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-text-box txt-center">
                                    <div className="icon-circle icon-circle-sm mg-center">
                                        <img src={icon3} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-34 f-w-400 c-dark-2">Transparent Pricing</h3>
                                    <h4 className="f-w-400 c-grey">Enjoy our upfront, fixed price model. We charge by value, not by hours, giving you peace of mind and quality service.</h4>
                                    <Link to='/services-detail' className='link'>
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-text-box txt-center">
                                    <div className="icon-circle icon-circle-sm mg-center">
                                        <img src={icon4} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-34 f-w-400 c-dark-2">Unlimited Contact</h3>
                                    <h4 className="f-w-400 c-grey">We believe in proactive & continuous communication with our clients. Calls and emails are built into our pricing, eliminating unwelcome surprises.</h4>
                                    <Link to='/services-detail' className='link'>
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="icon-text-box txt-center">
                                    <div className="icon-circle icon-circle-sm mg-center">
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    <h3 className="ln-ht-34 f-w-400 c-dark-2">Service Guarantee</h3>
                                    <h4 className="f-w-400 c-grey">We provide a 100% Satisfaction Guarantee on all of our services. If you aren’t delighted we’ll simply refund your money.</h4>
                                    <Link to='/services-detail' className='link'>
                                        <span className="txt-upper f-w-500">learn more</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* icon text section - end */}

            {/* tab section - start */}
            <div className="tab-section">
                <div className="tab-section-wrapper pattern-bg">
                    <div className="pattern-bg-content">
                        <Tabs content={tab_content} />
                    </div>
                    <div className="pattern-bg-image" style={{backgroundImage: `url(${pattern2})`}}></div>
                </div>
            </div>
            {/* tab section - end */}

            {/* testimonial slider section - start */}
            <div className="testimonial testimonial-1">
                <div className='testimonial-wrapper'>
                    <div className="container">
                        <div className="row">
                            <div className="testimonial-heading-content">
                                <h2 className="f-w-400 heading-40">Hear from what others say about our company</h2>
                            </div>
                        </div>
                        <div className="row">
                            <TestimonialSlider testimonials={testimonials} />
                        </div>
                    </div>
                    <div className="background-img" style={{backgroundImage: `url(${testimonial_img_1})`}}></div>
                </div>
            </div>
            {/* testimonial slider section - end */}

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

export default Index2;
