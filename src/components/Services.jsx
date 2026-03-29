'use client';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Services = ({ data }) => {
    const SERVICES_DATA = data?.items || [];
    const sectionTitle = data?.section_title || "Hair Transplant Services";
    const btnLabel = data?.button_label || "Get Free Consultation";

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1199, slidesToShow: 3 },
            { breakpoint: 991, slidesToShow: 2 },
            { breakpoint: 768, slidesToShow: 2 },
        ],
        6
    );

    const navSettings = {
        slidesToShow: Math.max(1, slidesToShow || 6),
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, arrows: true }
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

    const contentSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: false
    };

    if (!mounted) return null;

    return (
        <section className="service-section">
            <div className="block-title text-center bg-white ptb-40 mb-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="container">
                    <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                </div>
            </div>

            <div className="service-tab-block relative wow fadeInUp" data-wow-delay="0.3s">
                <div className="container">
                    <Slider key={slidesToShow} asNavFor={nav2 || undefined} ref={setNav1} {...navSettings} className="service-list-tab row serv-slider-nav">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="items">
                                <div className="card-serv-icon">
                                    <i className="iconbox">
                                        <img src={service.icon} alt={service.title} />
                                    </i>
                                    <span className="tab-tl" dangerouslySetInnerHTML={{ __html: service.title }} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="serv-tab-main relative ptb-40 wow fadeInUp" data-wow-delay="0.4s">
                <div className="container relative">
                    <Slider key={slidesToShow} asNavFor={nav1 || undefined} ref={setNav2} {...contentSettings} className="serv-slider-for">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="items">
                                <div className="serv-tab-content entry-content ptb-20 pt-0">
                                    <div className="row serv-text-inner">
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 left-block">
                                            <h3>{service.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: service.content }}></div>
                                            <div className="btnbox pt-0">
                                                <a className="btn primary" href="#consultation">
                                                    <span>{btnLabel} <i className="las la-arrow-right"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 right-block">
                                            <div className="serv-text-imgbox">
                                                <img src={service.image} alt={service.title} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Services;
