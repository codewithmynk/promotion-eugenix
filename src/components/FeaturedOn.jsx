'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

import toiLogo from '../assets/images/imgi_7_the-times-of-india-logo-png_seeklogo-537021.png';
import htLogo from '../assets/images/imgi_6_time-now-logo.png';
import news18Logo from '../assets/images/imgi_3_news18-logo-vector.png';
import aajTakLogo from '../assets/images/imgi_4_aaj-tak-logo.png';
import curlyTalesLogo from '../assets/images/imgi_5_curlytales-logo.png';
import filmfareLogo from '../assets/images/imgi_8_Filmfare.png';
import brutLogo from '../assets/images/imgi_9_brut.png';

const LOGOS = [
    { name: 'Times of India', url: toiLogo },
    { name: 'Hindustan Times', url: htLogo },
    { name: 'News18', url: news18Logo },
    { name: 'Aaj Tak', url: aajTakLogo },
    { name: 'Curly Tales', url: curlyTalesLogo },
    { name: 'Filmfare', url: filmfareLogo },
    { name: 'Brut', url: brutLogo }
];

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

    if (!mounted) return null;

    const displayLogos = data?.logos && data.logos.length > 0 
        ? data.logos.map(l => ({ name: 'Media Logo', url: l.logo }))
        : LOGOS;

    const sectionTitle = data?.title || "AS SEEN ON";

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
                                <Image 
                                    src={logo.url} 
                                    alt={logo.name} 
                                    width={200}
                                    height={80}
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
