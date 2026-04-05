'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useInView } from 'framer-motion';
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
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.1 });

    if (!data) return null;

    // Live API: section_title + gallery[]; new schema: sectionTitle + items[]
    const title = data.sectionTitle || data.section_title;
    const items = data.items || data.gallery || [];
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
        autoplay: isInView,
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
        <section className="endorsement-section media-section ptb-60" ref={sectionRef}>
            <div className="container">
                {title && (
                    <div className="block-title text-center mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="small-title text-uppercase mb-0">{title}</div>
                    </div>
                )}
                
                <Slider {...settings} className="endorsement-list media-slider wow fadeInUp" data-wow-delay="0.3s" ref={sliderRef} key={`${defaultSlidesToShow}-${isInView}`}>
                    {items.map((item, index) => (
                        <div key={index} className="items px-3">
                            <div className="card-media crad-endors">
                                <div className="imgbox">
                                   <img 
                                        src={item.image} 
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
