import React from 'react';

// Import Swiper React components
import 'swiper/swiper.scss';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Pagination]);

const IconSlider = ({ content }) => {
    return (
        <div className="slider icon-box-slider">
        <Swiper
            className="icon-box-slider-container"
            resizeObserver={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={
                {
                    el: '.icon-box-slider-pagination',
                    type: 'bullets',
                    bulletActiveClass: 'icon-box-slider-pagination-bullet-active bullet-active',
                    bulletClass: 'icon-box-slider-pagination-bullet bullet',
                    clickable: true,
                }
            }
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                992: {
                    slidesPerView: 3
                }
            }}
        >
            { content.map((item, index) => {
                return (
                    <SwiperSlide
                        className="icon-box-slide"
                        key={index}
                    >
                        <div className="icon-box-slide-inner icon-box txt-center">
                            <div className="icon-circle icon-circle-sm mg-center">
                                <img src={item.icon} alt="icon" />
                            </div>
                            <h4 className="f-w-500">{item.heading}</h4>
                            <p className="c-grey">{item.paragraph}</p>
                        </div>
                    </SwiperSlide>
                );
            }) }
    
    
        </Swiper>
        <div className="icon-box-slider-pagination bullet-pagination"></div>
        </div>
    )
};

export default IconSlider;
