import React from 'react';

// sliders
import HeroSlider1 from '../components/HeroSlider1';
import IconSlider from '../components/IconSlider';
import TestimonialSlider from '../components/TestimonialSlider';

// button
import Button from '../components/Button';

// images
import pattern1 from '../../assets/images/patterns/pattern.png';
import pattern2 from '../../assets/images/patterns/pattern-2.png';
import signature from '../../assets/images/signature.png';
import intro_bg from '../../assets/images/index2-hero-img-1.jpg';
import testimonial_img_1 from '../../assets/images/index2-hero-img-2.jpg';

// icons
import icon1 from '../../assets/images/icons/icon-1.png';
import icon2 from '../../assets/images/icons/icon-2.png';
import icon3 from '../../assets/images/icons/icon-3.png';

const Index1 = () => {

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
            {/* Hero Slider 1 - start */}
            <HeroSlider1/>
            {/* Hero Slider 1 - end */}

            {/* cta - start */}
            <div className="cta-section cta-section-1 sec-hero-slider b-primary">
                <div className="cta-section-wrapper sec-hero-slider-wrapper section-wrapper" style={{ backgroundImage: `url(${pattern1})` }}>
                    <div className="container">
                        <div className="row">
                            <div className="cta-section-content sec-hero-slider-content txt-center">
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
            {/* cta - end*/}

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
}

export default Index1;
