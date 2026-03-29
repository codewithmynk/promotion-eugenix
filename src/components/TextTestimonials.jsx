'use client';

import React from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        // We still keep responsive for client-side resizing
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
                    <h2 className="text-white">{data.section_title || data.heading || "Real Patient Reviews"}</h2>
                </div>
                
                <div className="relative">
                    <div className="sigma_dots"></div>
                    <Slider {...settings} className="testimonial-list testimonial-slider wow fadeInUp" data-wow-delay="0.3s">
                        {data.items.map((item, index) => (
                            <div key={index} className="px-3">
                                <div className="card-testi d-flex">
                                    <div className="quote-icon"></div>
                                    <p dangerouslySetInnerHTML={{ __html: item.text }}></p>

                                    <div className="client-info mt-auto d-flex v-center">
                                        <div className="text">
                                            <strong className="client-name">{item.name}</strong>
                                        </div>
                                        
                                        <div className="star-box d-flex ml-auto">
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
