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
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);

    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1199, slidesToShow: 3 },
            { breakpoint: 991, slidesToShow: 2 },
            { breakpoint: 768, slidesToShow: 2 },
        ],
        6
    );

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

    useEffect(() => {
        setNav1(sliderRef1.current);
        setNav2(sliderRef2.current);
    }, [mounted]);

    const navSettings = {
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
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
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
        ]
    };

    const contentSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true
    };

    if (!mounted) return null;

    return (
        <section className="service-section">
            <div className="block-title text-center bg-white ptb-40 mb-0 wow fadeInUp" data-wow-delay="0.2s">
                <div className="container">
                    <div className="small-title">{sectionTitle}</div>
                </div>
            </div>

            <div className="service-tab-block relative wow fadeInUp" data-wow-delay="0.3s">
                <div className="container">
                    <Slider key={slidesToShow} asNavFor={nav2} ref={sliderRef1} {...navSettings} className="service-list-tab serv-slider-nav px-8 md:px-12">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="items">
                                <div className="card-serv-icon">
                                    <i className="iconbox">
                                        <img src={service.icon} alt={service.title} className="rocket-lazyload" width={80} height={80} />
                                    </i>
                                    <span className="tab-tl">{service.title}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className="serv-tab-main relative ptb-40 wow fadeInUp" data-wow-delay="0.4s">
                <div className="container relative">
                    <Slider key="content-slider" asNavFor={nav1} ref={sliderRef2} {...contentSettings} className="serv-slider-for">
                        {SERVICES_DATA.map((service, index) => (
                            <div key={index} className="items">
                                <div className="serv-tab-content entry-content ptb-20 pt-0">
                                    <div className="row serv-text-inner">
                                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 left-block">
                                            <h3>{service.title}</h3>
                                            <div dangerouslySetInnerHTML={{ __html: service.content }}></div>
                                            <div className="btnbox pt-0">
                                                <a className="btn primary __mPS2id _mPS2id-h" href="#consultation">
                                                    <span><strong>{btnLabel}</strong> <i className="las la-arrow-right"></i></span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 right-block">
                                            <div className="serv-text-imgbox">
                                                <img src={service.img} alt={service.title} className="rocket-lazyload" width={500} height={400} />
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
