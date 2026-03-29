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

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-seen-arrow custom-seen-next"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "50%", transform: "translateY(-50%)", right: "0px", zIndex: 10, width: '40px', height: '40px' }}
            onClick={onClick}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </div>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="custom-seen-arrow custom-seen-prev"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "50%", transform: "translateY(-50%)", left: "0px", zIndex: 10, width: '40px', height: '40px' }}
            onClick={onClick}
        >
            <svg viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '30px', height: '30px', cursor: 'pointer' }}>
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </div>
    );
};


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
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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
                    <div className="small-title uppercase" style={{ color: '#800040', fontWeight: 'normal', fontSize: '22px', lineHeight: '30px', letterSpacing: '0', marginBottom: '0px' }}>{sectionTitle}</div>
                </div>

                <Slider {...settings} className="media-list media-slider wow fadeInUp px-8 md:px-12" data-wow-delay="0.3s">
                    {displayLogos.map((logo, index) => (
                        <div key={index} className="px-2">
                            <div className="imgbox card-media flex items-center justify-center p-2 md:p-4 min-h-[60px] md:min-h-[80px]">
                                <Image 
                                    src={logo.url} 
                                    alt={logo.name} 
                                    width={200}
                                    height={50}
                                    className="max-h-[40px] md:max-h-[50px] w-auto object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Global style for hiding default slick arrow content specifically here */}
            <style dangerouslySetInnerHTML={{__html: `
                .custom-seen-arrow::before {
                    display: none !important;
                }
                .custom-seen-arrow svg:hover {
                    stroke: #666;
                }
            `}} />
        </section>
    );
};

export default FeaturedOn;
