import React from 'react';

// react router dom
import { Link } from 'react-router-dom';

// components
import PageHeader from '../components/PageHeader';
import PageHeaderList from '../components/PageHeaderList';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import TestimonialSlider from '../components/TestimonialSlider';

// images
import header_image from '../../assets/images/page-header-img.jpg';
import signature from '../../assets/images/signature.png';
import intro_bg from '../../assets/images/intro-bg-1.jpg';
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';
import testimonial_img_2 from '../../assets/images/testimonial-bg-2.jpg';

const About = () => {

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
                        text: 'About',
                        to: '/about',
                        active: true
                    },
                    {
                        text: 'Our Team',
                        to: '/team',
                        active: false
                    },
                    {
                        text: 'Careers',
                        to: '/careers',
                        active: false
                    }
                ]} 
            />
            {/* page header list - end */}

            {/* intro section - start */}
             <div className="intro">
                <div className="intro-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="intro-content">
                                    <h2>About Satgur</h2>
                                    <p className="paragraph-lg c-grey">Founded by GFXPARTNER in December of 1987, Satgur has grown from a hard working duo to a team of over twenty experienced professionals. The son of lifelong entrepreneurs have founded Satgur to help other business owners to be successful and in control.</p>
                                    <p className="paragraph-lg c-grey">At Satgur, enjoy custom fixed price agreements tailored to your needs and face-to-face meetings with our experienced professionals. Then rest assured knowing that your work is reviewed by senior staff and that tax returns are always double-checked.</p>
                                    <img src={signature} alt="signature" />
                                    <p className="paragraph-sm c-grey">CPA/PFS, CFP®, CGMA, CDFA</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="vertical-txt-wrapper right-align">
                                    <h1 className="vertical-txt">Satgur</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image intro-bg">
                        <img src={intro_bg} alt="intro-bg" />
                    </div>
                </div>
            </div>
            {/* intro section - end */}
            
            {/* cta section - start */}
            <div className="cta-section b-primary">
                <div className="cta-section-wrapper section-wrapper" style={{backgroundImage: `url(${pattern1})`}}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content txt-center">
                                <h4 className='c-white f-w-400 ln-ht-44'>Hire a professional CPA & Accounting firm.</h4>
                                <h3 className="c-white f-w-400 heading-50 mg-center">We combine more than 35 years of experience with the latest accounting technology to provide world-className services for a diverse roster of clients world-wide.</h3>
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
                    <div className="background-img" style={{backgroundImage: `url(${testimonial_img_2})`}}></div>
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

export default About;
