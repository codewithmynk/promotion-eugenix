'use client';

import React from 'react';

const Hero = ({ data, isHomePage }) => {
    if (!data || (!data.title && !data.subtitle && !data.image)) return null;
    
    // Strict mapping to PHP API (eugenix-headless-api.php)
    let title = data.title || "";
    const subtitle = data.subtitle || "";
    const description = data.description || "";
    const buttonLabel = data.buttonLabel || "FREE Consultation";
    const buttonLink = data.buttonLink || "#contact-section";
    const heroImage = data.image || "";
    
    // Automatic Highlight: If no strong tag is present, wrap the last word to ensure brand color styling
    if (title && !title.includes('<strong>') && !title.includes('<b>')) {
        const words = title.trim().split(' ');
        if (words.length > 1) {
            const lastWord = words.pop();
            title = words.join(' ') + ` <strong>${lastWord}</strong>`;
        }
    }

    return (
        <section id="homeBanner" className="home-banner shadow-none">
            <div className="hero-slider">
                <div className="items">
                    <div className="container relative h-100">
                        <div className="hero-inner d-flex v-center relative">
                            <div className="hero-caption">
                                <div className="relative">
                                    {subtitle && (
                                        <p className="pre-title wow fadeInLeft" data-wow-delay="0.1s">
                                            {subtitle}
                                        </p>
                                    )}
                                    {title && (
                                        <h1 
                                            className="h1 wow fadeInLeft" 
                                            data-wow-delay="0.2s"
                                            dangerouslySetInnerHTML={{ __html: title }}
                                        />
                                    )}
                                    {description && (
                                        <p className="wow fadeInLeft" data-wow-delay="0.3s">
                                            {description}
                                        </p>
                                    )}
                                    {buttonLabel && (
                                        <div className="btnbox d-flex wow fadeInLeft" data-wow-delay="0.4s">
                                            <a className={`btn white-btn big ${isHomePage ? 'ml-auto' : ''}`} href={buttonLink}>
                                                <span>
                                                    <span dangerouslySetInnerHTML={{ __html: buttonLabel }} /> 
                                                    <i className="las la-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {heroImage && (
                        <div className="caption-imgbox d-flex">
                            <img
                                src={heroImage}
                                alt="Eugenix Hair Restoration"
                                style={{ maxWidth: '100%', height: 'auto' }}
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
            </div>
            <a id="arrow-next" className="scroll-sign" href="#clinicVideo">Scroll Down</a>
        </section>
    );
};

export default Hero;
