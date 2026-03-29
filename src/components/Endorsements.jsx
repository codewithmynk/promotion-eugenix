'use client';

import React from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Endorsements = ({ data }) => {
    if (!data) return null;

    // Support both new API structure and old JSON structure
    const title = data.title || data.heading;
    const items = data.gallery || data.items || [];
    const itemsCount = items.length;

    const breakpoints = [
        { breakpoint: 1199, slidesToShow: 4 },
        { breakpoint: 991, slidesToShow: 3 },
        { breakpoint: 767, slidesToShow: 2 },
        { breakpoint: 479, slidesToShow: 1 }
    ];

    const { mounted, slidesToShow: defaultSlidesToShow } = useResponsiveSlider(breakpoints, 5);
    const currentSlidesToShow = Math.min(itemsCount, defaultSlidesToShow);

    const settings = {
        infinite: itemsCount > currentSlidesToShow,
        dots: false,
        arrows: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: currentSlidesToShow,
        slidesToScroll: 1,
        responsive: breakpoints.map(bp => ({
            breakpoint: bp.breakpoint,
            settings: { 
                slidesToShow: Math.min(itemsCount, bp.slidesToShow), 
                slidesToScroll: 1,
                infinite: itemsCount > Math.min(itemsCount, bp.slidesToShow)
            }
        }))
    };

    if (!mounted) return null;

    return (
        <section className="endorsement-section media-section ptb-60">
            <div className="container">
                <div className="block-title text-center ptb-20 pt-0 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="small-title uppercase" style={{ color: '#800040', fontWeight: 'normal', fontSize: '22px' }}>{title}</div>
                </div>
                
                <Slider {...settings} className="media-list media-slider wow fadeInUp" data-wow-delay="0.3s">
                    {items.map((item, index) => (
                        <div key={index} className="px-2">
                            <div className="card-media crad-endors group transition-all duration-300">
                                <div className="imgbox rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-transparent group-hover:border-[#800040]/20">
                                   <img 
                                        src={item.image || item.img} 
                                        alt={`Endorsement ${index}`} 
                                        className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
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
