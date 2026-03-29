'use client';

import React from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <i className="las la-angle-left"></i>
        </button>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <i className="las la-angle-right"></i>
        </button>
    );
};

const TextTestimonials = ({ data }) => {
    if (!data) return null;

    const breakpoints = [
        { breakpoint: 1024, slidesToShow: 2 },
        { breakpoint: 991, slidesToShow: 1 },
        { breakpoint: 767, slidesToShow: 1 },
        { breakpoint: 480, slidesToShow: 1 }
    ];

    const { mounted, slidesToShow } = useResponsiveSlider(breakpoints, 2);

    const settings = {
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        slidesToShow: Math.max(1, slidesToShow || 2),
        slidesToScroll: 1,
        responsive: breakpoints.map(bp => ({
            breakpoint: bp.breakpoint,
            settings: { slidesToShow: bp.slidesToShow, slidesToScroll: 1 }
        }))
    };

    if (!mounted) return null;

    return (
        <section className="testimonial-section bg1 ptb-60">
            <div className="shape_only bounce-y"></div>
            <div className="container relative">
                <div className="block-title wow fadeInUp" data-wow-delay="0.2s">
                    <h2 className="text-white text-uppercase">{data.section_title || data.heading || "Real Patient Reviews"}</h2>
                </div>
                
                <div className="relative">
                    <div className="sigma_dots"></div>
                    <Slider {...settings} className="row testimonial-list testimonial-slider wow fadeInUp" data-wow-delay="0.3s">
                        {data.items.map((item, index) => (
                            <div key={index} className="items">
                                <div className="card-testi d-flex">
                                    <div className="quote-icon">
                                        <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4286 0L17.1429 5.71429V28.5714H0V11.4286H5.71429L0 5.71429L5.71429 0H11.4286ZM34.2857 0L40 5.71429V28.5714H22.8571V11.4286H28.5714L22.8571 5.71429L28.5714 0H34.2857Z" fill="#800040" fillOpacity="0.5"/>
                                        </svg>
                                    </div>
                                    <div className="testimonial-text mb-4" dangerouslySetInnerHTML={{ __html: item.text }}></div>

                                    <div className="client-info mt-auto d-flex v-center j-between">
                                        <div className="text client-name-wrapper">
                                            <strong className="client-name">{item.name}</strong>
                                        </div>
                                        
                                        <div className="star-box d-flex">
                                            {[...Array(5)].map((_, i) => (
                                                <i key={i} className={`las la-star ${i < item.rating ? 'checked' : ''}`}></i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default TextTestimonials;
