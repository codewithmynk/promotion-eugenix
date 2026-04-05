'use client';

import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useInView } from 'framer-motion';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Journey = ({ data }) => {
    const sectionRef = useRef(null);
    const sliderRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.1 });

    if (!data || !data.items || data.items.length === 0) return null;

    const breakpoints = [
        { breakpoint: 1024, slidesToShow: 3 },
        { breakpoint: 991, slidesToShow: 2 },
        { breakpoint: 767, slidesToShow: 1 },
        { breakpoint: 480, slidesToShow: 1 }
    ];

    const { mounted, slidesToShow } = useResponsiveSlider(breakpoints, 4);

    const settings = {
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: isInView,
        autoplaySpeed: 3000,
        slidesToShow: Math.max(1, slidesToShow || 4),
        slidesToScroll: 1,
        responsive: breakpoints.map(bp => ({
            breakpoint: bp.breakpoint,
            settings: { slidesToShow: bp.slidesToShow, slidesToScroll: 1 }
        }))
    };

    if (!mounted) return null;

    return (
        <section className="journey-section ptb-60 bg4" ref={sectionRef}>
            <div className="container relative">
                <div className="block-title text-center mb-40 wow fadeInUp">
                    <div className="small-title text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: data.sectionTitle || "Your Journey to Success" }} />
                </div>

                <div className="journey-slider-wrapper relative">
                    <Slider {...settings} className="journey-slider wow fadeInUp" data-wow-delay="0.3s" ref={sliderRef} key={`${slidesToShow}-${isInView}`}>
                        {data.items.map((item, index) => (
                            <div key={index} className="px-3">
                                <div className="journey-card text-center shadow-hover p-20 bg-white" style={{ borderRadius: '15px', height: '100%' }}>
                                    <div className="journey-img-box mb-20" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                        <img 
                                            src={item.image} 
                                            alt={item.title} 
                                            style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <h4 className="mb-0" dangerouslySetInnerHTML={{ __html: item.title }} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx>{`
                .journey-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 1px solid #eee;
                }
                .journey-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    border-color: #800040;
                }
            `}</style>
        </section>
    );
};

export default Journey;
