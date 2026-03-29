'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { useResponsiveSlider } from '../hooks/useResponsiveSlider';

const Procedure = ({ data }) => {
    const { mounted, slidesToShow } = useResponsiveSlider(
        [
            { breakpoint: 1199, slidesToShow: 3 },
            { breakpoint: 991, slidesToShow: 2 },
            { breakpoint: 768, slidesToShow: 1 },
        ],
        4
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

    const PROCEDURES = data?.items || [];
    const sectionTitle = data?.section_title || "Hair Transplant Process";
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
                }
            }
        ]
    };

    if (!mounted) return null;

    return (
        <section className="procedure-section ptb-60 bg4">
            <div className="shape_star bounce-y"></div>
            <div className="container relative">
                <div className="sigma_dots"></div>

                <div className="block-title row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft text-center" data-wow-delay="0.2s">
                        <div className="small-title uppercase">{sectionTitle}</div>
                    </div>
                </div>

                <Slider key={slidesToShow} {...settings} className="procedure-list procedure-slider ptb-20 pb-0 px-8 md:px-12">
                    {PROCEDURES.map((item, idx) => (
                        <div key={idx} className="items wow fadeInLeft" data-wow-delay={`${0.1 * (idx + 1)}s`}>
                            <div className="card-procedure">
                                <i className="iconbox d-flex v-center j-center">
                                    <Image src={item.icon} alt={item.title} className="rocket-lazyload" width={100} height={100} />
                                </i>
                                <h4>{item.title}</h4>
                                <div className="text-sm opacity-80" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Procedure;
