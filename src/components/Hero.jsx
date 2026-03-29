'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const Hero = ({ data }) => {
    const HERO_DATA = data || {
        heading_line1: "REGAIN YOUR HAIR",
        heading_strong: "EUGENIX",
        description: "Regrow Your Hair. Restore Youriiiiiiiiiiiii Youth. Revive Your Self-esteem!",
        button_text: "Book a Free Consultation",
        banner_img: "/bhubaneswar/react/assets/images/imgi_2_banner-image-1.png"
    };
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true
    };

    return (
        <section id="homeBanner" className="home-banner relative overflow-hidden">
            <Slider {...settings} className="hero-slider">
                <div className="items relative">
                    <div className="container relative h-100">
                        <div className="hero-inner d-flex v-center relative">
                            <div className="hero-caption relative">
                                <div className="relative z-[20] w-full" style={{ position: 'relative', zIndex: 20 }}>
                                    <h1 className="h1 wow fadeInLeft" data-wow-delay="0.2s" style={{ textTransform: 'none', fontWeight: '400' }}>
                                        {HERO_DATA.heading_line1} <strong style={{ color: '#800040' }}>{HERO_DATA.heading_strong}</strong>
                                    </h1>
                                    <p className="wow fadeInLeft" data-wow-delay="0.3s" style={{ marginTop: '15px', color: 'white' }}>
                                        {HERO_DATA.description}
                                    </p>
                                    <div className="btnbox d-flex wow fadeInLeft mobile-center-btn" data-wow-delay="0.4s" style={{ marginTop: '35px' }}>
                                        <style dangerouslySetInnerHTML={{__html: `
                                            @media (min-width: 768px) {
                                                .home-banner, .home-banner .items { 
                                                    min-height: 800px !important; 
                                                    height: 800px !important;
                                                }
                                                .mobile-center-btn { justify-content: flex-start !important; }
                                                .hero-caption { text-align: left !important; }
                                                .hero-caption .h1 { font-size: 66px !important; line-height: 1.2 !important; }
                                                .btn.white-btn { margin-left: 250px !important; }
                                            }
                                            .caption-imgbox {
                                                position: absolute;
                                                right: -40px;
                                                bottom: 0 !important;
                                                top: auto !important;
                                                z-index: 4;
                                                max-width: 940px;
                                                display: flex !important;
                                                align-items: flex-end !important;
                                                height: 100% !important;
                                            }
                                            .caption-imgbox img {
                                                height: 100% !important;
                                                width: auto !important;
                                                object-fit: contain;
                                                object-position: bottom right;
                                            }
                                            @media (max-width: 767px) {
                                                .home-banner, .home-banner .items { 
                                                    min-height: 480px !important; 
                                                    height: auto !important;
                                                    max-height: none !important;
                                                    padding-top: 60px !important;
                                                }
                                                .mobile-center-btn { justify-content: center !important; }
                                                .hero-caption { text-align: center !important; }
                                                .hero-caption h1 { font-size: 32px !important; }
                                                .hero-caption p { font-size: 14px !important; line-height: 1.4 !important; opacity: 0.9; }
                                                .btn.white-btn { margin-left: 0 !important; margin: 0 auto !important; }
                                                .btnbox { justify-content: center !important; }
                                            }
                                            .btn.white-btn {
                                                background: #fff;
                                                color: #800040;
                                                border-radius: 0;
                                                font-weight: 500;
                                                padding: 15px 24px;
                                                border: 1px solid #fff;
                                                display: inline-flex;
                                                align-items: center;
                                            }
                                            .btn.white-btn:hover {
                                                color: #fff !important;
                                                border-color: #800040 !important;
                                            }
                                            .btn.white-btn:hover:before {
                                                background: #800040 !important;
                                            }
                                            .btn.white-btn i {
                                                transition: transform 0.3s ease;
                                            }
                                            .btn.white-btn:hover i {
                                                transform: translateX(5px);
                                            }
                                        `}} />
                                        <a className="btn white-btn big __mPS2id _mPS2id-h" href="#consultation">
                                            <span style={{ display: 'flex', alignItems: 'center' }}>
                                                <span dangerouslySetInnerHTML={{ __html: HERO_DATA.button_text }} /> 
                                                <i className="las la-arrow-right" style={{ marginLeft: "5px", fontSize: "20px" }}></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="caption-imgbox d-flex relative w-full h-[300px] md:h-auto">
                        <Image 
                            src={HERO_DATA.banner_img} 
                            alt="Eugenix Hair Restoration" 
                            width={1000}
                            height={800}
                            priority={true}
                            className="hero-desktop-img hero-mobile-img object-contain md:object-cover"
                        />
                    </div>

                    <div className="wst-grid-particles">
                        <div className="row">
                            <div className="col-md-2 wst-grid-line d-flex"></div>
                            <div className="col-md-2 wst-grid-line d-flex"></div>
                            <div className="col-md-2 wst-grid-line d-flex"></div>
                            <div className="col-md-2 wst-grid-line d-flex"></div>
                            <div className="col-md-2 wst-grid-line d-flex"></div>
                            <div className="col-md-2 wst-grid-line d-flex"></div>
                        </div>
                    </div>
                    <div className="shape_star"></div>
                    <div className="shape_only bounce-y"></div>
                </div>
            </Slider>
            <a id="arrow-next" className="scroll-sign __mPS2id _mPS2id-h" href="#clinicVideo">Scroll Down</a>
        </section>
    );
};

export default Hero;
