import React, { useEffect, useRef } from 'react';

// Import Swiper React components
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const Tabs = ({ content }) => {

    const element = useRef(null);

    const tab_content_height = () => {
        const tab_content = element.current.querySelector('.tab-content');
    
        const heights = [];
    
        Array.from(tab_content.children).forEach((element, index) => {
            heights.push(element.offsetHeight);
        });
    
        tab_content.style.height = Math.max(...heights) + 'px';
    }

    useEffect(() => {
        // add attributes and classes to the .swiper-wrapper
        const wrapper = element.current.querySelector('.swiper-wrapper');
        wrapper.classList.add('nav', 'nav-tabs');
        wrapper.setAttribute('role', 'tablist');
        wrapper.id = 'nav-tab';
    }, []);

    useEffect(() => {
        tab_content_height();
        window.addEventListener('resize', tab_content_height);

        return (() => window.removeEventListener('resize', tab_content_height));
    }, []);

    return (
        <div className="container" ref={element}>
            <div className="row d-flex align-items-center">
                <div className="col-lg-5 order-lg-1 order-2">
                    <div className="tab-content" id="nav-tabContent">

                        { content.map((element, index) => {
                            return (
                                <div key={index} className={`tab-pane fade ${index === 0 ? 'show active': ''}`}
                                id={`nav-${index}`} role="tabpanel" 
                                aria-labelledby={`nav-${index}-tab`}>
                                    {element.content}
                                </div>
                            );
                        }) }

                      
                      
                    </div>
                </div>
                <Swiper
                    className="col-lg-6 offset-lg-1 order-lg-2 order-1 tab-row"
                    breakpoints={{
                            0: {
                                slidesPerView: 1.8,
                                slideToClickedSlide: true,
                                slidesPerGroup: 1.8
                            },
                            992: {
                                slidesPerView: 2.2,
                                centeredSlides: false,
                                loop: false,
                                spaceBetween: 30,
                                slideToClickedSlide: false
                            }
                    }}
                >
                    { content.map((element, index) => {
                        return (
                            <SwiperSlide
                            key={index}
                            className={`nav-link${index === 0 ? ' active': ''}`} 
                            id={`nav-${index}-tab`} 
                            data-bs-toggle="tab" 
                            data-bs-target={`#nav-${index}`} 
                            type="button" 
                            role="tab" 
                            aria-controls={`nav-${index}`} 
                            aria-selected={index === 0 ? 'true' : 'false'}
                            >
                                {element.pagination}
                            </SwiperSlide>
                        );
                    }) }
                  
                    <SwiperSlide className="nav-link swiper-slide nav-link-placeholder"
                            data-bs-toggle="tab"
                            type="button" role="tab"
                            aria-selected="false">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Tabs;