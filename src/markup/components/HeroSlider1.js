import React, { useState, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

// Import Swiper React components
import 'swiper/swiper.scss';
import SwiperCore, { Pagination, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// lightbox
import VideoLightBox from './VideoLightBox';

// react router dom
import { Link } from 'react-router-dom';

// slider images
import SliderImage1 from '../../assets/images/hero-slider-img-5.jpg';
import SliderImage2 from '../../assets/images/index2-hero-img-1.jpg';
import SliderImage3 from '../../assets/images/index2-hero-img-2.jpg';
import SliderImage4 from '../../assets/images/hero-slider-img-4.jpg';

// pagination icons
import icon1 from '../../assets/images/icons/icon-4.png';
import icon2 from '../../assets/images/icons/icon-5.png';
import icon3 from '../../assets/images/icons/icon-6.png';
import icon4 from '../../assets/images/icons/icon-7.png';

SwiperCore.use([Pagination, Controller]);

const HeroSlider1 = () => {

    const [mainSlider, setMainSlider] = useState(null);
    const [paginationSlider, setPaginationSlider] = useState(null);

    const get_bottom_cords = (el, child) => {
        let cords = [];
    
        Array.from(el.querySelectorAll(child)).forEach((element, index) => {
            cords.push(element.getBoundingClientRect().bottom);
        });
    
        return Math.max(...cords);
    }

    const paddingAfter = () => {
        const section = document.querySelector('.sec-hero-slider');
        const slider = document.querySelector('.hero');
        const pagination = document.querySelector('.hero-pagination-wrapper');

        if (typeof(section) != 'undefined' && section != null &&
            typeof(slider) != 'undefined' && slider != null &&
            typeof(pagination) != 'undefined' && pagination != null
        ) {               

            let padding = get_bottom_cords(pagination, '.swiper-slide') -
                slider.getBoundingClientRect().bottom;

            if (window.innerWidth > 992) {
                padding += 13 * parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));
            } else {
                padding += 3.9 * parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('font-size'));
            }

            section.querySelector('.sec-hero-slider-wrapper').style.paddingTop = padding + 'px';

        }
    };

    useEffect(() => {
        paddingAfter();
        window.addEventListener('resize', paddingAfter);
        return () => window.removeEventListener('resize', paddingAfter);
        // eslint-disable-next-line
    }, [])

    const hero_pagination = [
        {
            icon: icon1,
            name: 'Taxtation',
            paragraph: 'Tax planning and complicated tax return preparation.'
        },
        {
            icon: icon2,
            name: 'Business',
            paragraph: 'CFO level work for small and medium sizes businesses.'
        },
        {
            icon: icon3,
            name: 'Consulting',
            paragraph: 'Expert advice on financial planning, mergers, estate and more.'
        },
        {
            icon: icon4,
            name: 'Giving',
            paragraph: 'Charitable work for the local community and beyound.'
        }
    ];

    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-slider">
                    <Swiper
                        resizeObserver={true}
                        className="hero-slider-container"
                        controller={{ control: paginationSlider }}
                        onSwiper={setMainSlider}
                        pagination={
                            {
                                el: '.hero-pagination .swiper-wrapper',
                                type: 'bullets',
                                bulletClass: 'hero-pagination-bullet',
                                bulletActiveClass: 'hero-pagination-bullet-active',
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return ReactDOMServer.renderToStaticMarkup(
                                        <div className={`${className} swiper-slide`}>
                                            <div className="icon-box txt-center">
                                                <div className="icon-circle icon-circle-lg mg-center">
                                                    <img src={hero_pagination[index]['icon']} alt='icon' />
                                                </div>
                                                <h4 className="f-w-500">{hero_pagination[index]['name']}</h4>
                                                <p className="c-grey">{hero_pagination[index]['paragraph']}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        }
                    >
                        <SwiperSlide className="hero-slide">
                            <div className="hero-slide-inner" style={{backgroundImage: `url(${SliderImage1})`}}>
                                <div className="hero-slide-content">
                                    <h1 className="c-dark">Smart financial services for firms and individuals.</h1>
                                    <div className="button-group">
                                        <VideoLightBox
                                            icon="far fa-play-circle"
                                            text="watch our video"
                                            URL={`https://www.youtube.com/watch?v=zKeTYZ_T_bM&origin=${window.location.href}`}
                                        />
                                        <p>Got questions? 
                                            <Link to="/contact" className="link">
                                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero-slide">
                            <div className="hero-slide-inner" style={{backgroundImage: `url(${SliderImage2})`}}>
                                <div className="hero-slide-content">
                                    <h1 className="c-dark">Smart financial services for firms and individuals.</h1>
                                    <div className="button-group">
                                        <VideoLightBox
                                            icon="far fa-play-circle"
                                            text="watch our video"
                                            URL={`https://www.youtube.com/watch?v=zKeTYZ_T_bM&origin=${window.location.href}`}
                                        />
                                        <p>Got questions? 
                                            <a href="contact.html" className="link">
                                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero-slide">
                            <div className="hero-slide-inner" style={{backgroundImage: `url(${SliderImage3})`}}>
                                <div className="hero-slide-content">
                                    <h1 className="c-dark">Smart financial services for firms and individuals.</h1>
                                    <div className="button-group">
                                        <VideoLightBox
                                            icon="far fa-play-circle"
                                            text="watch our video"
                                            URL={`https://www.youtube.com/watch?v=zKeTYZ_T_bM&origin=${window.location.href}`}
                                        />
                                        <p>Got questions? 
                                            <a href="contact.html" className="link">
                                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="hero-slide">
                            <div className="hero-slide-inner" style={{backgroundImage: `url(${SliderImage4})`}}>
                                <div className="hero-slide-content">
                                    <h1 className="c-dark">Smart financial services for firms and individuals.</h1>
                                    <div className="button-group">
                                        <VideoLightBox
                                            icon="far fa-play-circle"
                                            text="watch our video"
                                            URL={`https://www.youtube.com/watch?v=zKeTYZ_T_bM&origin=${window.location.href}`}
                                        />
                                        <p>Got questions? 
                                            <a href="contact.html" className="link">
                                                <span className="txt-upper f-w-500">Talk to an Expert</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="container hero-pagination-wrapper">
                    <Swiper 
                    className="hero-pagination"
                    init={false}
                    slidesPerView={4}
                    spaceBetween={14}
                    onSwiper={setPaginationSlider}
                    controller={{ control: mainSlider }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                            centeredSlides: true,
                            slideToClickedSlide: true,
                            enabled: true
                        },
                        400: {
                            slidesPerView: 1.5,
                            centeredSlides: true,
                            slideToClickedSlide: true,
                            enabled: true
                        },
                        600: {
                            slidesPerView: 1.8,
                            centeredSlides: true,
                            slideToClickedSlide: true,
                            enabled: true
                        },
                        992: {
                            slidesPerView: 4,
                            centeredSlides: false,
                            slideToClickedSlide: false,
                            enabled: false
                        }
                    }}
                    >
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider1;
