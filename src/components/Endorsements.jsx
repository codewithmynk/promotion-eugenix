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

const Endorsements = ({ data }) => {
    if (!data) return null;

    // Support all API structure variations
    const title = data.section_title || data.title || data.heading;
    const items = data.gallery || data.items || [];
    const itemsCount = items.length;

    const breakpoints = [
        { breakpoint: 1199, slidesToShow: 4 },
        { breakpoint: 991, slidesToShow: 3 },
        { breakpoint: 767, slidesToShow: 1 }
    ];

    const { mounted, slidesToShow: defaultSlidesToShow } = useResponsiveSlider(breakpoints, 5);
    
    if (!mounted || itemsCount === 0) return null;

    const currentSlidesToShow = Math.min(itemsCount, defaultSlidesToShow);

    const settings = {
        infinite: itemsCount > 1,
        dots: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: Math.max(1, currentSlidesToShow),
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: { slidesToShow: Math.min(itemsCount, 4), slidesToScroll: 1, arrows: false }
            },
            {
                breakpoint: 991,
                settings: { slidesToShow: Math.min(itemsCount, 3), slidesToScroll: 1, arrows: false }
            },
            {
                breakpoint: 767,
                settings: { slidesToShow: 1, slidesToScroll: 1, arrows: true }
            }
        ]
    };

    if (!mounted) return null;

    return (
        <section className="endorsement-section media-section ptb-60">
            <div className="container">
                {title && (
                    <div className="block-title text-center mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="small-title text-uppercase mb-0">{title}</div>
                    </div>
                )}
                
                <Slider {...settings} className="media-list media-slider wow fadeInUp" data-wow-delay="0.3s">
                    {items.map((item, index) => (
                        <div key={index} className="items px-3">
                            <div className="card-media crad-endors">
                                <div className="imgbox">
                                   <img 
                                        src={item.image || item.img} 
                                        alt={`Endorsement ${index}`} 
                                    />
                               </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Endorsements;
