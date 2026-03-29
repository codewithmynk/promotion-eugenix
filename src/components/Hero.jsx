'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

const Hero = ({ data }) => {
    const HERO_DATA = data || {
        subtitle: "REGAIN YOUR HAIR",
        title: "EUGENIX",
        description: "Regrow Your Hair. Restore Your Youth. Revive Your Self-esteem!",
        button_label: "Book a Free Consultation",
        button_link: "#consultation",
        image: "/bhubaneswar/react/assets/images/imgi_2_banner-image-1.png"
    };
    
    // Default slick settings matching WP theme main.js
    const settings = {
        dots: true,
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
        <section id="homeBanner" className="home-banner">
            <Slider {...settings} className="hero-slider">
                <div className="items">
                    <div className="container relative h-100">
                        <div className="hero-inner d-flex v-center relative">
                            <div className="hero-caption">
                                <div className="relative">
                                    {HERO_DATA.subtitle && (
                                        <p className="pre-title wow fadeInLeft" data-wow-delay="0.1s">
                                            {HERO_DATA.subtitle}
                                        </p>
                                    )}
                                    {HERO_DATA.title && (
                                        <h1 
                                            className="h1 wow fadeInLeft" 
                                            data-wow-delay="0.2s"
                                            dangerouslySetInnerHTML={{ __html: HERO_DATA.title }}
                                        />
                                    )}
                                    {HERO_DATA.description && (
                                        <p className="wow fadeInLeft" data-wow-delay="0.3s">
                                            {HERO_DATA.description}
                                        </p>
                                    )}
                                    {HERO_DATA.button_label && (
                                        <div className="btnbox d-flex wow fadeInLeft" data-wow-delay="0.4s">
                                            <a className="btn white-btn big ml-auto" href={HERO_DATA.button_link || "#consultation"}>
                                                <span>
                                                    <span dangerouslySetInnerHTML={{ __html: HERO_DATA.button_label }} /> 
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {HERO_DATA.image && (
                        <div className="caption-imgbox d-flex">
                            <Image 
                                src={HERO_DATA.image} 
                                alt="Eugenix Hair Restoration" 
                                width={1000}
                                height={800}
                                priority={true}
                            />
                        </div>
                    )}

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
            <a id="arrow-next" className="scroll-sign" href="#clinicVideo">Scroll Down</a>
        </section>
    );
};

export default Hero;
