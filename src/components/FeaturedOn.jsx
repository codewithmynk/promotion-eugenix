'use client';

import React from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const FeaturedOn = ({ data }) => {
    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1024, slidesToShow: 4 },
            { breakpoint: 768, slidesToShow: 2 },
            { breakpoint: 480, slidesToShow: 1 },
        ],
        5
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 4, arrows: true }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2, arrows: true }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, arrows: true }
            }
        ]
    };

    // Live API returns 'logos' + 'title'; newer schema uses 'items' + 'sectionTitle'
    const logos = data?.items || data?.logos || [];
    if (!mounted || !data || (Array.isArray(logos) && logos.length === 0)) return null;

    const displayLogos = logos.map(l => ({ name: 'Media Logo', url: l.logo }));
    const sectionTitle = data.sectionTitle || data.title || "AS SEEN ON";

    return (
        <section className="media-section ptb-30 bg4">
            <div className="container">
                <div className="block-title text-center wow fadeInUp" data-wow-delay="0.2s">
                    <div className="small-title">{sectionTitle}</div>
                </div>

                <Slider {...settings} className="media-list media-slider wow fadeInUp" data-wow-delay="0.3s">
                    {displayLogos.map((logo, index) => (
                        <div key={index} className="items">
                            <a className="card-media" href="#" target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={logo.url} 
                                    alt={logo.name}
                                    style={{ height: 'auto', width: 'auto', maxWidth: '160px', maxHeight: '80px' }}
                                />
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default FeaturedOn;
