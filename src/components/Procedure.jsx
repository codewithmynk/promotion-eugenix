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

    const PROCEDURES = data?.items || [];
    const sectionTitle = data?.section_title || "Hair Transplant Process";
    const btnLabel = data?.button_label || "Get Free Consultation";
    const btnLink = data?.button_link || "#consultation";
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: Math.max(1, slidesToShow || 4),
        slidesToScroll: 1,
        arrows: true,
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
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                        <h2 dangerouslySetInnerHTML={{ __html: sectionTitle }} />
                    </div>
                </div>

                <Slider key={slidesToShow} {...settings} className="procedure-list procedure-slider ptb-20 pb-0">
                    {PROCEDURES.map((item, idx) => (
                        <div key={idx} className="items wow fadeInLeft" data-wow-delay={`${0.1 * (idx + 1)}s`}>
                            <div className="card-procedure">
                                <i className="iconbox">
                                    <Image src={item.icon} alt={item.title} width={60} height={60} />
                                </i>
                                <h4>{item.title}</h4>
                                <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Procedure;
