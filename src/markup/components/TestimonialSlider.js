import React from 'react';

// Import Swiper React components
import 'swiper/swiper.scss';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Pagination]);

const TestimonialSlider = ({ testimonials }) => {
    return (
        <div className="slider box-slider">
        <Swiper
            className="box-slider-container"
            resizeObserver={true}
            slidesPerView={3}
            spaceBetween={30}
            pagination={
                {
                    el: '.box-slider-pagination',
                    type: 'bullets',
                    bulletActiveClass: 'box-slider-pagination-bullet-active bullet-active',
                    bulletClass: 'box-slider-pagination-bullet bullet',
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
            { testimonials.map((testimonial, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        className="box-slide"
                    >
                        <div className="box-slide-inner">
                            <p className="c-grey">“{testimonial.testimony}”</p>
                            <h5 className="txt-sm txt-upper lt-1 c-primary">{testimonial.name}</h5>
                        </div>
                    </SwiperSlide>
                );
            }) }
        </Swiper>
        <div className="box-slider-pagination bullet-pagination"></div>
        </div>
    )
};

export default TestimonialSlider;
